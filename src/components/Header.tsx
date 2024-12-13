import { Utensils } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LANGUAGES } from '../i18n/config';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang as 'en' | 'es');
    navigate(`/${newLang}`);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          <div className="absolute right-0">
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="px-3 py-1 border rounded-md text-sm"
            >
              {Object.entries(LANGUAGES).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center">
            <Utensils className="h-7 w-7 text-red-600 mr-3" />
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              {language === 'en' ? 'Sakura Asian Kitchen' : 'Cocina Asiática Sakura'}
            </h1>
          </div>
        </div>
        <p className="mt-2 text-center text-gray-600 text-sm">
          {language === 'en' ? 'Experience authentic Asian flavors' : 'Experimenta auténticos sabores asiáticos'}
        </p>
      </div>
    </header>
  );
}