import { Category } from '../types/menu';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

interface CategoryFilterProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const { language } = useLanguage();
  const categories = translations[language].categories;

  return (
    <div className="flex gap-2 mb-8 overflow-x-auto pb-2 justify-center">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
          ${
            selectedCategory === 'all'
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
      >
        {language === 'en' ? 'All Dishes' : 'Todos los Platos'}
      </button>
      {(Object.keys(categories) as Category[]).map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
            ${
              selectedCategory === category
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {categories[category]}
        </button>
      ))}
    </div>
  );
}