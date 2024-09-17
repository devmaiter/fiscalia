import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Registro-styles.css'
import "../../App.css";
import { useHistory } from 'react-router-dom';

export default function RegFechaRevista() {
  const [fechaRevista, setFechaRevista] = useState('');  // State for the date
  const [vigilante_id, setVigilanteId] = useState('');  // State for vigilante ID
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());  // State for current time
  const routeHistory = useHistory();

  useEffect(() => {
    axios.get('http://localhost:3001/userId')
      .then(function (response) {
        setVigilanteId(response.data.userId);
      })
      .catch(function (error) {
        console.log(error);
      });

    // Update time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to clear the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleFechaChange = (e) => {
    setFechaRevista(e.target.value);
  };

  const handleBack = () => {
    routeHistory.goBack();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (optional, consider adding validation logic here)
    if (!fechaRevista) {
      alert('Please select a date for the vehicle inspection.');
      return;
    }

    axios.post('http://localhost:3001/regFechaRevista', {
      fechaRevista,
    })
      .then(function (response) {
        if (response.status === 200) {
          alert('Fecha de revista registrada con éxito');
          routeHistory.push('/home'); // Redirect after success
        } else {
          console.log(response.data);
        }
      })
      .catch(function (error) {
        alert('Error al registrar la fecha de revista: ' + error.message);
      });
  };

  return (
    <div className='App'>
      <div className='login'>
        <form className='login__form' onSubmit={handleSubmit}>
          <h1>Registro de Fecha de Revista</h1>
          <div className="login__box">
            <i className="ri-calendar-line login__icon"></i>
            <div className="login__box-input">
              <input
                className='login__input'
                type="date"  // Use the 'date' input type for date selection
                id="fechaRevista"
                value={fechaRevista}
                onChange={handleFechaChange}
              />
              <label htmlFor="fechaRevista" className="login__label">Fecha de Revista</label>
            </div>
          </div>
          {/* Added label for current time */}
          <div className="login__box">
            <i className="ri-time-line login__icon"></i>  {/* Optional: Add a clock icon */}
            <div className="login__box-input">
              <label htmlFor="currentTime">{currentTime}</label>  {/* Display current time */}
            </div>
          </div>
          <button className='login__button' type="submit">Registrar</button>
        </form>
      </div>
      <button className='buttonReverse' onClick={handleBack}>
        <img src='https://cdn-icons-png.flaticon.com/512/13696/13696827.png' />
      </button>
    </div>
  );
}