// src/components/AppointmentForm.jsx
import React, { useState, useEffect } from 'react';
import Button from './Button';

const AppointmentForm = ({ onSubmit, initialData, onDelete, buttonLabel = "Guardar Cambios" }) => {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [date, setDate] = useState(initialData ? initialData.date : '');
  const [time, setTime] = useState(initialData ? initialData.time : '');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDate(initialData.date);
      setTime(initialData.time);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && time) {
      onSubmit({ name, date, time });
      setName('');
      setDate('');
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre del Paciente</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
          aria-label="Nombre del Paciente"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">Fecha</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control"
          required
          aria-label="Fecha del turno"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="time" className="form-label">Hora</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="form-control"
          required
          aria-label="Hora del turno"
        />
      </div>
      <Button type="submit" aria-label={buttonLabel}>{buttonLabel}</Button>
      {onDelete && (
        <Button onClick={onDelete} className="btn btn-danger" aria-label="Eliminar Turno">Eliminar Turno</Button>
      )}
    </form>
  );
};

export default AppointmentForm;








