
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { campingStyles } from '@/utils/campingData';

interface CampingStyleFilterProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedTypes: string[];
  onSelectionChange: (styleId: string) => void;
  selectedCount: number;
}

const CampingStyleFilter = ({
  isOpen,
  onOpenChange,
  selectedTypes,
  onSelectionChange,
  selectedCount
}: CampingStyleFilterProps) => {
  const handleClearAll = () => {
    selectedTypes.forEach(type => {
      onSelectionChange(type);
    });
  };

  return (
    <Popover open={isOpen} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="h-10 px-4 text-sm font-medium border-gray-300 hover:border-gray-400"
        >
          Camping style
          {selectedCount > 0 && (
            <span className="ml-2 bg-gray-900 text-white text-xs px-2 py-0.5 rounded-full">
              {selectedCount}
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
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            {campingStyles.map((style) => {
              const isSelected = selectedTypes.includes(style.id);
              return (
                <Card
                  key={style.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    isSelected ? 'ring-2 ring-green-600 bg-green-50' : 'hover:border-gray-300'
                  }`}
                  onClick={() => onSelectionChange(style.id)}
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

export default CampingStyleFilter;
