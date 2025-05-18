import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

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
  timezone?: string;
  notes?: string;
}

export const getAvailableTimeSlots = async (date: string): Promise<TimeSlot[]> => {
  try {
    const response = await axios.get(`${API_URL}/calendar/available-slots`, {
      params: { date },
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error: any) {
    console.error('Error fetching available time slots:', error.response?.data || error.message);
    // Return empty array instead of throwing to handle gracefully in UI
    return [];
  }
};

export const scheduleAppointment = async (details: AppointmentDetails): Promise<{ success: boolean; appointmentId?: string }> => {
  try {
    const response = await axios.post(`${API_URL}/calendar/schedule`, details, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error: any) {
    console.error('Error scheduling appointment:', error.response?.data || error.message);
    throw new Error(error.response?.data?.error || 'Failed to schedule appointment');
  }
};