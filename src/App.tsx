import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeDetail from './components/RecipeDetail';
import { recipes as initialRecipes } from './data/recipes';
import { Recipe } from './types/Recipe';

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  
  const selectedRecipe = selectedRecipeId !== null 
    ? recipes.find(r => r.id === selectedRecipeId) 
    : null;
  
  const handleRecipeClick = (id: number) => {
    setSelectedRecipeId(id);
    window.scrollTo(0, 0);
  };
  
  const handleBackClick = () => {
    setSelectedRecipeId(null);
  };
  
  const handleToggleFavorite = (id: number) => {
    setRecipes(recipes.map(recipe => 
      recipe.id === id 
        ? { ...recipe, isFavorite: !recipe.isFavorite } 
        : recipe
    ));
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow py-6 print:py-0">
        {selectedRecipe ? (
          <RecipeDetail 
            recipe={selectedRecipe}
            onBack={handleBackClick}
            onToggleFavorite={handleToggleFavorite}
          />
        ) : (
          <Home 
            onRecipeClick={handleRecipeClick}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>
      
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default App;