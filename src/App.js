import './App.css';
import Weather from './Weather';
import Search from './Search';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header >
        <Search />
      </header>
      <main>
        <Weather />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
