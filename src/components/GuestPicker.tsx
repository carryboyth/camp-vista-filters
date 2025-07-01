
import React, { useState } from 'react';
import { Users, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface GuestCounts {
  adults: number;
  children: number;
  pets: number;
}

interface GuestPickerProps {
  value: GuestCounts;
  onChange: (counts: GuestCounts) => void;
}

const GuestPicker = ({ value, onChange }: GuestPickerProps) => {
  const [open, setOpen] = useState(false);

  const totalGuests = value.adults + value.children;
  
  const formatGuests = () => {
    if (totalGuests === 0) return 'Add guests';
    let text = `${totalGuests} guest${totalGuests > 1 ? 's' : ''}`;
    if (value.pets > 0) {
      text += `, ${value.pets} pet${value.pets > 1 ? 's' : ''}`;
    }
    return text;
  };

  const updateCount = (type: keyof GuestCounts, increment: boolean) => {
    const newValue = { ...value };
    if (increment) {
      newValue[type]++;
    } else if (newValue[type] > 0) {
      newValue[type]--;
    }
    onChange(newValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-40 justify-start text-left font-normal py-3"
        >
          <Users className="mr-2 h-4 w-4" />
          {formatGuests()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="start">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Adults</div>
              <div className="text-sm text-gray-500">Ages 13 or above</div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => updateCount('adults', false)}
                disabled={value.adults === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{value.adults}</span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => updateCount('adults', true)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Children</div>
              <div className="text-sm text-gray-500">Ages 12 or below</div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => updateCount('children', false)}
                disabled={value.children === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{value.children}</span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => updateCount('children', true)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Any pets?</div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => updateCount('pets', false)}
                disabled={value.pets === 0}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{value.pets}</span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => updateCount('pets', true)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GuestPicker;
