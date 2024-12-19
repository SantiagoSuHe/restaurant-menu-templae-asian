import { MenuItem as MenuItemType } from '../types/menu';
import { Allergens } from './Allergens';
import SpicyLevel from './SpicyLevel';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuItemProps {
  item: MenuItemType;
  isImageRight: boolean;
}

export default function MenuItem({ item, isImageRight }: MenuItemProps) {
  const { language } = useLanguage();
  const { name, description } = item.translations[language];

  const Content = () => (
    <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <span className="text-red-600 font-semibold ml-4 whitespace-nowrap">
            ${item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3 mt-3">
        {item.spicyLevel && <SpicyLevel level={item.spicyLevel} />}
        {item.allergens && <Allergens allergens={item.allergens} />}
      </div>
    </div>
  );

  const ImageSection = () => (
    <div className="w-full md:w-2/5">
      <img
        src={item.image}
        alt={name}
        className="w-full h-40 md:h-48 object-cover"
      />
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-[1.01] flex flex-col md:flex-row h-full">
      <div className="block md:hidden">
        <ImageSection />
      </div>
      <div className="hidden md:flex w-full">
        {!isImageRight && <ImageSection />}
        <Content />
        {isImageRight && <ImageSection />}
      </div>
      <div className="block md:hidden">
        <Content />
      </div>
    </div>
  );
}