import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

interface AppointmentSchedulerProps {
  name: string;
  email: string;
  onScheduled: (date: Date) => void;
}

const AppointmentScheduler: React.FC<AppointmentSchedulerProps> = ({
  name,
  email,
  onScheduled
}) => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isScheduling, setIsScheduling] = useState(false);

  useEffect(() => {
    if (date) {
      fetchTimeSlots(format(date, 'yyyy-MM-dd'));
    }
  }, [date]);

  const fetchTimeSlots = async (dateStr: string) => {
    setIsLoadingSlots(true);
    try {
      // Using URLSearchParams to properly encode the date parameter
      const params = new URLSearchParams({ date: dateStr });
      const response = await fetch(`http://localhost:3001/api/calendar/available-slots?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch time slots: ${response.statusText}`);
      }
      
      const slots = await response.json();
      setTimeSlots(slots);
    } catch (error) {
      console.error("Error fetching time slots:", error);
      toast({
        title: "Error",
        description: "Failed to load available time slots. Please try selecting a different date.",
        variant: "destructive"
      });
      setTimeSlots([]);
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const handleScheduleAppointment = async () => {
    if (!selectedSlot || !date) {
      toast({
        title: "Error",
        description: "Please select both a date and time slot.",
        variant: "destructive"
      });
      return;
    }

    setIsScheduling(true);
    try {
      const response = await fetch('http://localhost:3001/api/calendar/schedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          startTime: selectedSlot.startTime,
          endTime: selectedSlot.endTime,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone // Send the user's timezone
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to schedule appointment');
      }

      const result = await response.json();
      if (result.success) {
        const appointmentDate = new Date(selectedSlot.startTime);
        onScheduled(appointmentDate);
      } else {
        throw new Error("Failed to schedule appointment");
      }
    } catch (error: any) {
      console.error("Error scheduling appointment:", error);
      toast({
        title: "Scheduling Error",
        description: error.message || "Failed to schedule appointment. Please try again or select a different time.",
        variant: "destructive"
      });
      // Refresh time slots after error
      await fetchTimeSlots(format(date, 'yyyy-MM-dd'));
    } finally {
      setIsScheduling(false);
    }
  };

  const formatTimeSlot = (slot: TimeSlot) => {
    const start = new Date(slot.startTime);
    const end = new Date(slot.endTime);
    return `${format(start, 'h:mm a')} - ${format(end, 'h:mm a')}`;
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Select a Date</h3>
        <div className="grid gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => {
                  const now = new Date();
                  now.setHours(0, 0, 0, 0);
                  const day = date.getDay();
                  return date < now || day === 0 || day === 6;
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium">Select a Time</h3>
        {isLoadingSlots ? (
          <div className="flex justify-center py-6">
            <Loader2 className="h-8 w-8 animate-spin text-[#FFD700]" />
          </div>
        ) : timeSlots.length === 0 ? (
          <p className="text-center py-6 text-gray-500">
            No available time slots for the selected date.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((slot, index) => (
              <Button
                key={index}
                variant={selectedSlot === slot ? "default" : "outline"}
                className={cn(
                  !slot.available && "opacity-50 cursor-not-allowed",
                  selectedSlot === slot && "bg-[#FFD700] text-black hover:bg-[#e6c300]"
                )}
                onClick={() => slot.available && setSelectedSlot(slot)}
                disabled={!slot.available}
              >
                <Clock className="mr-2 h-4 w-4" />
                {formatTimeSlot(slot)}
              </Button>
            ))}
          </div>
        )}
      </div>

      <Button
        className="w-full bg-[#FFD700] hover:bg-[#e6c300] text-black"
        disabled={!selectedSlot || isScheduling}
        onClick={handleScheduleAppointment}
      >
        {isScheduling ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Scheduling...
          </>
        ) : (
          <>
            <CheckCircle className="mr-2 h-4 w-4" /> Confirm Appointment
          </>
        )}
      </Button>
    </div>
  );
};

export default AppointmentScheduler;