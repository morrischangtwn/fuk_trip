import React, { useState } from 'react';
import { TRIP_DATA } from '../constants';
import { ItineraryItem, LocationType } from '../types';
import { Utensils, ShoppingBag, Train, Camera, Navigation, Star, Clock } from 'lucide-react';

const Itinerary: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  const getTypeIcon = (type: LocationType) => {
    switch (type) {
      case LocationType.FOOD: return <Utensils size={16} className="text-white" />;
      case LocationType.SHOPPING: return <ShoppingBag size={16} className="text-white" />;
      case LocationType.TRANSPORT: return <Train size={16} className="text-white" />;
      default: return <Camera size={16} className="text-white" />;
    }
  };
  
  const getTypeColor = (type: LocationType) => {
    switch (type) {
        case LocationType.FOOD: return 'bg-japan-red';
        case LocationType.SHOPPING: return 'bg-japan-indigo';
        case LocationType.TRANSPORT: return 'bg-stone-400';
        default: return 'bg-japan-bamboo';
    }
  }

  const openGoogleMaps = (name: string, japaneseName?: string) => {
    const query = encodeURIComponent(`${japaneseName || name} Fukuoka`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const currentDayData = TRIP_DATA.find(d => d.dayId === activeDay);

  return (
    <div className="pb-24 pt-4">
      {/* Day Selector */}
      <div className="flex space-x-3 overflow-x-auto px-4 py-2 no-scrollbar mb-4 sticky top-0 z-10 bg-stone-50/95 backdrop-blur border-b border-stone-100/50 pb-4">
        {TRIP_DATA.map((day) => (
          <button
            key={day.dayId}
            onClick={() => setActiveDay(day.dayId)}
            className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-16 rounded-xl border transition-all duration-300 shadow-sm ${
              activeDay === day.dayId
                ? 'bg-japan-ink text-white border-japan-ink shadow-lg scale-105'
                : 'bg-white text-stone-400 border-stone-200'
            }`}
          >
            <span className="text-[10px] font-medium uppercase tracking-wider">Day</span>
            <span className="text-xl font-display font-bold">{day.dayId}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="px-4 animate-fade-in">
        <div className="mb-8">
            <h2 className="text-xs font-bold text-japan-red tracking-widest uppercase mb-1">{currentDayData?.date}</h2>
            <h1 className="text-3xl font-display font-bold text-stone-800 leading-tight">{currentDayData?.title}</h1>
        </div>

        <div className="space-y-8 relative">
             {/* Timeline Line */}
            <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-stone-200" />

            {currentDayData?.items.map((item, index) => (
                <div key={item.id} className="relative pl-10">
                    {/* Timeline Dot */}
                    <div className={`absolute left-0 top-0 w-8 h-8 rounded-full border-4 border-stone-50 flex items-center justify-center z-10 shadow-sm ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)}
                    </div>

                    <div className={`bg-white rounded-2xl shadow-sm border overflow-hidden group ${item.reservation ? 'border-amber-200 shadow-amber-100' : 'border-stone-100'}`}>
                        
                        {/* Image Header */}
                        {item.image && (
                            <div className="h-32 w-full overflow-hidden relative">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                {item.reservation && (
                                   <div className="absolute top-3 right-3 bg-amber-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center animate-pulse">
                                      <Star size={12} fill="currentColor" className="mr-1" />
                                      Reserved
                                   </div>
                                )}
                                {item.japaneseName && (
                                    <div className="absolute bottom-2 left-3 text-white text-xs font-medium tracking-wide bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                                        {item.japaneseName}
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="p-5">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-lg text-stone-800 leading-tight">{item.name}</h3>
                                <button 
                                    onClick={() => openGoogleMaps(item.name, item.japaneseName)}
                                    className="bg-stone-50 p-2 rounded-full text-japan-indigo hover:bg-stone-100 transition-colors ml-2 flex-shrink-0"
                                >
                                    <Navigation size={18} />
                                </button>
                            </div>

                            {/* Reservation Badge Detail */}
                            {item.reservation && (
                                <div className="mb-4 bg-amber-50 rounded-lg p-3 border border-amber-100 flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Clock size={16} className="text-amber-600" />
                                        <span className="text-sm font-bold text-amber-900">{item.reservation.time}</span>
                                    </div>
                                    <span className="text-xs font-medium text-amber-700">Confirmed Booking</span>
                                </div>
                            )}

                            {/* Description */}
                            {item.description && (
                                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                                    {item.description}
                                </p>
                            )}

                            {/* Guide Tips with Photos */}
                            {item.tips && item.tips.length > 0 && (
                                <div className="space-y-3 bg-stone-50/80 rounded-xl p-3 border border-stone-100">
                                    <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">Highlights & Must-Dos</h4>
                                    {item.tips.map((tip, idx) => (
                                        <div key={idx} className="flex space-x-3 pb-3 last:pb-0 border-b last:border-0 border-stone-200/50">
                                            {/* Tip Image */}
                                            {tip.image && (
                                                <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-stone-200">
                                                    <img src={tip.image} alt={tip.title} className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                            
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="text-xs font-bold text-stone-800">{tip.title}</span>
                                                    <div className="flex flex-wrap gap-1 justify-end">
                                                        {tip.tags.map(tag => (
                                                            <span key={tag} className={`text-[8px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wide ${
                                                                tag === 'Must Eat' ? 'bg-rose-100 text-rose-700' :
                                                                tag === 'Must Buy' ? 'bg-blue-100 text-blue-700' : 
                                                                tag === 'Photo Spot' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-600'
                                                            }`}>
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-xs text-stone-500 leading-snug">{tip.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Itinerary;