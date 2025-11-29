export interface HistoricalFestivalData {
  year: number;
  festival: string;
  totalAdmissions: number;
  diabetesCases: number;
  burnCases: number;
  respiratoryCases: number;
  cardiacCases: number;
  averageAQI: number;
  preparationScore: number;
  costSpent: number;
}

export interface RegionalFestival {
  region: string;
  festivals: {
    name: string;
    month: string;
    healthRisks: string[];
    expectedIncrease: number;
  }[];
}

export interface Advisory {
  id: string;
  festival: string;
  date: Date;
  title: string;
  content: string;
  language: 'en' | 'hi';
  reach: number;
  effectiveness: number;
}

export const historicalDiwaliData: HistoricalFestivalData[] = [
  {
    year: 2022,
    festival: 'Diwali',
    totalAdmissions: 365,
    diabetesCases: 138,
    burnCases: 82,
    respiratoryCases: 89,
    cardiacCases: 16,
    averageAQI: 240,
    preparationScore: 65,
    costSpent: 1850000
  },
  {
    year: 2023,
    festival: 'Diwali',
    totalAdmissions: 380,
    diabetesCases: 142,
    burnCases: 87,
    respiratoryCases: 95,
    cardiacCases: 18,
    averageAQI: 265,
    preparationScore: 72,
    costSpent: 1920000
  },
  {
    year: 2024,
    festival: 'Diwali',
    totalAdmissions: 372,
    diabetesCases: 140,
    burnCases: 85,
    respiratoryCases: 92,
    cardiacCases: 17,
    averageAQI: 255,
    preparationScore: 78,
    costSpent: 1780000
  }
];

export const predictedDiwali2025: HistoricalFestivalData = {
  year: 2025,
  festival: 'Diwali',
  totalAdmissions: 410,
  diabetesCases: 155,
  burnCases: 98,
  respiratoryCases: 105,
  cardiacCases: 22,
  averageAQI: 280,
  preparationScore: 85,
  costSpent: 1650000
};

export const regionalFestivals: RegionalFestival[] = [
  {
    region: 'South India',
    festivals: [
      {
        name: 'Pongal',
        month: 'January',
        healthRisks: ['Burns (cooking)', 'Diabetes (sweets)', 'Kite injuries'],
        expectedIncrease: 35
      },
      {
        name: 'Onam',
        month: 'August-September',
        healthRisks: ['Overeating (Sadya)', 'Gastric issues', 'Alcohol-related'],
        expectedIncrease: 45
      }
    ]
  },
  {
    region: 'North India',
    festivals: [
      {
        name: 'Lohri',
        month: 'January',
        healthRisks: ['Burns (bonfire)', 'Cold exposure', 'Food poisoning'],
        expectedIncrease: 25
      },
      {
        name: 'Holi',
        month: 'February-March',
        healthRisks: ['Skin allergies', 'Eye infections', 'Gastric issues'],
        expectedIncrease: 50
      },
      {
        name: 'Diwali',
        month: 'October-November',
        healthRisks: ['Burns', 'Diabetes', 'Respiratory', 'Cardiac'],
        expectedIncrease: 70
      }
    ]
  },
  {
    region: 'East India',
    festivals: [
      {
        name: 'Durga Puja',
        month: 'September-October',
        healthRisks: ['Exhaustion', 'Food poisoning', 'Crowd injuries'],
        expectedIncrease: 40
      },
      {
        name: 'Rath Yatra',
        month: 'June-July',
        healthRisks: ['Heat stroke', 'Dehydration', 'Crowd injuries'],
        expectedIncrease: 30
      }
    ]
  },
  {
    region: 'West India',
    festivals: [
      {
        name: 'Ganesh Chaturthi',
        month: 'August-September',
        healthRisks: ['Drowning (visarjan)', 'Food poisoning', 'Diabetes'],
        expectedIncrease: 35
      },
      {
        name: 'Navratri',
        month: 'September-October',
        healthRisks: ['Exhaustion (garba)', 'Dehydration', 'Foot injuries'],
        expectedIncrease: 45
      }
    ]
  }
];

export const advisories: Advisory[] = [
  {
    id: 'ADV001',
    festival: 'Diwali',
    date: new Date('2024-10-15'),
    title: 'Healthy Diwali Tips',
    content: 'Limit sweets to 2-3 pieces per day. Choose baked over fried items. Maintain distance from firecrackers.',
    language: 'en',
    reach: 50000,
    effectiveness: 88
  },
  {
    id: 'ADV002',
    festival: 'Diwali',
    date: new Date('2024-10-15'),
    title: 'स्वस्थ दिवाली सुझाव',
    content: 'दिन में केवल 2-3 मिठाई के टुकड़े लें। तले हुए की जगह बेक किए गए आइटम चुनें। पटाखों से दूरी बनाए रखें।',
    language: 'hi',
    reach: 35000,
    effectiveness: 85
  },
  {
    id: 'ADV003',
    festival: 'Holi',
    date: new Date('2024-03-10'),
    title: 'Safe Holi Celebration',
    content: 'Use natural colors only. Apply coconut oil before playing. Protect eyes with sunglasses.',
    language: 'en',
    reach: 42000,
    effectiveness: 82
  },
  {
    id: 'ADV004',
    festival: 'Navratri',
    date: new Date('2024-09-28'),
    title: 'Navratri Health Guide',
    content: 'Stay hydrated during fasting. Take breaks during garba. Wear comfortable footwear.',
    language: 'en',
    reach: 38000,
    effectiveness: 79
  }
];

export const normalDayComparison = {
  totalAdmissions: 240,
  diabetesCases: 95,
  burnCases: 10,
  respiratoryCases: 65,
  cardiacCases: 14,
  averageAQI: 180
};
