export type Category = 'all' | 'appetizers' | 'main-courses' | 'soups' | 'desserts';
export type SpicyLevel = 1 | 2 | 3;

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  spicyLevel?: SpicyLevel;
  allergens?: string[];
}

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Dishes' },
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'main-courses', label: 'Main Courses' },
  { id: 'soups', label: 'Soups' },
  { id: 'desserts', label: 'Desserts' },
];