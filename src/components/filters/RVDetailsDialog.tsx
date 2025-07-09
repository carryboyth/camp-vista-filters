import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface RVDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (details: RVDetails) => void;
}

export interface RVDetails {
  rvType: string[];
  vehicleLength: string;
  lengthUnit: 'ft' | 'm';
}

const rvTypes = [
  { id: 'caravan', label: 'Caravan' },
  { id: 'camper', label: 'Camper' },
  { id: 'motorhome-a', label: 'Motorhome Class A' },
  { id: 'motorhome-b', label: 'Motorhome Class B' },
  { id: 'motorhome-c', label: 'Motorhome Class C' },
];

const RVDetailsDialog = ({ open, onOpenChange, onSave }: RVDetailsDialogProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [vehicleLength, setVehicleLength] = useState('');
  const [lengthUnit, setLengthUnit] = useState<'ft' | 'm'>('ft');

  const handleTypeToggle = (typeId: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const handleSave = () => {
    onSave({
      rvType: selectedTypes,
      vehicleLength,
      lengthUnit
    });
    onOpenChange(false);
  };

  const handleClearAll = () => {
    setSelectedTypes([]);
    setVehicleLength('');
  };

  const handleSkip = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>RV details</DialogTitle>
          <p className="text-sm text-gray-600">
            Add details to only show places that fit your rig.
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* RV Type Section */}
          <div>
            <Label className="text-base font-medium mb-3 block">RV type</Label>
            <div className="grid grid-cols-2 gap-2">
              {rvTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={selectedTypes.includes(type.id) ? "default" : "outline"}
                  className="h-auto p-3 text-sm justify-start"
                  onClick={() => handleTypeToggle(type.id)}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Vehicle Length Section */}
          <div>
            <Label className="text-base font-medium mb-1 block">Vehicle length</Label>
            <p className="text-sm text-gray-600 mb-3">Including tow vehicle</p>
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Length"
                value={vehicleLength}
                onChange={(e) => setVehicleLength(e.target.value)}
                className="flex-1"
              />
              <div className="flex rounded-md border border-gray-300">
                <Button
                  type="button"
                  variant={lengthUnit === 'ft' ? "default" : "ghost"}
                  size="sm"
                  className="rounded-r-none border-r"
                  onClick={() => setLengthUnit('ft')}
                >
                  ft
                </Button>
                <Button
                  type="button"
                  variant={lengthUnit === 'm' ? "default" : "ghost"}
                  size="sm"
                  className="rounded-l-none"
                  onClick={() => setLengthUnit('m')}
                >
                  m
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex justify-between pt-4">
          <Button 
            variant="ghost" 
            onClick={handleClearAll}
          >
            Clear all
          </Button>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleSkip}
            >
              Skip
            </Button>
            <Button 
              onClick={handleSave}
              className="bg-gray-900 hover:bg-gray-800"
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RVDetailsDialog;