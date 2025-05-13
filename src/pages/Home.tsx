import React, { useState, useEffect } from 'react';
import { Recipe } from '../types/Recipe';
import RecipeCard from '../components/RecipeCard';
import FilterBar from '../components/FilterBar';
import { recipes as initialRecipes } from '../data/recipes';
import { RefreshCw } from 'lucide-react';

const Home: React.FC<{ onRecipeClick: (id: number) => void, onToggleFavorite: (id: number) => void }> = ({ onRecipeClick, onToggleFavorite }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(initialRecipes);
  const [filters, setFilters] = useState({
    country: '',
    difficulty: '',
    meatType: '',
    searchTerm: '',
  });
  
  const countries = [...new Set(recipes.map(recipe => recipe.country))];
  
  useEffect(() => {
    let result = recipes;
    
    if (filters.country) {
      result = result.filter(recipe => recipe.country === filters.country);
    }
    
    if (filters.difficulty) {
      result = result.filter(recipe => recipe.difficulty === filters.difficulty);
    }

    if (filters.meatType) {
      result = result.filter(recipe => 
        recipe.tags.includes(filters.meatType.toLowerCase())
      );
    }
    
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      result = result.filter(recipe => 
        recipe.name.toLowerCase().includes(searchLower) || 
        recipe.description.toLowerCase().includes(searchLower) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    setFilteredRecipes(result);
  }, [filters, recipes]);
  
  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const generateMoreRecipes = () => {
    const lastId = Math.max(...recipes.map(r => r.id));
    const newRecipes = Array.from({ length: 24 }, (_, i) => ({
      ...recipes[Math.floor(Math.random() * recipes.length)],
      id: lastId + i + 1,
      name: `${recipes[Math.floor(Math.random() * recipes.length)].name} ${lastId + i + 1}`,
    }));
    setRecipes([...recipes, ...newRecipes]);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl overflow-hidden shadow-lg">
          <div className="p-8 md:p-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Discover World-Class Burger Recipes
              </h1>
              <p className="text-white text-lg">
                Explore unique burger patty recipes from around the globe.
                Perfect your patty-making skills and impress your friends and family.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <div className="flex justify-between items-center mb-6">
        <FilterBar
          onFilterChange={handleFilterChange}
          countries={countries}
        />
        
        <button
          onClick={generateMoreRecipes}
          className="ml-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center transition-colors"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Generate More
        </button>
      </div>
      
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onToggleFavorite={onToggleFavorite}
              onClick={onRecipeClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;