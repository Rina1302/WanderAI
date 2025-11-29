export interface Festival {
  id: string;
  name: string;
  date: Date;
  daysUntil: number;
  healthImpacts: {
    category: string;
    increase: number;
    description: string;
    icon: string;
  }[];
  popularFoods: {
    name: string;
    sugarContent: string;
    risk: 'high' | 'medium' | 'low';
  }[];
  recommendations: string[];
}

export const festivals: Festival[] = [
  {
    id: 'diwali',
    name: 'Diwali',
    date: new Date('2025-10-20'),
    daysUntil: 0,
    healthImpacts: [
      {
        category: 'Diabetes Complications',
        increase: 35,
        description: 'Excessive sweet consumption leads to blood sugar spikes',
        icon: 'activity'
      },
      {
        category: 'Burns & Fire Injuries',
        increase: 45,
        description: 'Firecracker accidents and diya-related burns',
        icon: 'flame'
      },
      {
        category: 'Respiratory Issues',
        increase: 40,
        description: 'Firecracker smoke causing AQI spike to 280+',
        icon: 'wind'
      },
      {
        category: 'Cardiac Events',
        increase: 25,
        description: 'High sugar + stress + late nights increase heart risk',
        icon: 'heart-pulse'
      }
    ],
    popularFoods: [
      { name: 'Gulab Jamun', sugarContent: '70g per 100g', risk: 'high' },
      { name: 'Jalebi', sugarContent: '50g per 100g', risk: 'high' },
      { name: 'Barfi', sugarContent: '40g per 100g', risk: 'medium' },
      { name: 'Kaju Katli', sugarContent: '45g per 100g', risk: 'medium' }
    ],
    recommendations: [
      'Limit sweets to 2-3 small pieces per day',
      'Choose baked items over fried',
      'Maintain 5-meter distance from firecrackers',
      'Wear N95 masks in high pollution areas',
      'Keep diabetes medications handy'
    ]
  },
  {
    id: 'holi',
    name: 'Holi',
    date: new Date('2026-03-14'),
    daysUntil: 0,
    healthImpacts: [
      {
        category: 'Skin Allergies',
        increase: 50,
        description: 'Chemical colors causing severe skin reactions',
        icon: 'droplet'
      },
      {
        category: 'Eye Infections',
        increase: 40,
        description: 'Colors entering eyes leading to infections',
        icon: 'eye'
      },
      {
        category: 'Gastric Issues',
        increase: 30,
        description: 'Fried foods and contaminated food causing problems',
        icon: 'pizza'
      }
    ],
    popularFoods: [
      { name: 'Gujiya', sugarContent: '38g per 100g', risk: 'medium' },
      { name: 'Thandai', sugarContent: '35g per 100g', risk: 'medium' },
      { name: 'Pakoras', sugarContent: '15g per 100g', risk: 'low' }
    ],
    recommendations: [
      'Use natural/herbal colors only',
      'Apply coconut oil before playing Holi',
      'Protect eyes with sunglasses',
      'Stay hydrated',
      'Avoid chemical colors'
    ]
  },
  {
    id: 'eid',
    name: 'Eid',
    date: new Date('2025-04-03'),
    daysUntil: 0,
    healthImpacts: [
      {
        category: 'Gastric Problems',
        increase: 40,
        description: 'Heavy meat dishes and overeating',
        icon: 'pizza'
      },
      {
        category: 'Diabetes Spikes',
        increase: 30,
        description: 'Excessive consumption of dates and sweet dishes',
        icon: 'activity'
      }
    ],
    popularFoods: [
      { name: 'Dates', sugarContent: '65g per 100g', risk: 'high' },
      { name: 'Seviyan', sugarContent: '45g per 100g', risk: 'medium' },
      { name: 'Biryani', sugarContent: '20g per 100g', risk: 'low' }
    ],
    recommendations: [
      'Moderate portion sizes',
      'Stay hydrated during fasting',
      'Break fast gradually',
      'Monitor blood sugar levels'
    ]
  }
];

// Calculate days until festival
festivals.forEach(festival => {
  const today = new Date();
  const timeDiff = festival.date.getTime() - today.getTime();
  festival.daysUntil = Math.ceil(timeDiff / (1000 * 3600 * 24));
});

export const getNextFestival = (): Festival => {
  const upcoming = festivals.filter(f => f.daysUntil >= 0).sort((a, b) => a.daysUntil - b.daysUntil);
  return upcoming[0] || festivals[0];
};

export const getCurrentWeather = () => ({
  location: 'Chennai, Tamil Nadu',
  temperature: 28,
  aqi: 180,
  aqiLevel: 'Poor',
  visibility: 1200,
  humidity: 75,
  condition: 'Partly Cloudy'
});
