export interface Recipe {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  cuisine: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  ingredients: string[];
  instructions: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isFavorite: boolean;
}