export interface Location {
  id: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
  type: 'city' | 'attraction';
  region: string;
  minDays: number;
  imageUrl: string;
  activities: string[];
}