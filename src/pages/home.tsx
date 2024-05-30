import { useLocation } from 'react-router-dom';
import { Navbar } from './navbar';

export function HomePage() {
  const location = useLocation();
  return (
    <div>
      <p>Home</p>
      <p>{location.state}</p>
    </div>
  );
}
