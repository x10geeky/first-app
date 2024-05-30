import { Link, Outlet } from 'react-router-dom';
import { Navbar } from './navbar';

export function DashboardPage() {
  return (
    <div>
      <p>Dashboard</p>
      <Link to={'stats'}>Stats</Link>
      <Link to={'settings'}>Settings</Link>
      <Outlet />
    </div>
  );
}
