import './Calendar.css';

import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const [calendarData, setCalendarData] = useState([]);

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

  console.log(calendarData);
  
  return (
    <section className='calendar'>
      <h2>Agenda</h2>
      {calendarData.map((item) => (
        <div key={item.id}>
          <h3>{item.titulo}</h3>
          <h4>{item.descricao}</h4>
          <p><strong>{item.dia} {item.mes}</strong> {item.horario}</p>
          <a href={item.link}><i className="ri-twitch-fill"></i>/capirremoto</a>
        </div>
      ))}
    </section>
  );
};

export default Calendar;


// const Calendar = () => {
//     return (
//         <section className='agenda' id="agenda">
//             <h2>Agenda</h2>
//             <ul alt="Lista de eventos" data-lista>
//             </ul>
//         </section>
//     );
// }

// export default Calendar;