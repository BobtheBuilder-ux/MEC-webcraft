import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppointmentSchedulerProps {
  name: string;
  email: string;
  onScheduled: (date: Date) => void;
}

const AppointmentScheduler: React.FC<AppointmentSchedulerProps> = ({ name, email, onScheduled }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select both a date and time.');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      const [hours, period] = selectedTime.split(' ');
      const [hour] = hours.split(':');
      let militaryHour = parseInt(hour);
      
      if (period === 'PM' && militaryHour !== 12) {
        militaryHour += 12;
      } else if (period === 'AM' && militaryHour === 12) {
        militaryHour = 0;
      }

      const appointmentDate = new Date(`${formattedDate}T${militaryHour.toString().padStart(2, '0')}:00:00`);
      
      // Show confirmation animation
      setIsConfirmed(true);
      
      // Wait for animation before calling onScheduled
      setTimeout(() => {
        onScheduled(appointmentDate);
      }, 1500);
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      alert('Failed to schedule appointment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isConfirmed) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center justify-center py-8 space-y-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle2 className="w-16 h-16 text-green-500" />
        </motion.div>
        <h3 className="text-xl font-medium text-center">Appointment Confirmed!</h3>
        <p className="text-center text-gray-600">
          A confirmation email has been sent to your inbox.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Select a Date</h3>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          disabled={(date) => date < new Date()}
        />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Select a Time</h3>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full border rounded p-2"
          disabled={isLoading}
        >
          <option value="">Select a time</option>
          <option value="09:00 AM">09:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="01:00 PM">01:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
        </select>
      </div>

      <Button 
        onClick={handleSubmit} 
        className="w-full bg-[#FFD700] hover:bg-[#e6c300] text-black"
        disabled={isLoading || !selectedDate || !selectedTime}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Scheduling...
          </>
        ) : (
          'Schedule Appointment'
        )}
      </Button>
    </div>
  );
};

export default AppointmentScheduler;