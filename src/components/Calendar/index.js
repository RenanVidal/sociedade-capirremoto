import './Calendar.css';

import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const [calendarData, setCalendarData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.steinhq.com/v1/storages/6446f022d27cdd09f0f07bcb/agenda');
        const data = await response.json();
        setCalendarData(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % calendarData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [calendarData]);

  console.log(calendarData);
  
  return (
    <section className='calendar' id='agenda'>
      <h2>Agenda</h2>
      {calendarData.length > 0 && (
        <div key={calendarData[currentIndex].id}>
          <h3>{calendarData[currentIndex].titulo}</h3>
          <h4>{calendarData[currentIndex].descricao}</h4>
          <p><strong>{calendarData[currentIndex].dia} {calendarData[currentIndex].mes}</strong> {calendarData[currentIndex].horario}</p>
          <a href={calendarData[currentIndex].link}><i className="ri-twitch-fill"></i>/capirremoto</a>
        </div>
      )}
    </section>

  );
};

export default Calendar;