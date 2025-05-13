import React, { useState } from 'react';
import { Soup } from './types/Soup';
import { Soup as SoupIcon, Heart, Clock, Users } from 'lucide-react';

function App() {
  const [soups, setSoups] = useState<Soup[]>([]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold flex items-center">
            <SoupIcon className="mr-2" />
            50 Soups of the World
          </h1>
          <p className="mt-2 text-orange-100">
            Discover authentic soup recipes from every corner of the globe
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Recipe cards will go here */}
        </div>
      </main>
    </div>
  );
}

export default App;