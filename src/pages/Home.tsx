import React, { useState, useEffect } from 'react';
import { Recipe } from '../types/Recipe';
import RecipeCard from '../components/RecipeCard';
import FilterBar from '../components/FilterBar';
import { recipes as initialRecipes } from '../data/recipes';

const Home: React.FC<{ onRecipeClick: (id: number) => void, onToggleFavorite: (id: number) => void }> = ({ onRecipeClick, onToggleFavorite }) => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(initialRecipes);
  const [filters, setFilters] = useState({
    country: '',
    difficulty: '',
    time: '',
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
    
    if (filters.time) {
      const timeValue = parseInt(filters.time);
      if (timeValue <= 60) {
        result = result.filter(recipe => (recipe.prepTime + recipe.cookTime) <= timeValue);
      } else {
        result = result.filter(recipe => (recipe.prepTime + recipe.cookTime) > 60);
      }
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
      
      <FilterBar
        onFilterChange={handleFilterChange}
        countries={countries}
      />
      
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