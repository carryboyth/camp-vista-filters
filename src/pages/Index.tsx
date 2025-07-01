
import React, { useState } from 'react';
import { Search, MapPin, Star, Wifi, Car, Tent, Home, Users, Heart, Fish, Mountain, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

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

  const handleFilterChange = (category: keyof FilterState, value: string | boolean) => {
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

  const accommodationTypes = [
    { id: 'campsite', label: 'Campsite', icon: Tent },
    { id: 'rv', label: 'RV Site', icon: Car },
    { id: 'cabin', label: 'Cabin', icon: Home },
  ];

  const amenitiesOptions = [
    { id: 'toilet', label: 'Toilet', icon: Home },
    { id: 'wifi', label: 'Wi-Fi', icon: Wifi },
    { id: 'showers', label: 'Showers', icon: Home },
    { id: 'parking', label: 'Parking', icon: Car },
  ];

  const activitiesOptions = [
    { id: 'hiking', label: 'Hiking', icon: Mountain },
    { id: 'fishing', label: 'Fishing', icon: Fish },
    { id: 'stargazing', label: 'Stargazing', icon: Eye },
  ];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Where do you want to camp?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
            <Button className="absolute right-2 top-2 bg-green-600 hover:bg-green-700">
              Search
            </Button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className="w-80 bg-white rounded-lg shadow-sm border p-6 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                Clear all
              </Button>
            </div>

            {/* Accommodation Type */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Accommodation Type</h3>
              <div className="space-y-3">
                {accommodationTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <div key={type.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={type.id}
                        checked={filters.accommodationType.includes(type.id)}
                        onCheckedChange={() => handleFilterChange('accommodationType', type.id)}
                      />
                      <label
                        htmlFor={type.id}
                        className="flex items-center text-sm text-gray-700 cursor-pointer flex-1"
                      >
                        <Icon className="h-4 w-4 mr-2 text-gray-500" />
                        {type.label}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Amenities</h3>
              <div className="space-y-3">
                {amenitiesOptions.map((amenity) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={amenity.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={amenity.id}
                        checked={filters.amenities.includes(amenity.id)}
                        onCheckedChange={() => handleFilterChange('amenities', amenity.id)}
                      />
                      <label
                        htmlFor={amenity.id}
                        className="flex items-center text-sm text-gray-700 cursor-pointer flex-1"
                      >
                        <Icon className="h-4 w-4 mr-2 text-gray-500" />
                        {amenity.label}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Activities */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Activities</h3>
              <div className="space-y-3">
                {activitiesOptions.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={activity.id}
                        checked={filters.activities.includes(activity.id)}
                        onCheckedChange={() => handleFilterChange('activities', activity.id)}
                      />
                      <label
                        htmlFor={activity.id}
                        className="flex items-center text-sm text-gray-700 cursor-pointer flex-1"
                      >
                        <Icon className="h-4 w-4 mr-2 text-gray-500" />
                        {activity.label}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pet Friendly */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="petFriendly"
                  checked={filters.petFriendly}
                  onCheckedChange={(checked) => handleFilterChange('petFriendly', checked)}
                />
                <label
                  htmlFor="petFriendly"
                  className="flex items-center text-sm text-gray-700 cursor-pointer flex-1"
                >
                  <Heart className="h-4 w-4 mr-2 text-gray-500" />
                  Pet Friendly
                </label>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
