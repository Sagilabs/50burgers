import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Location } from './types/Location';
import { locations } from './data/locations';
import { Clock, MapPin, Umbrella, Building2, History as HistoryIcon, Mic as Mix, Plane, Train, Bus } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

function App() {
  const [duration, setDuration] = useState<number>(7);
  const [startingPoint, setStartingPoint] = useState<string>('ho chi minh city');
  const [endpoint, setEndpoint] = useState<string>('hanoi');
  const [preference, setPreference] = useState<string>('mix');
  const [selectedLocations, setSelectedLocations] = useState<Location[]>([]);

  const handlePlanRoute = () => {
    const start = locations.find(loc => 
      loc.name.toLowerCase() === startingPoint.toLowerCase()
    );
    
    const end = locations.find(loc =>
      loc.name.toLowerCase() === endpoint.toLowerCase()
    );
    
    if (!start || !end) return;
    
    let remainingDays = duration;
    let route: Location[] = [];
    
    // Add starting point if we have enough days
    if (remainingDays >= start.minDays) {
      route.push(start);
      remainingDays -= start.minDays;
    } else {
      // Not enough days even for the starting point
      setSelectedLocations([start]);
      return;
    }
    
    // Find intermediate locations based on region progression and preference
    const startRegionIndex = ['South', 'Central', 'North'].indexOf(start.region);
    const endRegionIndex = ['South', 'Central', 'North'].indexOf(end.region);
    const isNorthToSouth = startRegionIndex > endRegionIndex;
    
    const intermediateLocations = locations.filter(loc => {
      if (loc.id === start.id || loc.id === end.id) return false;
      
      const locRegionIndex = ['South', 'Central', 'North'].indexOf(loc.region);
      const isInRoute = isNorthToSouth 
        ? locRegionIndex <= startRegionIndex && locRegionIndex >= endRegionIndex
        : locRegionIndex >= startRegionIndex && locRegionIndex <= endRegionIndex;

      // Filter based on preference
      if (preference === 'beaches') {
        return isInRoute && loc.activities.some(activity => 
          activity.toLowerCase().includes('beach') || 
          activity.toLowerCase().includes('island')
        );
      } else if (preference === 'cities') {
        return isInRoute && loc.type === 'city';
      } else if (preference === 'history') {
        return isInRoute && loc.activities.some(activity =>
          activity.toLowerCase().includes('temple') ||
          activity.toLowerCase().includes('museum') ||
          activity.toLowerCase().includes('ancient') ||
          activity.toLowerCase().includes('imperial')
        );
      }
      // For 'mix', return all locations in route
      return isInRoute;
    }).sort((a, b) => {
      const aRegionIndex = ['South', 'Central', 'North'].indexOf(a.region);
      const bRegionIndex = ['South', 'Central', 'North'].indexOf(b.region);
      return isNorthToSouth ? bRegionIndex - aRegionIndex : aRegionIndex - bRegionIndex;
    });
    
    // Add intermediate locations while we have enough days
    for (const loc of intermediateLocations) {
      if (remainingDays >= loc.minDays) {
        route.push(loc);
        remainingDays -= loc.minDays;
      }
    }
    
    // Add endpoint if we have enough days
    if (end !== start && remainingDays >= end.minDays) {
      route.push(end);
      remainingDays -= end.minDays;
    }
    
    setSelectedLocations(route);
  };

  const getTransportIcon = (type: string) => {
    switch (type) {
      case 'plane': return <Plane className="w-4 h-4" />;
      case 'train': return <Train className="w-4 h-4" />;
      case 'bus': return <Bus className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold flex items-center">
            <MapPin className="mr-2" />
            Vietnam Travel Planner
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Plan Your Route</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration (days)
                  </label>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      className="w-full p-2 border rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Starting Point
                  </label>
                  <select
                    value={startingPoint}
                    onChange={(e) => setStartingPoint(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="ho chi minh city">Ho Chi Minh City</option>
                    <option value="da nang">Da Nang</option>
                    <option value="hanoi">Hanoi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Point
                  </label>
                  <select
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="ho chi minh city">Ho Chi Minh City</option>
                    <option value="da nang">Da Nang</option>
                    <option value="hanoi">Hanoi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Travel Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setPreference('beaches')}
                      className={`flex items-center justify-center p-2 rounded-lg border ${
                        preference === 'beaches' 
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-700' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <Umbrella className="w-4 h-4 mr-1" />
                      Beaches
                    </button>
                    <button
                      onClick={() => setPreference('cities')}
                      className={`flex items-center justify-center p-2 rounded-lg border ${
                        preference === 'cities' 
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-700' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <Building2 className="w-4 h-4 mr-1" />
                      Cities
                    </button>
                    <button
                      onClick={() => setPreference('history')}
                      className={`flex items-center justify-center p-2 rounded-lg border ${
                        preference === 'history' 
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-700' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <HistoryIcon className="w-4 h-4 mr-1" />
                      History
                    </button>
                    <button
                      onClick={() => setPreference('mix')}
                      className={`flex items-center justify-center p-2 rounded-lg border ${
                        preference === 'mix' 
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-700' 
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <Mix className="w-4 h-4 mr-1" />
                      Mix
                    </button>
                  </div>
                </div>

                <button
                  onClick={handlePlanRoute}
                  className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Plan Route
                </button>
              </div>
            </div>

            {selectedLocations.length > 0 && (
              <div className="bg-white rounded-lg shadow p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">Your Itinerary</h2>
                <div className="space-y-4">
                  {selectedLocations.map((loc, index) => (
                    <div key={loc.id}>
                      <div className="border-b pb-4 last:border-b-0">
                        <div className="flex items-start">
                          <div className="bg-emerald-100 rounded-full p-2 mr-3">
                            <span className="text-emerald-600 font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold">{loc.name}</h3>
                            <p className="text-sm text-gray-600">
                              Suggested stay: {loc.minDays} days
                            </p>
                            <ul className="mt-2 space-y-1">
                              {loc.activities.map((activity, i) => (
                                <li key={i} className="text-sm text-gray-600">
                                  • {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {index < selectedLocations.length - 1 && loc.transport?.to[selectedLocations[index + 1].name] && (
                        <div className="my-4 pl-11">
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-sm font-medium text-gray-700 mb-2">
                              Transport to {selectedLocations[index + 1].name}:
                            </p>
                            <div className="space-y-2">
                              {loc.transport.to[selectedLocations[index + 1].name].options.map((option, i) => (
                                <div key={i} className="flex items-center justify-between text-sm">
                                  <div className="flex items-center">
                                    {getTransportIcon(option.type)}
                                    <span className="ml-2">{option.duration}</span>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <span className="text-gray-600">{option.cost}</span>
                                    {option.url && (
                                      <a
                                        href={option.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-emerald-600 hover:text-emerald-700"
                                      >
                                        Book
                                      </a>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-2 h-[600px]">
            <MapContainer
              center={[16.0544, 108.2022]}
              zoom={6}
              className="w-full h-full rounded-lg shadow"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {selectedLocations.map((loc, index) => (
                <Marker key={loc.id} position={[loc.lat, loc.lng]}>
                  <Popup>
                    <div className="text-center">
                      <h3 className="font-semibold">{loc.name}</h3>
                      <p className="text-sm text-gray-600">{loc.description}</p>
                      <img
                        src={loc.imageUrl}
                        alt={loc.name}
                        className="w-full h-32 object-cover mt-2 rounded"
                      />
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;