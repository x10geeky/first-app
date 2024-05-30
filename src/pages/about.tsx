import { Link } from 'react-router-dom';
import { Navbar } from './navbar';

export function AboutPage() {
  return (
    <div>
      <p>About</p>
      <Link to="/" state={'From About Page'}>
        Back
      </Link>
    </div>
  );
}
