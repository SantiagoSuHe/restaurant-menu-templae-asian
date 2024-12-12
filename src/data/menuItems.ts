import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Dim Sum Platter',
    description: 'Assorted steamed dumplings filled with shrimp, pork, and vegetables, served with soy dipping sauce',
    price: 12.99,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=600',
    allergens: ['shellfish', 'gluten'],
  },
  {
    id: '2',
    name: 'Spicy Mapo Tofu',
    description: 'Silken tofu and ground pork in a spicy Sichuan pepper sauce, served with steamed rice',
    price: 16.99,
    category: 'main-courses',
    image: 'https://www.seriouseats.com/thmb/CaR7btHrJgEO3OKZD1Z_795VmII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2011__07__2021-02-12-Mapo-Tofu-MHOM-10-804db1211f1d47dbae505341d1e7b994.jpg',
    spicyLevel: 2,
  },
  {
    id: '3',
    name: 'Miso Ramen',
    description: 'Rich miso broth with fresh noodles, chashu pork, soft-boiled egg, and seasonal vegetables',
    price: 15.99,
    category: 'soups',
    image: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&q=80&w=600',
    allergens: ['gluten', 'eggs'],
  },
  {
    id: '4',
    name: 'Green Tea Mochi',
    description: 'Traditional Japanese rice cake filled with sweet green tea ice cream',
    price: 6.99,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1631206753348-db44968fd440?auto=format&fit=crop&q=80&w=600',
    allergens: ['dairy'],
  },
  {
    id: '5',
    name: 'Szechuan Dan Dan Noodles',
    description: 'Hand-pulled noodles with spicy minced pork, peanuts, and chili oil sauce',
    price: 14.99,
    category: 'main-courses',
    image: 'https://images.food52.com/APmm0mLrDdCu72hXnI-fM6EhoHQ=/2016x1344/filters:format(webp)/b06bbbdf-8503-4d78-8aab-2b435c8605a9--2013-0924_CP-sichuan-dan-dan-noodle-008.jpg',
    spicyLevel: 3,
    allergens: ['peanuts', 'gluten'],
  },
  {
    id: '6',
    name: 'Thai Red Curry',
    description: 'Aromatic coconut curry with bamboo shoots, bell peppers, and your choice of protein',
    price: 17.99,
    category: 'main-courses',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=600',
    spicyLevel: 1,
  },
];