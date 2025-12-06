import React from 'react';
import { CalendarDays, MapPin, Info, Briefcase } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'itinerary', label: 'Itinerary', icon: CalendarDays },
    { id: 'reservations', label: 'Reservations', icon: Briefcase },
    { id: 'utils', label: 'Info', icon: Info },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-stone-200 pb-safe pt-2 px-6 shadow-lg z-50">
      <div className="flex justify-around items-center max-w-md mx-auto h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center w-full space-y-1 transition-colors duration-200 ${
                isActive ? 'text-japan-red' : 'text-stone-400'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium tracking-wide uppercase">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;