import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Activity, Calendar, TrendingUp, Shield, Sparkles, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import WeatherWidget from '@/components/WeatherWidget';
import Chatbot from '@/components/Chatbot';
import { getNextFestival } from '@/data/festivalData';

const Home = () => {
  const nextFestival = getNextFestival();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <section className="py-20 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl -z-10" />
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Powered by Single AI Agent</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">AI-Driven Readiness</span>
            <br />
            <span className="text-foreground">for India's Healthcare</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Predictive hospital management using festival health patterns, real-time pollution data, 
            and intelligent supply chain optimization to prepare for patient surges.
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Link to="/solution">
              <Button size="lg" className="gap-2">
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/problem">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Festival Countdown Card */}
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-festival/10 to-festival/5 border-festival/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="h-6 w-6 text-festival" />
              <h2 className="text-2xl font-bold">Next Festival Impact</h2>
            </div>
            <div className="mb-4">
              <p className="text-4xl font-bold text-festival mb-2">{nextFestival.name}</p>
              <p className="text-xl text-muted-foreground">
                {nextFestival.daysUntil} days away
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {nextFestival.healthImpacts.map((impact, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-festival">+{impact.increase}%</p>
                  <p className="text-sm text-muted-foreground">{impact.category.split(' ')[0]}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Core Capabilities</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Single AI Agent</h3>
              <p className="text-muted-foreground">
                One intelligent system managing all hospital operations - from predictions to supply chain to staff scheduling.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-festival/10 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-festival" />
              </div>
              <h3 className="text-xl font-bold mb-3">Festival Intelligence</h3>
              <p className="text-muted-foreground">
                Predicts health surges during festivals based on historical patterns, sweet consumption data, and cultural practices.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-Time Analytics</h3>
              <p className="text-muted-foreground">
                Live AQI monitoring, weather tracking, and environmental data analysis for accurate health impact predictions.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Supply Chain Optimization</h3>
              <p className="text-muted-foreground">
                Festival-aware inventory management automatically orders diabetes medications, burn supplies before celebrations.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 md:col-span-2">
              <WeatherWidget />
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <Card className="p-12 bg-gradient-to-br from-primary via-secondary to-accent text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Impact at a Glance</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold mb-2">15+</p>
                <p className="text-white/90">Festivals Tracked</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">85%</p>
                <p className="text-white/90">Prediction Accuracy</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">40%</p>
                <p className="text-white/90">Cost Reduction</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">24/7</p>
                <p className="text-white/90">AI Monitoring</p>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <Chatbot />
    </div>
  );
};

export default Home;
