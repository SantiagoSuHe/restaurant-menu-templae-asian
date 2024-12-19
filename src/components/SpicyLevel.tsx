import { Flame } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

interface SpicyLevelProps {
  level: 1 | 2 | 3;
}

export default function SpicyLevel({ level }: SpicyLevelProps) {
  const { language } = useLanguage();
  
  const spiceLevelText = {
    1: translations[language].spicyLevels.mild,
    2: translations[language].spicyLevels.medium,
    3: translations[language].spicyLevels.hot,
  } as const;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(level)].map((_, index) => (
          <Flame key={index} className="h-4 w-4 text-orange-500" />
        ))}
      </div>
      <span className="text-xs font-medium text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full">
        {spiceLevelText[level]}
      </span>
    </div>
  );
}