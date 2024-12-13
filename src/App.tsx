import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import { getBrowserLanguage } from './i18n/config';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Navigate to={`/${getBrowserLanguage()}`} replace />} />
          <Route path="/:lang/*" element={<Layout />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;