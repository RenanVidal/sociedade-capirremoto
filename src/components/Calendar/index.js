import './Calendar.css';

const Calendar = () => {
    return (
        <section className='agenda' id="agenda">
            <h2>Agenda</h2>
            <ul alt="Lista de eventos" data-lista>
            </ul>
        </section>
    );
}

export default Calendar;