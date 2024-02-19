import './App.css';
import Weather from './Weather';
//import Search from './Search';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Weather defaultCity="Addis Ababa"/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
