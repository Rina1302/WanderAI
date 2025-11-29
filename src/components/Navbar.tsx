import { Link } from 'react-router-dom';
import { Activity, Calendar } from 'lucide-react';
import { getNextFestival } from '@/data/festivalData';

const Navbar = () => {
  const nextFestival = getNextFestival();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Activity className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MediPredict AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/problem" className="hover:text-primary transition-colors">
              Problem
            </Link>
            <Link to="/solution" className="hover:text-primary transition-colors">
              Solution
            </Link>
            <Link to="/festival-analysis" className="hover:text-primary transition-colors">
              Analysis
            </Link>
            <Link to="/supply-chain" className="hover:text-primary transition-colors">
              Supply Chain
            </Link>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-festival/10 rounded-full border border-festival/20">
            <Calendar className="h-4 w-4 text-festival" />
            <span className="text-sm font-medium">
              {nextFestival.name} in {nextFestival.daysUntil} days
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
