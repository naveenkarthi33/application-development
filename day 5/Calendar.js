import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import { parseISO } from 'date-fns';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = ({ tasks }) => {
  const events = tasks.map(task => ({
    title: task.name,
    start: parseISO(task.dueDate),
    end: parseISO(task.dueDate),
  }));

  return (
    <div className="calendar-container">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Calendar;
