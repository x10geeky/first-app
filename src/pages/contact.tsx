import { useNavigate } from 'react-router-dom';
import { Navbar } from './navbar';

export function ContactPage() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Contact</p>
      <button onClick={() => navigate('/', { state: 'From Contact Page' })}>Navigate to Home</button>
    </div>
  );
}
