import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Cards from './components/Cards';
import React, {Fragment} from 'react';

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <About />
        <Cards />
      </main>
    </Fragment>
  );
}

export default App;
