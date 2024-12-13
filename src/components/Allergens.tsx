import { Allergen } from '../types/menu';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

interface AllergensProps {
  allergens: Allergen[];
}

export function Allergens({ allergens }: AllergensProps) {
  const { language } = useLanguage();
  const allergenTranslations = translations[language].allergens;

  return (
    <div className="flex gap-1">
      {allergens.map((allergen) => (
        <span
          key={allergen}
          className="text-xs bg-red-50 text-red-700 px-2 py-0.5 rounded-full"
        >
          {allergenTranslations[allergen]}
        </span>
      ))}
    </div>
  );
}