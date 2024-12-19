import { useParams, Navigate } from 'react-router-dom';
import { LANGUAGES } from '../i18n/config';
import Header from './Header';
import MenuGrid from './MenuGrid';

export default function Layout() {
  const { lang } = useParams<{ lang: string }>();

  if (!lang || !(lang in LANGUAGES)) {
    return <Navigate to="/en" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MenuGrid />
    </div>
  );
} 