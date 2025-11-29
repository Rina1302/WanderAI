export interface InventoryItem {
  id: string;
  name: string;
  category: 'diabetes' | 'cardiac' | 'burn' | 'respiratory' | 'general';
  currentStock: number;
  normalThreshold: number;
  festivalThreshold: number;
  unit: string;
  expiryDays?: number;
  cost: number;
  isFestivalCritical: boolean;
}

export interface Vendor {
  id: string;
  name: string;
  rating: number;
  avgDeliveryDays: number;
  festivalExpress: boolean;
  festivalPricing: number; // percentage markup
  specialties: string[];
  contact: string;
}

export interface Order {
  id: string;
  itemName: string;
  quantity: number;
  vendor: string;
  status: 'pending' | 'in-transit' | 'delivered' | 'delayed';
  orderDate: Date;
  expectedDelivery: Date;
  isFestivalOrder: boolean;
  totalCost: number;
}

export const inventoryItems: InventoryItem[] = [
  {
    id: 'insulin',
    name: 'Insulin Vials',
    category: 'diabetes',
    currentStock: 450,
    normalThreshold: 200,
    festivalThreshold: 500,
    unit: 'vials',
    expiryDays: 45,
    cost: 150,
    isFestivalCritical: true
  },
  {
    id: 'metformin',
    name: 'Metformin Tablets',
    category: 'diabetes',
    currentStock: 2000,
    normalThreshold: 1000,
    festivalThreshold: 3500,
    unit: 'tablets',
    expiryDays: 90,
    cost: 5,
    isFestivalCritical: true
  },
  {
    id: 'glucose-monitors',
    name: 'Glucose Monitors',
    category: 'diabetes',
    currentStock: 120,
    normalThreshold: 50,
    festivalThreshold: 200,
    unit: 'units',
    cost: 800,
    isFestivalCritical: true
  },
  {
    id: 'burn-dressing',
    name: 'Burn Dressings',
    category: 'burn',
    currentStock: 500,
    normalThreshold: 200,
    festivalThreshold: 800,
    unit: 'units',
    expiryDays: 120,
    cost: 120,
    isFestivalCritical: true
  },
  {
    id: 'silver-sulfadiazine',
    name: 'Silver Sulfadiazine Cream',
    category: 'burn',
    currentStock: 350,
    normalThreshold: 150,
    festivalThreshold: 600,
    unit: 'tubes',
    expiryDays: 180,
    cost: 85,
    isFestivalCritical: true
  },
  {
    id: 'aspirin',
    name: 'Aspirin',
    category: 'cardiac',
    currentStock: 3000,
    normalThreshold: 1500,
    festivalThreshold: 4000,
    unit: 'tablets',
    expiryDays: 365,
    cost: 2,
    isFestivalCritical: true
  },
  {
    id: 'nitroglycerin',
    name: 'Nitroglycerin Spray',
    category: 'cardiac',
    currentStock: 200,
    normalThreshold: 100,
    festivalThreshold: 250,
    unit: 'sprays',
    expiryDays: 60,
    cost: 450,
    isFestivalCritical: true
  },
  {
    id: 'inhalers',
    name: 'Albuterol Inhalers',
    category: 'respiratory',
    currentStock: 280,
    normalThreshold: 150,
    festivalThreshold: 400,
    unit: 'units',
    expiryDays: 180,
    cost: 180,
    isFestivalCritical: true
  },
  {
    id: 'nebulizers',
    name: 'Nebulizer Solution',
    category: 'respiratory',
    currentStock: 450,
    normalThreshold: 200,
    festivalThreshold: 650,
    unit: 'vials',
    expiryDays: 90,
    cost: 45,
    isFestivalCritical: true
  },
  {
    id: 'oxygen',
    name: 'Oxygen Cylinders',
    category: 'respiratory',
    currentStock: 850,
    normalThreshold: 200,
    festivalThreshold: 1000,
    unit: 'cylinders',
    cost: 800,
    isFestivalCritical: true
  },
  {
    id: 'ppe',
    name: 'PPE Kits',
    category: 'general',
    currentStock: 1200,
    normalThreshold: 500,
    festivalThreshold: 1500,
    unit: 'kits',
    cost: 120,
    isFestivalCritical: false
  },
  {
    id: 'masks',
    name: 'N95 Masks',
    category: 'general',
    currentStock: 5000,
    normalThreshold: 2000,
    festivalThreshold: 7000,
    unit: 'units',
    cost: 15,
    isFestivalCritical: true
  }
];

export const vendors: Vendor[] = [
  {
    id: 'medsupply',
    name: 'MedSupply Co.',
    rating: 4.5,
    avgDeliveryDays: 2,
    festivalExpress: true,
    festivalPricing: 10,
    specialties: ['PPE', 'Oxygen', 'General Supplies'],
    contact: '+91 9876543210'
  },
  {
    id: 'pharmacare',
    name: 'PharmaCare Ltd.',
    rating: 4.2,
    avgDeliveryDays: 3,
    festivalExpress: false,
    festivalPricing: 15,
    specialties: ['Medicines', 'Tablets'],
    contact: '+91 9876543211'
  },
  {
    id: 'biomed',
    name: 'BioMed Solutions',
    rating: 4.8,
    avgDeliveryDays: 5,
    festivalExpress: false,
    festivalPricing: 5,
    specialties: ['Equipment', 'Monitors'],
    contact: '+91 9876543212'
  },
  {
    id: 'diabetescare',
    name: 'DiabetesCare Plus',
    rating: 4.7,
    avgDeliveryDays: 2,
    festivalExpress: true,
    festivalPricing: 12,
    specialties: ['Insulin', 'Diabetes Supplies'],
    contact: '+91 9876543213'
  },
  {
    id: 'burncare',
    name: 'BurnCare Specialists',
    rating: 4.6,
    avgDeliveryDays: 3,
    festivalExpress: true,
    festivalPricing: 8,
    specialties: ['Burn Treatment', 'Wound Care'],
    contact: '+91 9876543214'
  }
];

export const orders: Order[] = [
  {
    id: 'ORD001',
    itemName: 'Insulin Vials',
    quantity: 300,
    vendor: 'DiabetesCare Plus',
    status: 'in-transit',
    orderDate: new Date('2025-11-26'),
    expectedDelivery: new Date('2025-11-28'),
    isFestivalOrder: true,
    totalCost: 45000
  },
  {
    id: 'ORD002',
    itemName: 'Burn Dressings',
    quantity: 300,
    vendor: 'BurnCare Specialists',
    status: 'pending',
    orderDate: new Date('2025-11-27'),
    expectedDelivery: new Date('2025-11-30'),
    isFestivalOrder: true,
    totalCost: 36000
  },
  {
    id: 'ORD003',
    itemName: 'N95 Masks',
    quantity: 2000,
    vendor: 'MedSupply Co.',
    status: 'in-transit',
    orderDate: new Date('2025-11-25'),
    expectedDelivery: new Date('2025-11-27'),
    isFestivalOrder: true,
    totalCost: 30000
  },
  {
    id: 'ORD004',
    itemName: 'Nitroglycerin Spray',
    quantity: 50,
    vendor: 'PharmaCare Ltd.',
    status: 'delayed',
    orderDate: new Date('2025-11-24'),
    expectedDelivery: new Date('2025-11-27'),
    isFestivalOrder: true,
    totalCost: 22500
  },
  {
    id: 'ORD005',
    itemName: 'Albuterol Inhalers',
    quantity: 120,
    vendor: 'PharmaCare Ltd.',
    status: 'delivered',
    orderDate: new Date('2025-11-20'),
    expectedDelivery: new Date('2025-11-23'),
    isFestivalOrder: true,
    totalCost: 21600
  }
];

export const getStockPercentage = (item: InventoryItem, isFestivalSeason: boolean): number => {
  const threshold = isFestivalSeason ? item.festivalThreshold : item.normalThreshold;
  return (item.currentStock / threshold) * 100;
};

export const getStockStatus = (percentage: number): 'safe' | 'low' | 'critical' => {
  if (percentage >= 80) return 'safe';
  if (percentage >= 50) return 'low';
  return 'critical';
};
