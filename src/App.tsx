import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import { AppRouters } from './router';
import { Title } from './element/title';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouters />
        {/* <Title as="h6">ทดสอบ</Title> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
