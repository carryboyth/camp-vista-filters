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
      id: 'campsite', 
      label: 'ลานกางเต็นท์ (Camp Site)', 
      icon: Tent, 
      description: 'พื้นที่โล่งสำหรับลูกค้านำเต็นท์มาเอง',
      image: '⛺'
    },
    { 
      id: 'rv', 
      label: 'จุดจอดรถบ้าน / คาราวาน (RV / Campervan site)', 
      icon: Car, 
      description: 'รองรับการจอดรถบ้าน พร้อมระบบไฟ/น้ำ',
      image: '🚐'
    },
    { 
      id: 'hotel', 
      label: 'บ้านพัก / Hotel', 
      icon: Home, 
      description: 'ที่พักพร้อมสิ่งอำนวยความสะดวก',
      image: '🏨'
    }
  ];

  const getAmenitiesOptions = () => {
    const selectedTypes = filters.accommodationType;
    
    // If campsite is selected
    if (selectedTypes.includes('campsite')) {
      return [
        { id: 'toilet', label: 'ห้องน้ำ' },
        { id: 'shower', label: 'ห้องอาบน้ำ' },
        { id: 'electricity', label: 'ไฟฟ้า' },
        { id: 'campfire', label: 'จุดก่อกองไฟ' },
        { id: 'wifi-mobile', label: 'สัญญาณมือถือ / Wi-Fi' },
        { id: 'tent-equipment', label: 'อุปกรณ์เต้นท์' },
        { id: 'bedding', label: 'หมอน / ผ้าห่ม' },
        { id: 'portable-ac', label: 'แอร์เคลื่อนที่' },
        { id: 'cafe-shop', label: 'คาเฟ่/ร้านขายของ' },
        { id: 'breakfast', label: 'อาหารเช้า' },
        { id: 'parking', label: 'พื้นที่จอดรถ' },
        { id: 'pets-allowed', label: 'อนุญาตสัตว์เลี้ยงเข้าได้' }
      ];
    }
    
    // If RV is selected
    if (selectedTypes.includes('rv')) {
      return [
        // Power System
        { id: 'power-hookups', label: '🔌 ระบบไฟฟ้า (Power Hookups)', category: 'power' },
        { id: 'electric-hookup', label: 'มีไฟฟ้าให้ (Electric Hookup)' },
        { id: '15-amp', label: 'รองรับไฟฟ้า 15 amp' },
        { id: '30-amp', label: 'รองรับไฟฟ้า 30 amp' },
        { id: '50-amp', label: 'รองรับไฟฟ้า 50 amp' },
        
        // Water System
        { id: 'water-system', label: '🚰 ระบบน้ำ', category: 'water' },
        { id: 'water-hookup', label: 'มีน้ำประปาให้ต่อเข้า RV' },
        { id: 'water-tank', label: 'มีถังน้ำรวมให้เติม' },
        
        // Sewer System
        { id: 'sewer-system', label: '💩 ระบบท่อน้ำทิ้ง', category: 'sewer' },
        { id: 'sewer-hookup', label: 'มีท่อน้ำทิ้งต่อเข้า RV ได้ (Sewer Hookup)' },
        { id: 'dump-station', label: 'มีจุดทิ้งของเสีย (Dump Station)' },
        
        // Parking
        { id: 'parking-area', label: '🅿️ ลานจอด', category: 'parking' },
        { id: 'pull-through', label: 'พื้นที่จอดแบบ Pull-through (ไม่ต้องถอยหลัง)' },
        { id: 'back-in', label: 'พื้นที่จอดแบบ Back-in (ต้องถอยเข้าจอด)' },
        { id: 'slide-out', label: 'รองรับ Slide-out' },
        { id: 'big-rig', label: 'รองรับรถยาวมากกว่า 10 เมตร' },
        { id: 'level-site', label: 'ลานจอดพื้นเรียบ (Concrete / Gravel / Dirt)' },
        
        // Additional Facilities
        { id: 'additional-facilities', label: '🚿 สิ่งอำนวยความสะดวกเพิ่มเติม', category: 'facilities' },
        { id: 'shared-restroom', label: 'ห้องน้ำรวม' },
        { id: 'shared-shower', label: 'ห้องอาบน้ำ' },
        { id: 'dish-washing', label: 'จุดล้างจาน' },
        { id: 'trash-nearby', label: 'ถังขยะใกล้จุดจอด' },
        { id: 'security-camera', label: 'กล้องวงจรปิด / ไฟส่องสว่าง' },
        { id: 'wifi-available', label: 'มี Wi-Fi' },
        { id: 'cell-signal', label: 'มีสัญญาณโทรศัพท์มือถือ' },
        
        // Others
        { id: 'rv-others', label: '🐾 อื่น ๆ', category: 'others' },
        { id: 'pets-allowed-rv', label: 'อนุญาตสัตว์เลี้ยงเข้าได้' },
        { id: 'near-services', label: 'ใกล้ร้านค้า / จุดให้บริการ' },
        { id: 'fire-picnic', label: 'มีพื้นที่ก่อไฟ / ปิกนิก' }
      ];
    }
    
    // If hotel is selected
    if (selectedTypes.includes('hotel')) {
      return [
        // Room Features
        { id: 'room-features', label: '🛏 ภายในห้องพัก', category: 'room' },
        { id: 'bed-options', label: 'เตียงเดี่ยว / เตียงคู่' },
        { id: 'bedding-complete', label: 'เครื่องนอนครบ' },
        { id: 'air-conditioning', label: 'แอร์ / พัดลม' },
        { id: 'television', label: 'ทีวี' },
        { id: 'refrigerator', label: 'ตู้เย็น' },
        { id: 'kettle-coffee', label: 'กาน้ำร้อน / เครื่องชงกาแฟ' },
        { id: 'microwave-oven', label: 'ไมโครเวฟ' },
        { id: 'work-desk', label: 'โต๊ะทำงาน' },
        { id: 'wardrobe', label: 'ตู้เสื้อผ้า' },
        { id: 'balcony-view', label: 'ระเบียง / วิวธรรมชาติ' },
        
        // Bathroom
        { id: 'bathroom-features', label: '🚿 ห้องน้ำ', category: 'bathroom' },
        { id: 'private-bathroom', label: 'ห้องน้ำในตัว' },
        { id: 'water-heater', label: 'เครื่องทำน้ำอุ่น' },
        { id: 'bathtub', label: 'อ่างอาบน้ำ' },
        { id: 'towels', label: 'ผ้าเช็ดตัว' },
        { id: 'toiletries', label: 'สบู่ / แชมพู / ของใช้ในห้องน้ำ' },
        { id: 'hotel-wifi', label: 'Wi-Fi' },
        { id: 'power-outlets', label: 'ปลั๊กไฟ' },
        { id: 'usb-ports', label: 'พอร์ต USB' },
        
        // External Services
        { id: 'external-services', label: '🅿️ บริการและสิ่งอำนวยความสะดวกภายนอก', category: 'external' },
        { id: 'free-parking', label: 'ที่จอดรถฟรี' },
        { id: 'elevator', label: 'ลิฟต์' },
        { id: 'common-area', label: 'พื้นที่ส่วนกลาง (เช่น โถงพักผ่อน, ล็อบบี้)' },
        { id: 'security-system', label: 'กล้องวงจรปิด / ระบบรักษาความปลอดภัย' },
        
        // Food and Services
        { id: 'food-services', label: '☕ อาหารและบริการ', category: 'food' },
        { id: 'hotel-breakfast', label: 'อาหารเช้า' },
        { id: 'restaurant', label: 'มีร้านอาหารในที่พัก' },
        { id: 'room-service', label: 'รูมเซอร์วิส' },
        { id: 'free-water', label: 'น้ำดื่มฟรี' },
        { id: 'minibar', label: 'มินิบาร์' },
        
        // Others
        { id: 'hotel-others', label: '🧳 อื่น ๆ', category: 'hotel-others' },
        { id: '24h-reception', label: 'พนักงานต้อนรับ 24 ชม.' },
        { id: 'luggage-storage', label: 'บริการรับฝากกระเป๋า' },
        { id: 'housekeeping', label: 'บริการแม่บ้าน' },
        { id: 'pets-allowed-hotel', label: 'อนุญาตให้นำสัตว์เลี้ยงเข้าได้' },
        { id: 'disability-access', label: 'รองรับผู้พิการ (ทางลาด / ห้องน้ำ / ลิฟต์)' }
      ];
    }
    
    // Default amenities if no specific type is selected
    return [
      { id: 'toilet', label: 'Toilet' },
      { id: 'shower', label: 'Shower' },
      { id: 'wifi', label: 'Wifi' },
      { id: 'campfires', label: 'Campfires allowed' },
      { id: 'potable-water', label: 'Potable water' },
      { id: 'picnic-table', label: 'Picnic table' },
      { id: 'cooking-equipment', label: 'Cooking equipment' },
      { id: 'trash-bin', label: 'Trash bin' }
    ];
  };

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

  const amenitiesOptions = getAmenitiesOptions();
  const categorizedAmenities = amenitiesOptions.reduce((acc, amenity) => {
    const category = amenity.category || 'default';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(amenity);
    return acc;
  }, {} as Record<string, typeof amenitiesOptions>);

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
                    Show results
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
            <PopoverContent className="w-96 p-0 max-h-96 overflow-y-auto" align="start">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">สิ่งอำนวยความสะดวก</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setOpenPopover(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                
                {Object.entries(categorizedAmenities).map(([category, amenities]) => (
                  <div key={category} className="mb-4">
                    {amenities.map((amenity) => (
                      <div key={amenity.id} className="mb-3">
                        {amenity.category ? (
                          <h4 className="text-sm font-medium text-gray-700 mb-2">{amenity.label}</h4>
                        ) : (
                          <div className="flex items-center space-x-2">
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
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                <div className="flex justify-between mt-4">
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
                    Show results
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
