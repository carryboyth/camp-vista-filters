import { Tent, Car, Home } from 'lucide-react';

export const campingStyles = [
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

export const getAmenitiesOptions = (selectedTypes: string[]) => {
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
