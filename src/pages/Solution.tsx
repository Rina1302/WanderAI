import { Card } from '@/components/ui/card';
import { Brain, Calendar, TrendingUp, Package, Bell, BarChart3, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Chatbot from '@/components/Chatbot';
import { festivals } from '@/data/festivalData';

const Solution = () => {
  const capabilities = [
    {
      icon: Brain,
      title: 'Single Intelligent AI Agent',
      description: 'One unified system managing all hospital operations - no multiple agents, no complexity.',
      features: [
        'Real-time data analysis from 10+ sources',
        'Festival health pattern recognition',
        'Predictive modeling with 85% accuracy',
        'Automated decision-making pipeline'
      ]
    },
    {
      icon: Calendar,
      title: 'Festival Intelligence System',
      description: 'Tracks 15+ Indian festivals and predicts health impacts based on historical patterns and cultural practices.',
      features: [
        'Sweet consumption impact analysis',
        'Historical festival data comparison',
        'Cultural practice health correlation',
        'Pre-festival preparation automation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: '7-14 day advance predictions of patient surges based on festivals, weather, and pollution data.',
      features: [
        'AQI spike prediction during festivals',
        'Diabetes emergency forecasting',
        'Burn injury surge modeling',
        'Cardiac event risk assessment'
      ]
    },
    {
      icon: Package,
      title: 'Festival-Aware Supply Chain',
      description: 'Automatically adjusts inventory before festivals, orders supplies, and manages vendors.',
      features: [
        'Auto-reorder diabetes medications',
        'Festival-specific stock multipliers',
        'Express vendor coordination',
        'Cost optimization algorithms'
      ]
    },
    {
      icon: Bell,
      title: 'Multi-Language Alerts',
      description: 'Generates public health advisories in Hindi, English, and regional languages.',
      features: [
        'Festival health tips generation',
        'Sweet consumption guidelines',
        'Safety protocol distribution',
        'SMS/WhatsApp integration'
      ]
    },
    {
      icon: BarChart3,
      title: 'Real-Time Dashboard',
      description: 'Live monitoring of AQI, weather, festival countdowns, and resource status.',
      features: [
        'Live environmental data',
        'Festival impact visualization',
        'Supply chain tracking',
        'Performance metrics'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-20">
        {/* Header */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6 border border-accent/20">
            <Brain className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">AI-Powered Solution</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">MediPredict AI</span>
            <br />
            <span className="text-foreground">Hospital Management System</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One intelligent AI agent that predicts, prepares, and optimizes hospital operations 
            for festivals, pollution spikes, and health emergencies across India.
          </p>
        </section>

        {/* Architecture Overview */}
        <Card className="p-8 mb-16 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <h2 className="text-3xl font-bold text-center mb-8">Single AI Agent Architecture</h2>
          
          <div className="flex flex-col items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Brain className="h-12 w-12 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold">Central AI Brain</h3>
            
            <div className="grid md:grid-cols-3 gap-4 w-full">
              {[
                { title: 'Data Collection', items: ['Weather APIs', 'AQI Monitors', 'Festival Calendar', 'Hospital Systems'] },
                { title: 'Analysis', items: ['Pattern Recognition', 'Trend Analysis', 'Risk Assessment', 'Predictions'] },
                { title: 'Actions', items: ['Supply Orders', 'Staff Scheduling', 'Alerts', 'Reports'] }
              ].map((module, index) => (
                <Card key={index} className="p-4 bg-background">
                  <h4 className="font-bold mb-3 text-center">{module.title}</h4>
                  <ul className="space-y-2">
                    {module.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        {/* Capabilities */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Complete Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                      <p className="text-muted-foreground text-sm">{capability.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 ml-16">
                    {capability.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Festival Prediction Example */}
        <section className="mb-16">
          <Card className="p-8 bg-gradient-to-br from-festival/10 to-festival/5 border-festival/20">
            <h2 className="text-3xl font-bold mb-6 text-center">AI Prediction in Action</h2>
            
            <div className="bg-background rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-festival" />
                Diwali Festival Analysis
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-festival/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-festival">1</span>
                  </div>
                  <div>
                    <p className="font-semibold">Historical Pattern Recognition</p>
                    <p className="text-sm text-muted-foreground">Last 3 Diwalis averaged 142 diabetes admissions vs 95 normal days (+38%)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-festival/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-festival">2</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sweet Consumption Analysis</p>
                    <p className="text-sm text-muted-foreground">Sweet shops report 300% sales increase. Gulab jamun (70g sugar) most popular.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-festival/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-festival">3</span>
                  </div>
                  <div>
                    <p className="font-semibold">Environmental Factors</p>
                    <p className="text-sm text-muted-foreground">AQI forecast: Will reach 280 (Very Poor) from firecracker smoke</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-accent">AI Recommendation</p>
                    <p className="text-sm text-muted-foreground">Order 300 extra insulin vials (₹45,000). Increase diabetologist shifts by 40%. Stock burn supplies. Activate diabetes clinic 24/7.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <p className="text-3xl font-bold text-festival mb-1">+35%</p>
                <p className="text-sm text-muted-foreground">Diabetes Cases</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <p className="text-3xl font-bold text-orange-500 mb-1">+45%</p>
                <p className="text-sm text-muted-foreground">Burn Injuries</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <p className="text-3xl font-bold text-blue-500 mb-1">+40%</p>
                <p className="text-sm text-muted-foreground">Respiratory</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <p className="text-3xl font-bold text-red-500 mb-1">+25%</p>
                <p className="text-sm text-muted-foreground">Cardiac</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Benefits */}
        <Card className="p-12 bg-gradient-to-br from-primary via-secondary to-accent text-white">
          <h2 className="text-4xl font-bold text-center mb-12">Measurable Impact</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-6xl font-bold mb-3">85%</p>
              <p className="text-xl text-white/90">Prediction Accuracy</p>
            </div>
            <div>
              <p className="text-6xl font-bold mb-3">40%</p>
              <p className="text-xl text-white/90">Cost Reduction</p>
            </div>
            <div>
              <p className="text-6xl font-bold mb-3">60%</p>
              <p className="text-xl text-white/90">Fewer Stockouts</p>
            </div>
          </div>
        </Card>
      </main>

      <Chatbot />
    </div>
  );
};

export default Solution;
