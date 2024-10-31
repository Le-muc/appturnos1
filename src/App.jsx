import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
};

export default App;





