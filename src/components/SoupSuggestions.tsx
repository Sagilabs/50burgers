import React from 'react';
import { Soup } from '../types/Soup';
import { ArrowRight } from 'lucide-react';

interface Props {
  suggestions: {
    soup: Soup;
    missingIngredients: string[];
  }[];
}

const SoupSuggestions: React.FC<Props> = ({ suggestions }) => {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Recommended Soups</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suggestions.map(({ soup, missingIngredients }) => (
          <div key={soup.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img 
              src={soup.imageUrl} 
              alt={soup.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{soup.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{soup.description}</p>
              
              {missingIngredients.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Additional ingredients needed:
                  </h4>
                  <ul className="space-y-1">
                    {missingIngredients.map(ingredient => (
                      <li key={ingredient} className="text-sm flex items-center text-gray-600">
                        <ArrowRight className="w-4 h-4 mr-2 text-orange-500" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoupSuggestions;