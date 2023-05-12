import './Cards.css';

const Cards = (props) => {
    return (
        <section className='cards' id="equipe">
            <h2 >Equipe</h2>
            <div className='card'>
                <img src='' alt='' />
                <div>
                    <h3>{props.nome} <strong>{props.nick}</strong> {props.sobrenome}</h3>
                    <p>Cofundador do Canal, Narrador e muitas vezes jogar. Duds é um dos narradores do canal conduzindo mesas desde D&D até Lobisomem o Apocalipse, se destacando principalmente por sua narrativa nos cenários do mundo das trevas!</p>
                    <a href><i className='ri-instagram-line'></i>@dudscapirremoto</a>
                </div>
            </div>
        </section>
    );
}

export default Cards;