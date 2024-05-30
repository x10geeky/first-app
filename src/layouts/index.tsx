import { Outlet } from 'react-router-dom';
import { Navbar } from '../pages/navbar';

export function Layout() {
  return (
    <div>
      <Navbar />
      <header className="App-header">
        <Outlet />
      </header>
    </div>
  );
}
