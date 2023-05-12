import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Cards from './components/Cards';
import React, {Fragment} from 'react';

function App() {

  const Team = [
    {
      nome: 'Luiz Eduardo',
      nick:'"Duds"',
      sobrenome: 'Vilar',
      descricao: 'Cofundador do Canal, Narrador e muitas vezes jogar. Duds é um dos narradores do canal conduzindo mesas desde D&D até Lobisomem o Apocalipse, se destacando principalmente por sua narrativa nos cenários do mundo das trevas!',
      rede:'@dudscapirremoto'
    }
  ];

  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <About />
        <Cards team/>
      </main>
    </Fragment>
  );
}

export default App;
