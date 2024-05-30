import { Outlet, useParams } from 'react-router-dom';
import { Navbar } from './navbar';

export function BlogPage() {
  return (
    <div>
      <p>Blog</p>
      <Outlet />
    </div>
  );
}

export function BlogTextPage() {
  const { id } = useParams();
  return <div>Text : {id}</div>;
}

export function BlogDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <header className="App-header">
        <p>Blog ID: {id}</p>
      </header>
    </div>
  );
}
