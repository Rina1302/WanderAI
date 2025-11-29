import { Cloud, Wind, Droplets } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { getCurrentWeather } from '@/data/festivalData';

const WeatherWidget = () => {
  const weather = getCurrentWeather();

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return 'text-green-600';
    if (aqi <= 100) return 'text-yellow-600';
    if (aqi <= 150) return 'text-orange-500';
    if (aqi <= 200) return 'text-red-500';
    return 'text-purple-600';
  };

  return (
    <Card className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm text-muted-foreground">Live Data</h3>
        <Cloud className="h-5 w-5 text-primary" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm">Temperature</span>
          <span className="font-bold text-lg">{weather.temperature}°C</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">AQI</span>
          <span className={`font-bold text-lg ${getAQIColor(weather.aqi)}`}>
            {weather.aqi} ({weather.aqiLevel})
          </span>
        </div>

        <div className="flex items-center justify-between">
          <Wind className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{weather.visibility}m visibility</span>
        </div>

        <div className="flex items-center justify-between">
          <Droplets className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{weather.humidity}% humidity</span>
        </div>

        <div className="pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground">{weather.location}</p>
        </div>
      </div>
    </Card>
  );
};

export default WeatherWidget;
