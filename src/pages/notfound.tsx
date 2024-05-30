import { useNavigate } from 'react-router-dom';

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <p>404 Not Found</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
}
