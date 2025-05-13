import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { IngredientCategory } from '../types/Soup';

interface CommonIngredient {
  name: string;
  category: IngredientCategory;
}

const commonIngredients: CommonIngredient[] = [
  // Vegetables
  { name: 'Onion', category: 'vegetable' },
  { name: 'Garlic', category: 'vegetable' },
  { name: 'Carrot', category: 'vegetable' },
  { name: 'Celery', category: 'vegetable' },
  { name: 'Potato', category: 'vegetable' },
  { name: 'Tomato', category: 'vegetable' },
  { name: 'Bell Pepper', category: 'vegetable' },
  { name: 'Mushroom', category: 'vegetable' },
  { name: 'Spinach', category: 'vegetable' },
  { name: 'Cabbage', category: 'vegetable' },
  
  // Meats
  { name: 'Chicken', category: 'meat' },
  { name: 'Beef', category: 'meat' },
  { name: 'Pork', category: 'meat' },
  { name: 'Fish', category: 'meat' },
  { name: 'Shrimp', category: 'meat' },
  { name: 'Bacon', category: 'meat' },
  
  // Spices & Herbs
  { name: 'Salt', category: 'spice' },
  { name: 'Black Pepper', category: 'spice' },
  { name: 'Bay Leaf', category: 'spice' },
  { name: 'Thyme', category: 'spice' },
  { name: 'Rosemary', category: 'spice' },
  { name: 'Paprika', category: 'spice' },
  { name: 'Cumin', category: 'spice' },
  { name: 'Oregano', category: 'spice' },
  
  // Dairy
  { name: 'Butter', category: 'dairy' },
  { name: 'Milk', category: 'dairy' },
  { name: 'Heavy Cream', category: 'dairy' },
  { name: 'Sour Cream', category: 'dairy' },
  { name: 'Parmesan', category: 'dairy' },
  
  // Grains
  { name: 'Rice', category: 'grain' },
  { name: 'Pasta', category: 'grain' },
  { name: 'Barley', category: 'grain' },
  { name: 'Noodles', category: 'grain' },
  
  // Other
  { name: 'Chicken Stock', category: 'other' },
  { name: 'Beef Stock', category: 'other' },
  { name: 'Vegetable Stock', category: 'other' },
  { name: 'Tomato Paste', category: 'other' },
  { name: 'White Wine', category: 'other' },
];

interface Props {
  selectedIngredients: string[];
  onIngredientToggle: (ingredient: string) => void;
}

const IngredientSelector: React.FC<Props> = ({ selectedIngredients, onIngredientToggle }) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(commonIngredients.map(i => i.category)));
  
  const getCategoryTitle = (category: string): string => {
    switch (category) {
      case 'vegetable': return 'Vegetables';
      case 'meat': return 'Meats & Proteins';
      case 'spice': return 'Herbs & Spices';
      case 'dairy': return 'Dairy Products';
      case 'grain': return 'Grains & Pasta';
      case 'other': return 'Other Ingredients';
      default: return category;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Select Your Available Ingredients</h2>
      
      <div className="space-y-4">
        {categories.map(category => (
          <div key={category} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenCategory(openCategory === category ? null : category)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div>
                <h3 className="font-medium">{getCategoryTitle(category)}</h3>
                <p className="text-sm text-gray-500">
                  {commonIngredients.filter(i => 
                    i.category === category && selectedIngredients.includes(i.name)
                  ).length} selected
                </p>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform ${
                  openCategory === category ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            
            {openCategory === category && (
              <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-3">
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
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientSelector;