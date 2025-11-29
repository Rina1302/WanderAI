import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, TrendingUp, Apple, Globe, FileText, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { 
  historicalDiwaliData, 
  predictedDiwali2025, 
  regionalFestivals, 
  advisories,
  normalDayComparison 
} from '@/data/historicalData';
import { festivals } from '@/data/festivalData';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const FestivalAnalysis = () => {
  const nextFestival = festivals[0]; // Diwali

  // Sweet consumption data
  const sweetData = nextFestival.popularFoods.map(food => ({
    name: food.name,
    sugar: parseInt(food.sugarContent),
    risk: food.risk === 'high' ? 90 : food.risk === 'medium' ? 60 : 30
  }));

  // Historical comparison data
  const comparisonData = historicalDiwaliData.map(year => ({
    year: year.year.toString(),
    admissions: year.totalAdmissions,
    diabetes: year.diabetesCases,
    burns: year.burnCases,
    respiratory: year.respiratoryCases,
    cardiac: year.cardiacCases,
    aqi: year.averageAQI
  }));

  // Add predicted 2025
  comparisonData.push({
    year: '2025 (Predicted)',
    admissions: predictedDiwali2025.totalAdmissions,
    diabetes: predictedDiwali2025.diabetesCases,
    burns: predictedDiwali2025.burnCases,
    respiratory: predictedDiwali2025.respiratoryCases,
    cardiac: predictedDiwali2025.cardiacCases,
    aqi: predictedDiwali2025.averageAQI
  });

  // Festival vs Normal day comparison
  const vsNormalData = [
    {
      category: 'Total Admissions',
      normal: normalDayComparison.totalAdmissions,
      festival: predictedDiwali2025.totalAdmissions
    },
    {
      category: 'Diabetes',
      normal: normalDayComparison.diabetesCases,
      festival: predictedDiwali2025.diabetesCases
    },
    {
      category: 'Burns',
      normal: normalDayComparison.burnCases,
      festival: predictedDiwali2025.burnCases
    },
    {
      category: 'Respiratory',
      normal: normalDayComparison.respiratoryCases,
      festival: predictedDiwali2025.respiratoryCases
    },
    {
      category: 'Cardiac',
      normal: normalDayComparison.cardiacCases,
      festival: predictedDiwali2025.cardiacCases
    }
  ];

  // Preparation effectiveness
  const preparationData = historicalDiwaliData.map(year => ({
    year: year.year.toString(),
    score: year.preparationScore,
    cost: year.costSpent / 100000
  }));

  preparationData.push({
    year: '2025',
    score: predictedDiwali2025.preparationScore,
    cost: predictedDiwali2025.costSpent / 100000
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-festival to-festival/60 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Festival Impact Analysis</h1>
              <p className="text-muted-foreground">Historical patterns and predictive insights</p>
            </div>
          </div>
        </section>

        {/* Sweet Consumption Tracker */}
        <section className="mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Apple className="h-5 w-5 text-destructive" />
              <h2 className="text-2xl font-bold">Sweet Consumption Impact Tracker</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Popular Diwali Sweets - Sugar Content</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sweetData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                    <YAxis label={{ value: 'Sugar (g per 100g)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="sugar" fill="hsl(var(--destructive))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Health Risk Level by Sweet</h3>
                <div className="space-y-4">
                  {nextFestival.popularFoods.map((food, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium">{food.name}</p>
                        <p className="text-sm text-muted-foreground">{food.sugarContent}</p>
                      </div>
                      <Badge variant={food.risk === 'high' ? 'destructive' : food.risk === 'medium' ? 'secondary' : 'default'}>
                        {food.risk.toUpperCase()}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
                  <p className="text-sm font-medium text-destructive flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    Recommendation for Diabetics
                  </p>
                  <p className="text-sm mt-2">Limit to 1-2 small pieces maximum. Check blood sugar levels before and after consumption.</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Historical Comparison */}
        <section className="mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Historical Festival Data (2022-2025)</h2>
            </div>
            
            <div className="mb-6">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="admissions" stroke="hsl(var(--primary))" strokeWidth={2} name="Total Admissions" />
                  <Line type="monotone" dataKey="diabetes" stroke="hsl(var(--destructive))" strokeWidth={2} name="Diabetes Cases" />
                  <Line type="monotone" dataKey="burns" stroke="hsl(280 70% 60%)" strokeWidth={2} name="Burn Cases" />
                  <Line type="monotone" dataKey="respiratory" stroke="hsl(var(--secondary))" strokeWidth={2} name="Respiratory" />
                  <Line type="monotone" dataKey="cardiac" stroke="hsl(var(--accent))" strokeWidth={2} name="Cardiac" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 bg-primary/5 border-primary/20">
                <p className="text-sm text-muted-foreground">Avg Annual Increase</p>
                <p className="text-2xl font-bold text-primary">+2.8%</p>
              </Card>
              <Card className="p-4 bg-destructive/5 border-destructive/20">
                <p className="text-sm text-muted-foreground">Diabetes Trend</p>
                <p className="text-2xl font-bold text-destructive">+3.2%</p>
              </Card>
              <Card className="p-4 bg-secondary/5 border-secondary/20">
                <p className="text-sm text-muted-foreground">AQI Impact</p>
                <p className="text-2xl font-bold text-secondary">+12%</p>
              </Card>
              <Card className="p-4 bg-accent/5 border-accent/20">
                <p className="text-sm text-muted-foreground">Preparation Score</p>
                <p className="text-2xl font-bold text-accent">85%</p>
              </Card>
            </div>
          </Card>
        </section>

        {/* Festival vs Normal Day */}
        <section className="mb-12">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Festival vs Normal Day Comparison</h2>
            
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={vsNormalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="normal" fill="hsl(var(--muted-foreground))" name="Normal Day" />
                <Bar dataKey="festival" fill="hsl(var(--festival))" name="Festival Day (Diwali)" />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Average Stay Duration</p>
                <p className="text-lg font-bold">Normal: 2.3 days | Festival: 3.1 days</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Cost per Patient</p>
                <p className="text-lg font-bold">Normal: ₹18,500 | Festival: ₹24,800</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">ICU Utilization</p>
                <p className="text-lg font-bold">Normal: 68% | Festival: 95%</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Regional Festival Variations */}
        <section className="mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="h-5 w-5 text-secondary" />
              <h2 className="text-2xl font-bold">Regional Festival Variations</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {regionalFestivals.map((region, index) => (
                <Card key={index} className="p-4 bg-muted/50">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {region.region}
                  </h3>
                  <div className="space-y-3">
                    {region.festivals.map((festival, fIndex) => (
                      <div key={fIndex} className="p-3 bg-background rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-semibold">{festival.name}</p>
                          <Badge>{festival.month}</Badge>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="h-4 w-4 text-destructive" />
                          <span className="text-sm font-medium text-destructive">+{festival.expectedIncrease}% increase</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {festival.healthRisks.map((risk, rIndex) => (
                            <Badge key={rIndex} variant="outline" className="text-xs">
                              {risk}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </section>

        {/* Preventive Advisory Archive */}
        <section className="mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Preventive Advisory Archive</h2>
            </div>
            
            <div className="space-y-4">
              {advisories.map((advisory) => (
                <Card key={advisory.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline">{advisory.festival}</Badge>
                        <Badge>{advisory.language === 'en' ? 'English' : 'Hindi'}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {advisory.date.toLocaleDateString('en-IN')}
                        </span>
                      </div>
                      <h3 className="font-bold mb-2">{advisory.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{advisory.content}</p>
                      
                      <div className="flex gap-6 text-sm">
                        <div>
                          <span className="text-muted-foreground">Reach: </span>
                          <span className="font-semibold">{advisory.reach.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Effectiveness: </span>
                          <span className="font-semibold text-accent">{advisory.effectiveness}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-3xl font-bold text-primary">165K</p>
                <p className="text-sm text-muted-foreground">Total Reach</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-3xl font-bold text-accent">84%</p>
                <p className="text-sm text-muted-foreground">Avg Effectiveness</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-3xl font-bold text-secondary">12%</p>
                <p className="text-sm text-muted-foreground">Cases Prevented</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-3xl font-bold text-festival">2</p>
                <p className="text-sm text-muted-foreground">Languages</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Preparation Effectiveness */}
        <section>
          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <h2 className="text-2xl font-bold mb-6">Year-over-Year Improvement</h2>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={preparationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="score" stroke="hsl(var(--accent))" strokeWidth={3} name="Preparation Score (%)" />
                <Line yAxisId="right" type="monotone" dataKey="cost" stroke="hsl(var(--primary))" strokeWidth={2} name="Cost (₹ Lakhs)" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-6 p-4 bg-background rounded-lg">
              <p className="font-semibold text-accent mb-2">Key Insights</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5" />
                  <span>Preparation score improved from 65% (2022) to 85% (2025) through AI-powered planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5" />
                  <span>Cost reduction of 14% despite better preparation due to optimized inventory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5" />
                  <span>Predictive accuracy increased from 72% to 85% as AI learns from historical patterns</span>
                </li>
              </ul>
            </div>
          </Card>
        </section>
      </main>

      <Chatbot />
    </div>
  );
};

export default FestivalAnalysis;
