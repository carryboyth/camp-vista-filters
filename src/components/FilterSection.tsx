import React, { useState } from 'react';
import { Tent, Car, Home, Wifi, Bath, Utensils, MapPin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FilterSectionProps {
  filters: {
    accommodationType: string[];
    amenities: string[];
    petFriendly: boolean;
  };
  onFilterChange: (category: string, value: string | boolean) => void;
}

const FilterSection = ({ filters, onFilterChange }: FilterSectionProps) => {
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const campingStyles = [
    { 
      id: 'tent', 
      label: 'Tent', 
      icon: Tent, 
      description: 'Pitch your own tent',
      image: '⛺'
    },
    { 
      id: 'rv', 
      label: 'RV', 
      icon: Car, 
      description: 'Find places that fit your vehicle',
      image: '🚐'
    },
    { 
      id: 'glamping', 
      label: 'Glamping or lodging', 
      icon: Home, 
      description: 'Accommodations provided',
      image: '🏕️'
    }
  ];

  const amenitiesOptions = [
    { id: 'toilet', label: 'Toilet' },
    { id: 'shower', label: 'Shower' },
    { id: 'wifi', label: 'Wifi' },
    { id: 'campfires', label: 'Campfires allowed' },
    { id: 'potable-water', label: 'Potable water' },
    { id: 'picnic-table', label: 'Picnic table' },
    { id: 'cooking-equipment', label: 'Cooking equipment' },
    { id: 'trash-bin', label: 'Trash bin' }
  ];

  const handleCampingStyleSelect = (styleId: string) => {
    onFilterChange('accommodationType', styleId);
    setOpenPopover(null);
  };

  const handleAmenityChange = (amenityId: string) => {
    onFilterChange('amenities', amenityId);
  };

  const getSelectedCount = (category: string) => {
    if (category === 'camping-style') {
      return filters.accommodationType.length;
    }
    if (category === 'amenities') {
      return filters.amenities.length;
    }
    return 0;
  };

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {/* Camping Style Filter */}
          <Popover 
            open={openPopover === 'camping-style'} 
            onOpenChange={(open) => setOpenPopover(open ? 'camping-style' : null)}
          >
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className="h-10 px-4 text-sm font-medium border-gray-300 hover:border-gray-400"
              >
                Camping style
                {getSelectedCount('camping-style') > 0 && (
                  <span className="ml-2 bg-gray-900 text-white text-xs px-2 py-0.5 rounded-full">
                    {getSelectedCount('camping-style')}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-0" align="start">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Camping style</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setOpenPopover(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  {campingStyles.map((style) => {
                    const isSelected = filters.accommodationType.includes(style.id);
                    return (
                      <Card
                        key={style.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          isSelected ? 'ring-2 ring-green-600 bg-green-50' : 'hover:border-gray-300'
                        }`}
                        onClick={() => handleCampingStyleSelect(style.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{style.image}</div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{style.label}</h4>
                              <p className="text-sm text-gray-600">{style.description}</p>
                            </div>
                            {isSelected && (
                              <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                <div className="mt-4 flex justify-between">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      // Clear camping style filters
                      filters.accommodationType.forEach(type => {
                        onFilterChange('accommodationType', type);
                      });
                    }}
                  >
                    Clear all
                  </Button>
                  <Button 
                    className="bg-gray-900 hover:bg-gray-800"
                    onClick={() => setOpenPopover(null)}
                  >
                    No results
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Amenities Filter */}
          <Popover 
            open={openPopover === 'amenities'} 
            onOpenChange={(open) => setOpenPopover(open ? 'amenities' : null)}
          >
            <PopoverTrigger asChild>
              <Button 
                variant="outline"
                className="h-10 px-4 text-sm font-medium border-gray-300 hover:border-gray-400"
              >
                Amenities
                {getSelectedCount('amenities') > 0 && (
                  <span className="ml-2 bg-gray-900 text-white text-xs px-2 py-0.5 rounded-full">
                    {getSelectedCount('amenities')}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="start">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Amenities</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setOpenPopover(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Essentials</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {amenitiesOptions.slice(0, 6).map((amenity) => (
                      <div key={amenity.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity.id}
                          checked={filters.amenities.includes(amenity.id)}
                          onCheckedChange={() => handleAmenityChange(amenity.id)}
                        />
                        <label
                          htmlFor={amenity.id}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {amenity.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {amenitiesOptions.slice(6).map((amenity) => (
                      <div key={amenity.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity.id}
                          checked={filters.amenities.includes(amenity.id)}
                          onCheckedChange={() => handleAmenityChange(amenity.id)}
                        />
                        <label
                          htmlFor={amenity.id}
                          className="text-sm text-gray-700 cursor-pointer"
                        >
                          {amenity.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      // Clear amenities filters
                      filters.amenities.forEach(amenity => {
                        onFilterChange('amenities', amenity);
                      });
                    }}
                  >
                    Clear all
                  </Button>
                  <Button 
                    className="bg-gray-900 hover:bg-gray-800"
                    onClick={() => setOpenPopover(null)}
                  >
                    No results
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Other Filters */}
          <Button 
            variant="outline"
            className="h-10 px-4 text-sm font-medium border-gray-300 hover:border-gray-400"
          >
            Pets allowed
          </Button>

          <Button 
            variant="outline"
            className="h-10 px-4 text-sm font-medium border-gray-300 hover:border-gray-400"
          >
            Instant book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
