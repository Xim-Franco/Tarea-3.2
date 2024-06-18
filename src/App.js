import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ciudad, setCiudad] = useState('');
  const [datosClima, setDatosClima] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'b88b4d7e5a9048e2ec2de8f149ba8e40';  
  const obtenerDatosClima = async () => {
    try {
      const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
      );
      if (!respuesta.ok) {
        throw new Error('No se pudo obtener los datos');
      }
      const datos = await respuesta.json();
      setDatosClima(datos);
      setError('');
    } catch (error) {
      setError('Ciudad no encontrada');
      setDatosClima(null);
    }
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    obtenerDatosClima();
  };

  return (
    <div className="App">
      <h1>Consulta del Clima</h1>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          placeholder="Ingrese una ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
          className="input-ciudad"
        />
        <button type="submit" className="boton-buscar">Buscar</button>
      </form>
      {error && <p className="mensaje-error">{error}</p>}
      {datosClima && (
        <div className="datos-clima">
          <h2>{datosClima.name}</h2>
          <p>Temperatura: {datosClima.main.temp} °C</p>
          <p>Descripción: {datosClima.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
