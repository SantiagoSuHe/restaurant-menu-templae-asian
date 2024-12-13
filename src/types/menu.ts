export type Category = 'appetizers' | 'main-courses' | 'soups' | 'desserts';
export type Allergen = 'shellfish' | 'gluten' | 'dairy' | 'eggs' | 'peanuts';

interface Translation {
  name: string;
  description: string;
}

export interface MenuItem {
  id: string;
  translations: {
    en: Translation;
    es: Translation;
  };
  price: number;
  category: Category;
  image: string;
  spicyLevel?: 1 | 2 | 3;
  allergens?: Allergen[];
}

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Dishes' },
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'main-courses', label: 'Main Courses' },
  { id: 'soups', label: 'Soups' },
  { id: 'desserts', label: 'Desserts' },
];