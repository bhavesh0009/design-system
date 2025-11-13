import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add previous month's days
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const days = getDaysInMonth(currentDate);

  const isToday = (day) => {
    if (!day) return false;
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-h4 text-neutral-black">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <div className="flex items-center gap-2">
          <button onClick={prevMonth} className="p-1 hover:bg-neutral-gray-100 rounded transition-colors">
            <ChevronLeft className="w-4 h-4 text-neutral-gray-700" />
          </button>
          <button onClick={nextMonth} className="p-1 hover:bg-neutral-gray-100 rounded transition-colors">
            <ChevronRight className="w-4 h-4 text-neutral-gray-700" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-sm text-neutral-gray-700 font-medium py-2"
          >
            {day}
          </div>
        ))}

        {days.map((day, index) => (
          <button
            key={index}
            disabled={!day}
            className={`
              aspect-square flex items-center justify-center text-sm rounded-md transition-colors
              ${!day ? 'invisible' : ''}
              ${isToday(day) ? 'bg-lime text-neutral-black font-semibold' : 'text-neutral-black hover:bg-neutral-gray-100'}
            `}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
