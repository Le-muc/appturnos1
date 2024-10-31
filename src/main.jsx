import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Importa los estilos del calendario
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa ReactDOM desde react-dom/client
import App from './App'; // Importa tu componente principal App

// Crea el root y renderiza la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





