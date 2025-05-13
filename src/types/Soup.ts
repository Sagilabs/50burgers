export interface Soup {
  id: number;
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: {
    name: string;
    amount: string;
    category: 'vegetable' | 'meat' | 'spice' | 'dairy' | 'grain' | 'other';
  }[];
  instructions: string[];
  tags: string[];
  isFavorite: boolean;
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export type IngredientCategory = 'vegetable' | 'meat' | 'spice' | 'dairy' | 'grain' | 'other';