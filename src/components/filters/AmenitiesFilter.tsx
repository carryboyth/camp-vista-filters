
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getAmenitiesOptions } from '@/utils/campingData';

interface AmenitiesFilterProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedAmenities: string[];
  accommodationTypes: string[];
  onAmenityChange: (amenityId: string) => void;
  selectedCount: number;
}

const AmenitiesFilter = ({
  isOpen,
  onOpenChange,
  selectedAmenities,
  accommodationTypes,
  onAmenityChange,
  selectedCount
}: AmenitiesFilterProps) => {
  const amenitiesOptions = getAmenitiesOptions(accommodationTypes);

  const handleClearAll = () => {
    selectedAmenities.forEach(amenity => {
      onAmenityChange(amenity);
    });
  };

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline"
          className="h-10 px-4 text-sm font-medium border-gray-300 hover:border-gray-400"
        >
          Amenities
          {selectedCount > 0 && (
            <span className="ml-2 bg-gray-900 text-white text-xs px-2 py-0.5 rounded-full">
              {selectedCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0 max-h-96 overflow-y-auto" align="start">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">สิ่งอำนวยความสะดวก</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-3">
            {amenitiesOptions.map((amenity) => (
              <div key={amenity.id} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity.id}
                  checked={selectedAmenities.includes(amenity.id)}
                  onCheckedChange={() => onAmenityChange(amenity.id)}
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

          <div className="flex justify-between mt-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleClearAll}
            >
              Clear all
            </Button>
            <Button 
              className="bg-gray-900 hover:bg-gray-800"
              onClick={() => onOpenChange(false)}
            >
              Show results
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AmenitiesFilter;
