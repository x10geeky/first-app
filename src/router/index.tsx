import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { AboutPage } from '../pages/about';
import { BlogDetailPage, BlogPage } from '../pages/blog';
import { ContactPage } from '../pages/contact';
import { DashboardPage } from '../pages/dashboard';
import { Layout } from '../layouts';
import { NotFoundPage } from '../pages/notfound';

export function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="stats" element={<div>Stats</div>} />
          <Route path="settings" element={<div>Settings</div>} />
        </Route>

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donotclick" element={<Navigate to="/" state={'From Do Not Click'} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
