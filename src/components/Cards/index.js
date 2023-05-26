import { Fragment } from 'react';
import './Cards.css';


const Cards = () => {
    return (
        <Fragment>
                    <h2 className='title' >Equipe</h2>
                    <section className='cards'>
                        <div className='card'>
                            <img src="/Image/duds.jpg" alt="Foto do Duds" />
                            <div>
                                <h3>Luiz Eduardo <strong>"Dud's"</strong> Vilar</h3>
                                <p>Cofundador do Canal, Narrador e muitas vezes jogar. Duds é um dos narradores do canal conduzindo mesas desde D&D até Lobisomem o Apocalipse, se destacando principalmente por sua narrativa nos cenários do mundo das trevas!</p>
                                <a href='https://www.instagram.com/dudscapirremoto/'><i className='ri-instagram-line'></i>@dudscapirremoto</a>
                            </div>
                        </div>
                        <div className='card'>
                            <img src='/Image/lo.jpg' alt='Foto da Lo' />
                            <div>
                                <h3>Loanda <strong>"Lóka"</strong> Andrade</h3>
                                <p>Cofundadora, designer, narradora e jogadora. Lóka além de ser uma narradora incrível e uma jogadora dedicada. Ela é responsável por todo o design, toda identidade visual única do canal!</p>
                                <a href='https://www.instagram.com/lokaofstone/'><i className='ri-instagram-line'></i>@lokaofstone</a>
                            </div>
                        </div>
                        <div className='card'>
                            <img src='/Image/jean.jpg' alt='Foto do Jean' />
                            <div>
                                <h3>Jean <strong>"O Xerife"</strong> Mendes</h3>
                                <p>Jogador e Narrador do Canal, Jean se especializa em narrativas de Vampiro a Máscara, Vampiro Idades das Trevas e Pathfinder 2ª Edição. Suas Mesas buscam o foco no Roleplay, Narrativa, plot twists de explodir cabeças e muito horror pessoal.</p>
                                <a href='https://wwww.instagram.com/jeanmendes6375/'><i className='ri-instagram-line'></i>@jeanmendes6375</a>
                            </div>
                        </div>
                        <div className='card'>
                            <img src='/Image/gohan.jpg' alt='Foto do Gohan' />
                            <div>
                                <h3>Rodrigo <strong>"Gohan"</strong> Gonçalves</h3>
                                <p>Jogador e Narrador do Canal, Gohan nosso carismático narrador e Bardo/Galliard de toda hora, é o nosso narrador das arte mágicas e filosóficas especializado na narrativa de Mago a Ascensão. Suas mesas são focadas em Roleplay, Narrativa compartilhada e musicalidade (Com grande foco na MPB).</p>
                                <a href='https://www.instagram.com/arkamadeus/'><i className='ri-instagram-line'></i>@arkamadeus</a>
                            </div>
                        </div>
                        <div className='card'>
                            <img src='/Image/makie2.jpg' alt='Foto da Cami' />
                            <div>
                                <h3>Camila <strong>"Makie"</strong> Amazonas</h3>
                                <p>Editora da Capizine e Moderadora das lives do Canal, Makie é Jogadora de D&D, Vampiro a Máscara, Mago, (e futuramente outros sistemas), Narradora de D&D aposentada e apreciadora de sistemas diferentões.</p>
                                <a href='https://www.instagram.com/camilamakie/'><i className='ri-instagram-line'></i>@camilamakie</a>
                            </div>
                        </div>
                    </section>
        </Fragment>
    );
}

export default Cards;