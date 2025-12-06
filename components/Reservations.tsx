import React from 'react';
import { RESERVATIONS } from '../constants';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

const Reservations: React.FC = () => {
  return (
    <div className="px-4 py-6 pb-24 animate-fade-in">
      <h1 className="text-2xl font-display font-bold text-stone-800 mb-6">Reservations</h1>
      
      <div className="grid gap-6">
        {RESERVATIONS.sort((a, b) => a.date.localeCompare(b.date)).map((res) => (
          <div key={res.id} className="bg-white rounded-2xl shadow-lg shadow-stone-200/50 overflow-hidden border border-stone-100 group">
             
             {res.image && (
                 <div className="h-32 w-full overflow-hidden relative">
                    <img src={res.image} alt={res.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                        <span className="text-xs font-bold bg-white/90 backdrop-blur text-stone-800 px-2 py-0.5 rounded">
                            {res.date}
                        </span>
                        <span className="text-xs font-bold bg-amber-400 text-white px-2 py-0.5 rounded flex items-center shadow-sm">
                            <Clock size={12} className="mr-1" />
                            {res.time}
                        </span>
                    </div>
                 </div>
             )}
             
             <div className="p-5">
                {!res.image && (
                    <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xs font-bold bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                            {res.date}
                        </span>
                        <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded flex items-center">
                            <Clock size={12} className="mr-1" />
                            {res.time}
                        </span>
                    </div>
                )}
                
                <h3 className="text-lg font-bold text-stone-800 mb-4 leading-snug">{res.name}</h3>
                
                <div className="flex space-x-3">
                    <button 
                        onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(res.name + " Fukuoka")}`, '_blank')}
                        className="flex-1 bg-stone-800 hover:bg-stone-700 text-white text-sm py-2.5 rounded-xl font-medium flex items-center justify-center space-x-2 active:scale-95 transition-all shadow-md shadow-stone-200"
                    >
                        <MapPin size={16} />
                        <span>Navigate</span>
                    </button>
                    {res.url && (
                        <button 
                             onClick={() => window.open(res.url, '_blank')}
                             className="px-4 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-xl border border-stone-200 flex items-center justify-center transition-colors"
                        >
                            <ExternalLink size={18} />
                        </button>
                    )}
                </div>
             </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100">
         <h4 className="text-sm font-bold text-blue-800 mb-2">Reservation Tips</h4>
         <p className="text-xs text-blue-700 leading-relaxed">
            Show your reservation screen or name in English/Japanese upon arrival. Most restaurants in Japan strictly adhere to time, so please arrive 5-10 minutes early.
         </p>
      </div>
    </div>
  );
};

export default Reservations;