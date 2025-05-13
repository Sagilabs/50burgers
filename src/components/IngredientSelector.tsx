import React from 'react';
import { Check } from 'lucide-react';
import { IngredientCategory } from '../types/Soup';

interface CommonIngredient {
  name: string;
  category: IngredientCategory;
}

const commonIngredients: CommonIngredient[] = [
  { name: 'Onion', category: 'vegetable' },
  { name: 'Garlic', category: 'vegetable' },
  { name: 'Carrot', category: 'vegetable' },
  { name: 'Celery', category: 'vegetable' },
  { name: 'Potato', category: 'vegetable' },
  { name: 'Tomato', category: 'vegetable' },
  { name: 'Chicken', category: 'meat' },
  { name: 'Beef', category: 'meat' },
  { name: 'Salt', category: 'spice' },
  { name: 'Pepper', category: 'spice' },
  { name: 'Butter', category: 'dairy' },
  { name: 'Milk', category: 'dairy' },
  { name: 'Rice', category: 'grain' },
  { name: 'Pasta', category: 'grain' },
  { name: 'Stock', category: 'other' },
];

interface Props {
  selectedIngredients: string[];
  onIngredientToggle: (ingredient: string) => void;
}

const IngredientSelector: React.FC<Props> = ({ selectedIngredients, onIngredientToggle }) => {
  const categories = Array.from(new Set(commonIngredients.map(i => i.category)));

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Select Your Available Ingredients</h2>
      
      {categories.map(category => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-medium capitalize mb-3">{category}s</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {commonIngredients
              .filter(i => i.category === category)
              .map(ingredient => (
                <button
                  key={ingredient.name}
                  onClick={() => onIngredientToggle(ingredient.name)}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                    selectedIngredients.includes(ingredient.name)
                      ? 'bg-orange-100 border-orange-500 text-orange-800'
                      : 'border-gray-200 hover:border-orange-200'
                  }`}
                >
                  <span>{ingredient.name}</span>
                  {selectedIngredients.includes(ingredient.name) && (
                    <Check className="w-4 h-4 text-orange-500" />
                  )}
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IngredientSelector;