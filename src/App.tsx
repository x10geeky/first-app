import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { AppRouters } from './router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouters />
      </BrowserRouter>
    </div>
  );
}

export default App;
