import React, { useState, useMemo } from 'react';
import { Soup } from './types/Soup';
import { Soup as SoupIcon } from 'lucide-react';
import IngredientSelector from './components/IngredientSelector';
import SoupSuggestions from './components/SoupSuggestions';

function App() {
  const [soups, setSoups] = useState<Soup[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const handleIngredientToggle = (ingredient: string) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    );
  };

  const soupSuggestions = useMemo(() => {
    if (selectedIngredients.length === 0) return [];

    return soups
      .map(soup => ({
        soup,
        missingIngredients: soup.ingredients
          .filter(ing => !selectedIngredients.includes(ing.name))
          .map(ing => ing.name),
      }))
      .sort((a, b) => a.missingIngredients.length - b.missingIngredients.length)
      .slice(0, 3);
  }, [soups, selectedIngredients]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold flex items-center">
            <SoupIcon className="mr-2" />
            50 Soups of the World
          </h1>
          <p className="mt-2 text-orange-100">
            Discover what delicious soups you can make with ingredients you have
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <IngredientSelector
          selectedIngredients={selectedIngredients}
          onIngredientToggle={handleIngredientToggle}
        />
        
        <SoupSuggestions suggestions={soupSuggestions} />
      </main>
    </div>
  );
}

export default App;