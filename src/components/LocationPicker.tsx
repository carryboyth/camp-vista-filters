
import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface LocationPickerProps {
  value: string;
  onChange: (value: string) => void;
}

const LocationPicker = ({ value, onChange }: LocationPickerProps) => {
  const [open, setOpen] = useState(false);

  const popularLocations = [
    'Colorado Springs, CO',
    'Aspen, CO',
    'Vail, CO',
    'Boulder, CO',
    'Denver, CO',
    'Estes Park, CO',
    'Steamboat Springs, CO',
    'Durango, CO'
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex-1 relative cursor-pointer">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Where to?"
            value={value}
            className="pl-10 pr-4 py-3 text-base w-full cursor-pointer"
            readOnly
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <Command>
          <CommandInput placeholder="Search destinations..." />
          <CommandList>
            <CommandEmpty>No destinations found.</CommandEmpty>
            <CommandGroup heading="Popular destinations">
              {popularLocations.map((location) => (
                <CommandItem
                  key={location}
                  onSelect={() => {
                    onChange(location);
                    setOpen(false);
                  }}
                  className="cursor-pointer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  {location}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LocationPicker;
