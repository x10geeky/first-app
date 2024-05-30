import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>
        - Home -
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>
        - About -
      </NavLink>
      <NavLink to="/blog" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>
        - Blog -
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>
        - Contact -
      </NavLink>
      <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>
        - Dashboard -
      </NavLink>
      <NavLink to="/donotclick" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>
        - Do Not Click -
      </NavLink>
    </nav>
  );
}
