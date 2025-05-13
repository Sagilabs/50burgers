import React from 'react';
import { ArrowLeft, Clock, ChefHat, Printer, Heart, Share2 } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
  onToggleFavorite: (id: number) => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onBack, onToggleFavorite }) => {
  const { id, name, country, description, ingredients, instructions, imageUrl, prepTime, cookTime, difficulty, tags, isFavorite } = recipe;
  
  const totalTime = prepTime + cookTime;
  
  const handlePrint = () => {
    window.print();
  };
  
  const getDifficultyColor = (diff: string) => {
    switch(diff) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto print:shadow-none">
      <div className="relative h-64 md:h-96 print:h-64">
        <button 
          onClick={onBack} 
          className="absolute top-4 left-4 z-10 bg-white rounded-full p-2 shadow-md transition-transform hover:scale-105 print:hidden"
        >
          <ArrowLeft className="w-5 h-5 text-gray-800" />
        </button>
        
        <div className="absolute top-4 right-4 z-10 flex space-x-2 print:hidden">
          <button 
            onClick={handlePrint}
            className="bg-white rounded-full p-2 shadow-md transition-transform hover:scale-105"
          >
            <Printer className="w-5 h-5 text-gray-800" />
          </button>
          
          <button className="bg-white rounded-full p-2 shadow-md transition-transform hover:scale-105">
            <Share2 className="w-5 h-5 text-gray-800" />
          </button>
          
          <button 
            onClick={() => onToggleFavorite(id)}
            className="bg-white rounded-full p-2 shadow-md transition-transform hover:scale-105"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-800'}`} />
          </button>
        </div>
        
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
          <div className="inline-block px-3 py-1 text-sm font-semibold text-white bg-orange-500 rounded-lg mb-2">
            {country}
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white">{name}</h1>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <p className="text-gray-700 mb-6">{description}</p>
        
        <div className="flex flex-wrap justify-between mb-8 pb-6 border-b border-gray-200">
          <div className="flex items-center mr-6 mb-4">
            <Clock className="w-5 h-5 text-orange-500 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Total Time</p>
              <p className="font-semibold">{totalTime} min</p>
            </div>
          </div>
          
          <div className="flex items-center mr-6 mb-4">
            <Clock className="w-5 h-5 text-orange-500 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Prep Time</p>
              <p className="font-semibold">{prepTime} min</p>
            </div>
          </div>
          
          <div className="flex items-center mr-6 mb-4">
            <Clock className="w-5 h-5 text-orange-500 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Cook Time</p>
              <p className="font-semibold">{cookTime} min</p>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <ChefHat className="w-5 h-5 text-orange-500 mr-2" />
            <div>
              <p className="text-sm text-gray-500">Difficulty</p>
              <p className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(difficulty)}`}>
                {difficulty}
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Ingredients</h2>
            <ul className="space-y-2">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Instructions</h2>
            <ol className="space-y-4">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-orange-500 text-white rounded-full font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;