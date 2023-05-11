import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <About />
        <Cards />
      </main>
    </div>
  );
}

export default App;
