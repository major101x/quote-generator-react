import './App.scss';
import Quotes from './components/Quotes.jsx';

function App() {
  return (
    <div className="App">
      <Quotes />
      <footer>
        by{' '}
        <a href="https://github.com/major101x" rel="noreferrer" target="_blank">
          major101x
        </a>
      </footer>
    </div>
  );
}

export default App;
