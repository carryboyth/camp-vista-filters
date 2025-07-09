
import React, { useState } from 'react';
import { MapPin, Star, Wifi, Car, Tent, Home, Users, Heart, Fish, Mountain, Eye, Menu, X } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import FilterSection from '@/components/FilterSection';
import LocationPicker from '@/components/LocationPicker';
import DateRangePicker from '@/components/DateRangePicker';
import GuestPicker from '@/components/GuestPicker';

interface FilterState {
  accommodationType: string[];
  amenities: string[];
  activities: string[];
  petFriendly: boolean;
}

interface GuestCounts {
  adults: number;
  children: number;
  pets: number;
}

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({
    accommodationType: [],
    amenities: [],
    activities: [],
    petFriendly: false,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [searchLocation, setSearchLocation] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [guestCounts, setGuestCounts] = useState<GuestCounts>({
    adults: 0,
    children: 0,
    pets: 0,
  });

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
      image: '/lovable-uploads/9210e500-1c85-4125-a620-f9b9c5edd9ec.png',
      amenities: ['Wi-Fi', 'Showers', 'Toilet'],
      type: 'Campsite'
    },
    {
      id: 2,
      name: 'Mountain View RV Park',
      location: 'Aspen, CO',
      rating: 4.6,
      price: 75,
      image: '/lovable-uploads/44879b85-24d0-409c-9971-771f83590e55.png',
      amenities: ['Wi-Fi', 'Parking', 'Showers'],
      type: 'RV Site'
    },
    {
      id: 3,
      name: 'Cozy Forest Cabin',
      location: 'Vail, CO',
      rating: 4.9,
      price: 120,
      image: '/lovable-uploads/7661dd8e-ed46-4e8a-abeb-f96348ea5ef8.png',
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
              <img 
                src="/lovable-uploads/c7640b69-efe4-4e92-83ba-c7ac7e500c48.png" 
                alt="RVN CAMP" 
                className="h-6 sm:h-8 mr-3"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Explore</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">List Your Property</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Help</a>
            </nav>
            
            <div className="flex items-center">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">Sign In</Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden ml-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-2">
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Explore</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">List Your Property</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Help</a>
                <Button variant="outline" size="sm" className="mx-3 mt-2 self-start">Sign In</Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Search Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center">
            <div className="flex-1">
              <LocationPicker 
                value={searchLocation} 
                onChange={setSearchLocation} 
              />
            </div>
            
            <div className="flex-1">
              <DateRangePicker 
                value={dateRange} 
                onChange={setDateRange} 
              />
            </div>
            
            <div className="flex-1">
              <GuestPicker 
                value={guestCounts} 
                onChange={setGuestCounts} 
              />
            </div>
            
            <Button className="bg-red-600 hover:bg-red-700 px-6 md:px-8 py-3 w-full md:w-auto">
              🧭 Search
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              {mockResults.length} camping spots found
            </h2>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full sm:w-auto">
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
            <Link key={result.id} to={`/camping/${result.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-80 h-48 bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden">
                      <img
                        src={result.image}
                        alt={result.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {result.name}
                          </h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{result.location}</span>
                          </div>
                        </div>
                        <div className="flex sm:flex-col sm:text-right items-center sm:items-end gap-2">
                          <div className="flex items-center">
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

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                          <span className="text-sm text-gray-600">Up to 4 guests</span>
                        </div>
                        <div className="flex items-center sm:block sm:text-right">
                          <div className="text-xl sm:text-2xl font-bold text-gray-900 mr-2 sm:mr-0">
                            ${result.price}
                          </div>
                          <div className="text-sm text-gray-600">per night</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
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
