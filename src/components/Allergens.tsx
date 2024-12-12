import { AlertTriangle } from 'lucide-react';

interface AllergensProps {
  allergens: string[];
}

export default function Allergens({ allergens }: AllergensProps) {
  if (!allergens?.length) return null;
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center text-yellow-500">
        <AlertTriangle className="h-4 w-4" />
      </div>
      <div className="flex flex-wrap gap-1">
        {allergens.map((allergen) => (
          <span
            key={allergen}
            className="px-2 py-0.5 bg-yellow-50 text-yellow-700 rounded-full text-xs font-medium"
          >
            {allergen}
          </span>
        ))}
      </div>
    </div>
  );
}