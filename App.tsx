import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import WeatherWidget from './components/WeatherWidget';
import Itinerary from './components/Itinerary';
import Reservations from './components/Reservations';
import Utilities from './components/Utilities';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('itinerary');

  const renderContent = () => {
    switch (activeTab) {
      case 'itinerary':
        return <Itinerary />;
      case 'reservations':
        return <Reservations />;
      case 'utils':
        return <Utilities />;
      default:
        return <Itinerary />;
    }
  };

  return (
    <HashRouter>
      <div className="min-h-screen bg-stone-50 font-sans text-stone-800 max-w-md mx-auto shadow-2xl overflow-hidden relative">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200 px-4 h-14 flex items-center justify-between">
          <span className="font-display font-bold text-lg text-japan-ink">Fukuoka Trip</span>
          <WeatherWidget />
        </header>

        {/* Main Content Area */}
        <main className="min-h-[calc(100vh-56px)]">
          {renderContent()}
        </main>

        {/* Bottom Navigation */}
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </HashRouter>
  );
};

export default App;