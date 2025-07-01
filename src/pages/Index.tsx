
import React, { useState } from 'react';
import { Search, MapPin, Star, Wifi, Car, Tent, Home, Users, Heart, Fish, Mountain, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import FilterSection from '@/components/FilterSection';

interface FilterState {
  accommodationType: string[];
  amenities: string[];
  activities: string[];
  petFriendly: boolean;
}

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({
    accommodationType: [],
    amenities: [],
    activities: [],
    petFriendly: false,
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (category: string, value: string | boolean) => {
    if (category === 'petFriendly') {
      setFilters(prev => ({ ...prev, petFriendly: value as boolean }));
    } else {
      setFilters(prev => ({
        ...prev,
        [category]: prev[category as keyof Omit<FilterState, 'petFriendly'>].includes(value as string)
          ? prev[category as keyof Omit<FilterState, 'petFriendly'>].filter((item: string) => item !== value)
          : [...prev[category as keyof Omit<FilterState, 'petFriendly'>], value as string]
      }));
    }
  };

  const mockResults = [
    {
      id: 1,
      name: 'Pine Valley Campground',
      location: 'Colorado Springs, CO',
      rating: 4.8,
      price: 45,
      image: '/placeholder.svg',
      amenities: ['Wi-Fi', 'Showers', 'Toilet'],
      type: 'Campsite'
    },
    {
      id: 2,
      name: 'Mountain View RV Park',
      location: 'Aspen, CO',
      rating: 4.6,
      price: 75,
      image: '/placeholder.svg',
      amenities: ['Wi-Fi', 'Parking', 'Showers'],
      type: 'RV Site'
    },
    {
      id: 3,
      name: 'Cozy Forest Cabin',
      location: 'Vail, CO',
      rating: 4.9,
      price: 120,
      image: '/placeholder.svg',
      amenities: ['Wi-Fi', 'Toilet', 'Parking'],
      type: 'Cabin'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Tent className="h-8 w-8 text-green-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">CampBooker</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Explore</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">List Your Property</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Help</a>
            </nav>
            <Button variant="outline" size="sm">Sign In</Button>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Where to?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-base w-full"
              />
            </div>
            
            {/* Date Inputs */}
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Add dates"
                className="w-32 py-3"
              />
              <Input
                type="text"
                placeholder="Add guests"
                className="w-32 py-3"
              />
            </div>
            
            <Button className="bg-red-600 hover:bg-red-700 px-8 py-3">
              🧭
            </Button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <FilterSection 
        filters={filters} 
        onFilterChange={handleFilterChange} 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">
              {mockResults.length} camping spots found
            </h2>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Sort by: Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid gap-6">
          {mockResults.map((result) => (
            <Card key={result.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="w-80 h-48 bg-gray-200 rounded-l-lg overflow-hidden">
                    <img
                      src={result.image}
                      alt={result.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {result.name}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{result.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center mb-1">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{result.rating}</span>
                        </div>
                        <Badge variant="secondary">{result.type}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {result.amenities.map((amenity) => (
                        <Badge key={amenity} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">Up to 4 guests</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          ${result.price}
                        </div>
                        <div className="text-sm text-gray-600">per night</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Load More Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
