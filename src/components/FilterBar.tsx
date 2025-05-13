import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  onFilterChange: (filters: {
    country: string;
    difficulty: string;
    meatType: string;
    searchTerm: string;
  }) => void;
  countries: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange, countries }) => {
  const [country, setCountry] = useState<string>('');
  const [difficulty, setDifficulty] = useState<string>('');
  const [meatType, setMeatType] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const handleFilterChange = (type: string, value: string) => {
    switch(type) {
      case 'country':
        setCountry(value);
        break;
      case 'difficulty':
        setDifficulty(value);
        break;
      case 'meatType':
        setMeatType(value);
        break;
      case 'search':
        setSearchTerm(value);
        break;
      default:
        break;
    }
    
    onFilterChange({
      country: type === 'country' ? value : country,
      difficulty: type === 'difficulty' ? value : difficulty,
      meatType: type === 'meatType' ? value : meatType,
      searchTerm: type === 'search' ? value : searchTerm,
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-orange-500" />
        <h2 className="text-lg font-semibold">Filter Recipes</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <select
            className="w-full p-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={country}
            onChange={(e) => handleFilterChange('country', e.target.value)}
          >
            <option value="">All Countries</option>
            {countries.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
        
        <div className="relative">
          <select
            className="w-full p-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={difficulty}
            onChange={(e) => handleFilterChange('difficulty', e.target.value)}
          >
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            className="w-full p-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={meatType}
            onChange={(e) => handleFilterChange('meatType', e.target.value)}
          >
            <option value="">All Types</option>
            <option value="beef">Beef</option>
            <option value="chicken">Chicken</option>
            <option value="pork">Pork</option>
            <option value="lamb">Lamb</option>
            <option value="moose">Moose</option>
            <option value="kangaroo">Kangaroo</option>
            <option value="vegetarian">Vegetarian</option>
          </select>
          <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
        
        <div className="relative md:hidden">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchTerm}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;