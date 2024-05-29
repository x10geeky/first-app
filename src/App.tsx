import './App.css';
import { Title } from './element/title';
import { Toolbar } from './event/propagation';
import { Gallery } from './state/gallery';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title as="h1">Good Day</Title>
        <Toolbar/>
        <Gallery/>
      </header>
    </div>
  );
}

export default App;
