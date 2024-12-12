import { Utensils } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <Utensils className="h-7 w-7 text-red-600 mr-3" />
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Sakura Asian Kitchen
          </h1>
        </div>
        <p className="mt-2 text-center text-gray-600 text-sm">
          Experience authentic Asian flavors
        </p>
      </div>
    </header>
  );
}