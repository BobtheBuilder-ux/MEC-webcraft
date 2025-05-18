"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleAppointment = exports.getAvailableTimeSlots = void 0;
const google_auth_library_1 = require("google-auth-library");
const axios_1 = __importDefault(require("axios"));
const CALENDAR_API_URL = 'https://www.googleapis.com/calendar/v3';
const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || 'clients@mecwebcraft.com';
const DEFAULT_TIMEZONE = 'America/New_York'; // Default timezone for the business
const getAuthToken = async () => {
    try {
        const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY;
        if (!serviceAccountEmail || !privateKey) {
            console.error('Missing credentials:', {
                hasEmail: !!serviceAccountEmail,
                hasKey: !!privateKey
            });
            throw new Error('Missing Google Calendar service account credentials');
        }
        console.log('Initializing JWT with service account:', serviceAccountEmail);
        const auth = new google_auth_library_1.JWT({
            email: serviceAccountEmail,
            key: privateKey.replace(/\\n/g, '\n'),
            scopes: ['https://www.googleapis.com/auth/calendar'],
        });
        console.log('Getting access token...');
        const token = await auth.getAccessToken();
        if (!token.token) {
            console.error('Token response:', token);
            throw new Error('Failed to obtain Google Calendar access token');
        }
        console.log('Successfully obtained access token');
        return token.token;
    }
    catch (error) {
        console.error('Error getting auth token:', {
            message: error.message,
            stack: error.stack,
            details: error.response?.data
        });
        throw new Error(`Calendar authentication failed: ${error.message}`);
    }
};
const getAvailableTimeSlots = async (date, timezone) => {
    console.log('Getting available slots for date:', date, 'timezone:', timezone);
    try {
        // Validate date format
        if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
            throw new Error('Invalid date format. Expected YYYY-MM-DD');
        }
        const token = await getAuthToken();
        console.log('Successfully obtained auth token');
        // Use provided timezone or default
        const timeZone = timezone || DEFAULT_TIMEZONE;
        // Convert date to timezone-aware ISO string for start and end of day
        const startDate = new Date(`${date}T00:00:00`);
        const endDate = new Date(`${date}T23:59:59`);
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            throw new Error('Invalid date conversion');
        }
        console.log('Fetching busy periods for:', {
            timeMin: startDate.toISOString(),
            timeMax: endDate.toISOString(),
            timeZone,
            calendarId: CALENDAR_ID
        });
        const response = await axios_1.default.post(`${CALENDAR_API_URL}/freeBusy`, {
            timeMin: startDate.toISOString(),
            timeMax: endDate.toISOString(),
            timeZone,
            items: [{ id: CALENDAR_ID }],
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        console.log('Calendar API response:', JSON.stringify(response.data, null, 2));
        if (!response.data?.calendars?.[CALENDAR_ID]) {
            console.error('Invalid calendar response:', response.data);
            throw new Error('Invalid calendar response');
        }
        const busyPeriods = response.data.calendars[CALENDAR_ID]?.busy || [];
        console.log('Found busy periods:', busyPeriods);
        const slots = generateAvailableTimeSlots(date, busyPeriods, timeZone);
        console.log('Generated available slots:', slots.length);
        return slots;
    }
    catch (error) {
        console.error('Error fetching available time slots:', {
            message: error.message,
            stack: error.stack,
            isAxiosError: axios_1.default.isAxiosError(error),
            response: axios_1.default.isAxiosError(error) ? {
                data: error.response?.data,
                status: error.response?.status,
                headers: error.response?.headers
            } : undefined
        });
        throw new Error(`Failed to fetch available slots: ${error.message}`);
    }
};
exports.getAvailableTimeSlots = getAvailableTimeSlots;
const scheduleAppointment = async (details) => {
    try {
        const token = await getAuthToken();
        // Check if slot is still available before scheduling
        const slotDate = new Date(details.startTime).toISOString().split('T')[0];
        const availableSlots = await (0, exports.getAvailableTimeSlots)(slotDate, details.timezone);
        const isSlotAvailable = availableSlots.some(slot => slot.startTime === details.startTime &&
            slot.endTime === details.endTime &&
            slot.available);
        if (!isSlotAvailable) {
            throw new Error('Selected time slot is no longer available');
        }
        const timeZone = details.timezone || DEFAULT_TIMEZONE;
        const response = await axios_1.default.post(`${CALENDAR_API_URL}/calendars/${CALENDAR_ID}/events`, {
            summary: `Consultation with ${details.name}`,
            description: `Lead inquiry consultation.\nContact: ${details.email}\nNotes: ${details.notes || 'None'}`,
            start: {
                dateTime: details.startTime,
                timeZone
            },
            end: {
                dateTime: details.endTime,
                timeZone
            },
            attendees: [
                { email: details.email }
            ],
            sendUpdates: 'all',
            reminders: {
                useDefault: false,
                overrides: [
                    { method: 'email', minutes: 24 * 60 }, // 24 hours before
                    { method: 'popup', minutes: 30 } // 30 minutes before
                ]
            }
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        if (!response.data?.id) {
            throw new Error('Invalid appointment response');
        }
        return {
            success: true,
            appointmentId: response.data.id
        };
    }
    catch (error) {
        console.error('Error scheduling appointment:', error);
        throw new Error(`Failed to schedule appointment: ${error.message}`);
    }
};
exports.scheduleAppointment = scheduleAppointment;
const generateAvailableTimeSlots = (date, busyPeriods, timeZone) => {
    const slots = [];
    const businessHoursStart = 9;
    const businessHoursEnd = 17;
    const slotDurationMinutes = 30;
    const bufferMinutes = 5; // 5-minute buffer between appointments
    const baseDate = new Date(`${date}T${businessHoursStart.toString().padStart(2, '0')}:00:00`);
    const endTime = new Date(`${date}T${businessHoursEnd.toString().padStart(2, '0')}:00:00`);
    // Ensure baseDate is in the future
    const now = new Date();
    if (baseDate < now) {
        // If we're past the business hours start time, start from the next available slot
        const currentMinutes = now.getMinutes();
        const nextSlotMinutes = Math.ceil(currentMinutes / slotDurationMinutes) * slotDurationMinutes;
        now.setMinutes(nextSlotMinutes, 0, 0);
        if (now > endTime) {
            return []; // No more slots available today
        }
        baseDate.setTime(now.getTime());
    }
    while (baseDate < endTime) {
        const slotStart = new Date(baseDate);
        const slotEnd = new Date(baseDate);
        slotEnd.setMinutes(slotEnd.getMinutes() + slotDurationMinutes);
        // Add buffer time to check for conflicts
        const slotStartWithBuffer = new Date(slotStart);
        slotStartWithBuffer.setMinutes(slotStartWithBuffer.getMinutes() - bufferMinutes);
        const slotEndWithBuffer = new Date(slotEnd);
        slotEndWithBuffer.setMinutes(slotEndWithBuffer.getMinutes() + bufferMinutes);
        const isAvailable = !busyPeriods.some(period => {
            const busyStart = new Date(period.start);
            const busyEnd = new Date(period.end);
            return (slotStartWithBuffer < busyEnd && slotEndWithBuffer > busyStart);
        });
        slots.push({
            startTime: slotStart.toISOString(),
            endTime: slotEnd.toISOString(),
            available: isAvailable
        });
        baseDate.setMinutes(baseDate.getMinutes() + slotDurationMinutes);
    }
    return slots;
};
