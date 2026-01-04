'use client';

import * as React from 'react';
import { format, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from 'date-fns';
import { cn } from '@/lib/utils';

export interface CalendarProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
  availableDates?: Date[];
}

// Generate random available dates for the current month (week-wise)
function generateRandomAvailableDates(year: number, month: number): Date[] {
  const availableDates: Date[] = [];
  const today = new Date();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  // Get all weeks in the month
  let currentWeekStart = startOfWeek(firstDay);
  const lastWeekEnd = endOfWeek(lastDay);
  
  while (currentWeekStart <= lastWeekEnd) {
    const weekEnd = endOfWeek(currentWeekStart);
    const weekDays = eachDayOfInterval({
      start: currentWeekStart > firstDay ? currentWeekStart : firstDay,
      end: weekEnd < lastDay ? weekEnd : lastDay,
    });
    
    // Randomly select 2-4 days per week as available
    const daysToSelect = Math.floor(Math.random() * 3) + 2;
    const shuffled = [...weekDays].sort(() => Math.random() - 0.5);
    const selectedDays = shuffled.slice(0, daysToSelect);
    
    selectedDays.forEach((day) => {
      // Only add dates that are today or in the future
      if (day >= today || isSameDay(day, today)) {
        availableDates.push(day);
      }
    });
    
    // Move to next week
    currentWeekStart = new Date(weekEnd);
    currentWeekStart.setDate(currentWeekStart.getDate() + 1);
  }
  
  return availableDates;
}

export function Calendar({ selected, onSelect, className, availableDates }: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(
    selected || new Date()
  );
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    selected
  );
  
  // Generate random available dates if not provided
  const [monthAvailableDates, setMonthAvailableDates] = React.useState<Date[]>([]);
  
  React.useEffect(() => {
    if (!availableDates) {
      const dates = generateRandomAvailableDates(
        currentDate.getFullYear(),
        currentDate.getMonth()
      );
      setMonthAvailableDates(dates);
    } else {
      setMonthAvailableDates(availableDates);
    }
  }, [currentDate, availableDates]);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onSelect?.(date);
  };


  const goToNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
    // Regenerate available dates for new month
    if (!availableDates) {
      const dates = generateRandomAvailableDates(
        newDate.getFullYear(),
        newDate.getMonth()
      );
      setMonthAvailableDates(dates);
    }
  };
  
  const goToPreviousMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
    // Regenerate available dates for new month
    if (!availableDates) {
      const dates = generateRandomAvailableDates(
        newDate.getFullYear(),
        newDate.getMonth()
      );
      setMonthAvailableDates(dates);
    }
  };
  
  const isDateAvailable = (date: Date): boolean => {
    return monthAvailableDates.some((availableDate) =>
      isSameDay(availableDate, date)
    );
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const monthName = format(currentDate, 'MMMM yyyy');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div
      className={cn(
        'rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-4',
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Previous month"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {monthName}
        </h3>
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Next month"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            index + 1
          );
          const isSelected =
            selectedDate &&
            date.toDateString() === selectedDate.toDateString();
          const isToday = date.toDateString() === new Date().toDateString();
          const isAvailable = isDateAvailable(date);

          return (
            <button
              key={index}
              onClick={() => handleDateClick(date)}
              className={cn(
                'aspect-square rounded-lg text-sm font-medium transition-colors relative',
                {
                  'bg-black text-white dark:bg-white dark:text-black':
                    isSelected,
                  'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300':
                    isToday && !isSelected,
                  'hover:bg-gray-100 dark:hover:bg-gray-800':
                    !isSelected && !isToday,
                  'text-gray-900 dark:text-gray-100': !isSelected && !isToday,
                }
              )}
            >
              {index + 1}
              {isAvailable && !isSelected && (
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

