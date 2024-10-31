// src/pages/CalendarPage.jsx
import React, { useState, useEffect } from 'react';
import Calendar from '../components/Calendar';
import AppointmentForm from '../components/AppointmentForm';

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents).map(event => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));
      setEvents(parsedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleFormSubmit = (appointment) => {
    const newEvent = {
      id: Date.now(),
      title: `Turno con ${appointment.name}`,
      start: new Date(`${appointment.date}T${appointment.time}`),
      end: new Date(new Date(`${appointment.date}T${appointment.time}`).getTime() + 30 * 60 * 1000),
    };
    setEvents(prevEvents => [...prevEvents, newEvent]);
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setShowEditForm(true);
  };

  const handleEditSubmit = (updatedAppointment) => {
    const updatedEvents = events.map(event => 
      event.id === editingEvent.id
        ? {
            ...event,
            title: `Turno con ${updatedAppointment.name}`,
            start: new Date(`${updatedAppointment.date}T${updatedAppointment.time}`),
            end: new Date(new Date(`${updatedAppointment.date}T${updatedAppointment.time}`).getTime() + 30 * 60 * 1000),
          }
        : event
    );

    setEvents(updatedEvents);
    setShowEditForm(false);
    setEditingEvent(null);
  };

  const handleDeleteEvent = (eventToDelete) => {
    const updatedEvents = events.filter(event => event.id !== eventToDelete.id);
    setEvents(updatedEvents);
  };

  return (
    <div className="container">
      <h2>Agenda de Turnos</h2>
      <AppointmentForm onSubmit={handleFormSubmit} buttonLabel="Crear Turno" />
      <Calendar 
        events={events} 
        onDeleteEvent={handleDeleteEvent} 
        onEditEvent={handleEditEvent}
        className="my-custom-calendar-class"
      />
      {showEditForm && (
        <AppointmentForm
          onSubmit={handleEditSubmit}
          onDelete={() => {
            handleDeleteEvent(editingEvent);
            setShowEditForm(false);
            setEditingEvent(null);
          }}
          initialData={{
            name: editingEvent.title.split('con ')[1], 
            date: editingEvent.start.toISOString().split('T')[0],
            time: editingEvent.start.toTimeString().split(' ')[0].slice(0, 5),
          }}
          buttonLabel="Guardar Cambios"
        />
      )}
    </div>
  );
};

export default CalendarPage;























