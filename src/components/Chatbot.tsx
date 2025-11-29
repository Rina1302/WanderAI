import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { getNextFestival, getCurrentWeather } from '@/data/festivalData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI health assistant. I can help you understand festival health impacts, current AQI, and health recommendations. How can I assist you today?'
    }
  ]);
  const [input, setInput] = useState('');

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    const nextFestival = getNextFestival();
    const weather = getCurrentWeather();

    // Festival-specific responses
    if (lowerMessage.includes('aqi') || lowerMessage.includes('air quality')) {
      return `The current AQI in ${weather.location} is ${weather.aqi} (${weather.aqiLevel}) due to PM2.5 pollution. With ${nextFestival.name} in ${nextFestival.daysUntil} days, we expect AQI to spike to 280+ (Very Poor) from firecracker smoke. We're expecting a 40% increase in respiratory cases. The hospital has been notified to stock extra inhalers, nebulizers, and oxygen supplies.`;
    }

    if (lowerMessage.includes('festival') || lowerMessage.includes('diwali') || lowerMessage.includes('holi')) {
      const impacts = nextFestival.healthImpacts.map(impact => 
        `• ${impact.category}: +${impact.increase}% (${impact.description})`
      ).join('\n');
      return `${nextFestival.name} is in ${nextFestival.daysUntil} days! Expected health impacts:\n\n${impacts}\n\nWe recommend: ${nextFestival.recommendations[0]}`;
    }

    if (lowerMessage.includes('sweet') || lowerMessage.includes('sugar') || lowerMessage.includes('diabetes')) {
      const foods = nextFestival.popularFoods.slice(0, 3).map(food => 
        `🔴 ${food.name}: ${food.sugarContent}`
      ).join('\n');
      return `Popular festival sweets and their sugar content:\n\n${foods}\n\n💡 Recommendation: Diabetics should limit to 1-2 small pieces maximum and check blood sugar levels before and after consumption.`;
    }

    if (lowerMessage.includes('health') || lowerMessage.includes('tip') || lowerMessage.includes('advice')) {
      return `🎆 Healthy ${nextFestival.name} Tips:\n\n${nextFestival.recommendations.map(r => `• ${r}`).join('\n')}\n\nStay safe and enjoy the celebrations responsibly!`;
    }

    if (lowerMessage.includes('temperature') || lowerMessage.includes('weather')) {
      return `Current weather in ${weather.location}: ${weather.temperature}°C, ${weather.condition}. Humidity: ${weather.humidity}%, Visibility: ${weather.visibility}m. Good conditions for outdoor activities!`;
    }

    // Default response
    return `I can help you with:\n• Current AQI and weather conditions\n• Festival health impact predictions\n• Sweet consumption guidelines\n• Diabetes and cardiac health tips\n• Festival safety recommendations\n\nWhat would you like to know?`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'assistant',
        content: generateResponse(input)
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl flex flex-col">
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">AI Health Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/20 text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg whitespace-pre-wrap ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about festivals, AQI, health tips..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
