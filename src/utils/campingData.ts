
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
      { id: 'electricity-hookups', label: 'Electricity hookups' },
      { id: '15-amp', label: 'รองรับไฟฟ้า 15 amp' },
      { id: '30-amp', label: 'รองรับไฟฟ้า 30 amp' },
      { id: '50-amp', label: 'รองรับไฟฟ้า 50 amp' },
      { id: 'water-system', label: 'ระบบน้ำประปา' },
      { id: 'dump-station', label: 'มีจุดทิ้งของเสีย (Dump Station)' },
      { id: 'pull-through', label: 'พื้นที่จอดแบบ ไม่ต้องถอยหลัง' },
      { id: 'back-in', label: 'พื้นที่จอดแบบต้องถอยเข้าจอด' },
      { id: 'slide-out', label: 'รองรับ Slide-out' },
      { id: 'big-rig', label: 'รองรับรถยาวมากกว่า 10 เมตร' },
      { id: 'level-site', label: 'ลานจอดพื้นเรียบ' },
      { id: 'toilet-rv', label: 'ห้องน้ำ' },
      { id: 'shower-rv', label: 'ห้องอาบน้ำ' },
      { id: 'dish-washing', label: 'จุดล้างจาน' },
      { id: 'trash-nearby', label: 'ถังขยะใกล้จุดจอด' },
      { id: 'security-camera', label: 'กล้องวงจรปิด / ไฟส่องสว่าง' },
      { id: 'wifi-rv', label: 'มี Wi-Fi' },
      { id: 'cell-signal', label: 'มีสัญญาณโทรศัพท์มือถือ' },
      { id: 'near-services', label: 'ใกล้ร้านค้า / จุดให้บริการ' },
      { id: 'fire-picnic', label: 'มีพื้นที่ก่อไฟ / ปิกนิก' }
    ];
  }
  
  // If hotel is selected
  if (selectedTypes.includes('hotel')) {
    return [
      { id: 'bed-options', label: 'เตียงเดี่ยว / เตียงคู่' },
      { id: 'bedding-complete', label: 'เครื่องนอนครบ' },
      { id: 'air-conditioning', label: 'แอร์ / พัดลม' },
      { id: 'television', label: 'ทีวี' },
      { id: 'refrigerator', label: 'ตู้เย็น' },
      { id: 'kettle-coffee', label: 'กาน้ำร้อน / เครื่องชงกาแฟ' },
      { id: 'microwave', label: 'ไมโครเวฟ' },
      { id: 'work-desk', label: 'โต๊ะทำงาน' },
      { id: 'wardrobe', label: 'ตู้เสื้อผ้า' },
      { id: 'balcony-view', label: 'ระเบียง / วิวธรรมชาติ' },
      { id: 'private-bathroom', label: 'ห้องน้ำในตัว' },
      { id: 'water-heater', label: 'เครื่องทำน้ำอุ่น' },
      { id: 'bathtub', label: 'อ่างอาบน้ำ' },
      { id: 'towels', label: 'ผ้าเช็ดตัว' },
      { id: 'toiletries', label: 'สบู่ / แชมพู / ของใช้ในห้องน้ำ' },
      { id: 'hotel-wifi', label: 'Wi-Fi' },
      { id: 'power-outlets', label: 'ปลั๊กไฟ' },
      { id: 'free-parking', label: 'ที่จอดรถฟรี' },
      { id: 'elevator', label: 'ลิฟต์' },
      { id: 'common-area', label: 'พื้นที่ส่วนกลาง' },
      { id: 'security-system', label: 'ระบบรักษาความปลอดภัย' },
      { id: 'hotel-breakfast', label: 'อาหารเช้า' },
      { id: 'restaurant', label: 'มีร้านอาหารในที่พัก' },
      { id: 'room-service', label: 'รูมเซอร์วิส' },
      { id: 'free-water', label: 'น้ำดื่มฟรี' },
      { id: 'minibar', label: 'มินิบาร์' },
      { id: '24h-reception', label: 'พนักงานต้อนรับ 24 ชม.' },
      { id: 'luggage-storage', label: 'บริการรับฝากกระเป๋า' },
      { id: 'housekeeping', label: 'บริการแม่บ้าน' },
      { id: 'disability-access', label: 'รองรับผู้พิการ' }
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
