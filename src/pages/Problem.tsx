import { AlertTriangle, Flame, Activity, Wind, Users, Package } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';

const Problem = () => {
  const challenges = [
    {
      icon: Flame,
      title: 'Festival Health Surges',
      stat: '+45%',
      description: 'During Diwali, hospitals see 45% increase in burn injuries from firecrackers and diyas. Similar spikes occur during Holi (skin allergies), Eid (gastric issues), and other festivals.',
      examples: [
        'Diwali: Burns, respiratory issues, diabetes complications',
        'Holi: Skin allergies, eye infections, food poisoning',
        'Eid: Overeating complications, dehydration'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Activity,
      title: 'Diabetes & Cardiac Emergencies',
      stat: '+35%',
      description: 'Festival sweet consumption causes massive diabetes spikes. Gulab jamun has 70g sugar per 100g. Combined with stress and late nights, cardiac events increase 25%.',
      examples: [
        'Sweet shops report 300% sales spike before Diwali',
        'Last 3 Diwalis averaged 142 diabetes admissions vs 95 normal',
        'Uncontrolled diabetics make up 68% of emergency cases'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Wind,
      title: 'Pollution Spikes',
      stat: 'AQI 280+',
      description: 'Festival firecrackers push AQI from 180 (Poor) to 280+ (Very Poor), causing 40% surge in respiratory cases. Winter fog compounds the problem.',
      examples: [
        'Diwali AQI reaches hazardous levels',
        'Asthma, COPD admissions triple',
        'Fog reduces visibility, delays ambulances'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Resource Strain',
      stat: '3x Load',
      description: 'Hospitals unprepared for festival surges face 3x normal patient load. Staff shortages during celebrations compound the crisis.',
      examples: [
        'ICU beds fill to 95% capacity',
        'Staff unavailable due to festival leave',
        'Emergency wait times exceed 4 hours'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Package,
      title: 'Supply Chain Failures',
      stat: '60% Stock',
      description: 'Critical shortages of festival-specific supplies: insulin, burn dressings, cardiac drugs. Vendors closed during celebrations, delivery delays common.',
      examples: [
        'Insulin stock depletes faster than reorder',
        'Burn treatment supplies run out mid-festival',
        'Vendor delays due to festival holidays'
      ],
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full mb-6 border border-destructive/20">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Critical Healthcare Challenges</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="text-gradient">Festival Healthcare Crisis</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Indian hospitals face predictable yet devastating patient surges during festivals. 
            Without AI-powered preparation, lives are at risk and resources are wasted.
          </p>
        </section>

        {/* Main Problem Visual */}
        <Card className="p-8 mb-16 bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">The Reality</h2>
            <p className="text-xl text-muted-foreground">
              A typical hospital during Diwali weekend
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-background rounded-lg">
              <p className="text-5xl font-bold text-destructive mb-2">380</p>
              <p className="text-muted-foreground">Total Admissions</p>
              <p className="text-sm text-muted-foreground">(vs 240 normal day)</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg">
              <p className="text-5xl font-bold text-orange-500 mb-2">142</p>
              <p className="text-muted-foreground">Diabetes Cases</p>
              <p className="text-sm text-muted-foreground">(+38% increase)</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg">
              <p className="text-5xl font-bold text-yellow-500 mb-2">87</p>
              <p className="text-muted-foreground">Burn Injuries</p>
              <p className="text-sm text-muted-foreground">(+45% increase)</p>
            </div>
          </div>
        </Card>

        {/* Challenge Cards */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">5 Major Challenges</h2>
          
          <div className="space-y-8">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`flex-shrink-0 h-16 w-16 rounded-2xl bg-gradient-to-br ${challenge.color} flex items-center justify-center`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-bold">{challenge.title}</h3>
                        <span className={`text-2xl font-bold bg-gradient-to-r ${challenge.color} bg-clip-text text-transparent`}>
                          {challenge.stat}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 text-lg">
                        {challenge.description}
                      </p>
                      
                      <div className="space-y-2">
                        {challenge.examples.map((example, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                            <p className="text-sm text-muted-foreground">{example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Festival Timeline */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-festival/10 to-festival/5 border-festival/20">
            <h2 className="text-3xl font-bold mb-6 text-center">Annual Festival Impact Timeline</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <div className="text-center min-w-[100px]">
                  <p className="font-bold">Diwali</p>
                  <p className="text-sm text-muted-foreground">Oct-Nov</p>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{width: '85%'}} />
                </div>
                <p className="font-bold text-orange-500">+70%</p>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <div className="text-center min-w-[100px]">
                  <p className="font-bold">Holi</p>
                  <p className="text-sm text-muted-foreground">Feb-Mar</p>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" style={{width: '65%'}} />
                </div>
                <p className="font-bold text-pink-500">+50%</p>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                <div className="text-center min-w-[100px]">
                  <p className="font-bold">Eid</p>
                  <p className="text-sm text-muted-foreground">Variable</p>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full" style={{width: '55%'}} />
                </div>
                <p className="font-bold text-green-500">+40%</p>
              </div>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <Card className="p-12 text-center bg-gradient-to-br from-primary via-secondary to-accent text-white">
          <h2 className="text-4xl font-bold mb-4">The Solution Exists</h2>
          <p className="text-xl mb-6 text-white/90">
            AI-powered prediction and preparation can prevent this crisis
          </p>
          <a href="/solution">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-colors">
              Discover Our Solution
            </button>
          </a>
        </Card>
      </main>

      <Chatbot />
    </div>
  );
};

export default Problem;
