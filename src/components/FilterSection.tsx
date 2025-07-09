import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import CampingStyleFilter from './filters/CampingStyleFilter';
import AmenitiesFilter from './filters/AmenitiesFilter';

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
    <div className="bg-white border-b border-gray-200 py-3 md:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {/* Camping Style Filter */}
          <CampingStyleFilter
            isOpen={openPopover === 'camping-style'}
            onOpenChange={(open) => setOpenPopover(open ? 'camping-style' : null)}
            selectedTypes={filters.accommodationType}
            onSelectionChange={handleCampingStyleSelect}
            selectedCount={getSelectedCount('camping-style')}
          />

          {/* Amenities Filter */}
          <AmenitiesFilter
            isOpen={openPopover === 'amenities'}
            onOpenChange={(open) => setOpenPopover(open ? 'amenities' : null)}
            selectedAmenities={filters.amenities}
            accommodationTypes={filters.accommodationType}
            onAmenityChange={handleAmenityChange}
            selectedCount={getSelectedCount('amenities')}
          />

          {/* Other Filters */}
          <Button 
            variant="outline"
            className="h-9 md:h-10 px-3 md:px-4 text-xs md:text-sm font-medium border-gray-300 hover:border-gray-400"
          >
            Pets allowed
          </Button>

          <Button 
            variant="outline"
            className="h-9 md:h-10 px-3 md:px-4 text-xs md:text-sm font-medium border-gray-300 hover:border-gray-400"
          >
            Instant book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
