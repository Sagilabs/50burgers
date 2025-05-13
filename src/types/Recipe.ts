export interface Recipe {
  id: number;
  name: string;
  country: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  imageUrl: string;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
  isFavorite: boolean;
}