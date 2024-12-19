import { useState } from 'react';
import MenuItem from './MenuItem';
import CategoryFilter from './CategoryFilter';
import { menuItems } from '../data/menuItems';
import { Category } from '../types/menu';

export default function MenuGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <div className="flex flex-col gap-6">
        {filteredItems.map((item, index) => (
          <MenuItem 
            key={item.id} 
            item={item} 
            isImageRight={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}