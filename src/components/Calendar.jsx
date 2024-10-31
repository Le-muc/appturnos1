// src/components/Calendar.jsx
import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = ({ events, onDeleteEvent, onEditEvent, className }) => {
  return (
    <div className={className}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
        selectable
        onSelectEvent={onEditEvent}
        onSelectSlot={onDeleteEvent}
      />
    </div>
  );
};

export default Calendar;



















