import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface AppointmentDetails {
  name: string;
  email: string;
  startTime: string;
  endTime: string;
  notes?: string;
}

export const getAvailableTimeSlots = async (date: string): Promise<TimeSlot[]> => {
  try {
    const response = await axios.get(`${API_URL}/calendar/available-slots`, {
      params: { date }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching available time slots:', error);
    // Return empty array instead of throwing to handle gracefully in UI
    return [];
  }
};

export const scheduleAppointment = async (details: AppointmentDetails): Promise<{ success: boolean, appointmentId?: string }> => {
  try {
    const response = await axios.post(`${API_URL}/calendar/schedule`, details);
    return response.data;
  } catch (error) {
    console.error('Error scheduling appointment:', error);
    return { success: false };
  }
};