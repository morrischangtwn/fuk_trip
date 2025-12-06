import React, { useState } from 'react';
import { HOTEL_INFO, EMERGENCY_CONTACTS, FLIGHT_OPTIONS } from '../constants';
import { Building, Phone, Plane, Copy, Check, ArrowRightLeft } from 'lucide-react';

const Utilities: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedFlightId, setSelectedFlightId] = useState<string>('CI');
  
  const currentFlight = FLIGHT_OPTIONS.find(f => f.id === selectedFlightId) || FLIGHT_OPTIONS[0];

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="px-4 py-6 pb-24 space-y-8 animate-fade-in">
      
      {/* Flight Info */}
      <section>
        <div className="flex justify-between items-end mb-3">
            <h2 className="text-sm font-bold text-stone-400 uppercase tracking-wider">Flight Information</h2>
            <div className="flex bg-stone-100 rounded-lg p-1">
                {FLIGHT_OPTIONS.map(opt => (
                    <button
                        key={opt.id}
                        onClick={() => setSelectedFlightId(opt.id)}
                        className={`px-3 py-1 text-[10px] font-bold rounded-md transition-all ${
                            selectedFlightId === opt.id 
                            ? 'bg-white text-stone-800 shadow-sm' 
                            : 'text-stone-400 hover:text-stone-600'
                        }`}
                    >
                        {opt.id}
                    </button>
                ))}
            </div>
        </div>
        
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 relative overflow-hidden">
            {/* Background decoration */}
            <Plane className="absolute -right-4 -bottom-4 text-stone-50 opacity-50 transform -rotate-45" size={120} />

            <div className="flex items-center space-x-3 mb-6 relative z-10">
                <div className="bg-blue-50 p-2 rounded-full text-blue-600"><Plane size={20} /></div>
                <div>
                    <h3 className="font-bold text-stone-800 text-lg">Taipei <span className="text-stone-300 mx-1">⇄</span> Fukuoka</h3>
                    <p className="text-xs text-stone-500 font-medium">{currentFlight.airline}</p>
                </div>
            </div>
            
            <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between border-b border-stone-50 pb-3">
                    <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-stone-400 mb-1">OUTBOUND</span>
                         <span className="text-xl font-display font-bold text-stone-800">{currentFlight.outbound.flight}</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center space-x-2 text-stone-800 font-bold">
                            <span>{currentFlight.outbound.dep}</span>
                            <ArrowRightLeft size={12} className="text-stone-300" />
                            <span>{currentFlight.outbound.arr}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                         <span className="text-[10px] font-bold text-stone-400 mb-1">INBOUND</span>
                         <span className="text-xl font-display font-bold text-stone-800">{currentFlight.inbound.flight}</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center space-x-2 text-stone-800 font-bold">
                            <span>{currentFlight.inbound.dep}</span>
                            <ArrowRightLeft size={12} className="text-stone-300" />
                            <span>{currentFlight.inbound.arr}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Hotel Info */}
      <section>
        <h2 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3">Accommodation</h2>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100">
            <div className="bg-stone-800 text-white p-4 flex justify-between items-start relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-bold text-lg">{HOTEL_INFO.name}</h3>
                    <p className="text-xs opacity-80">{HOTEL_INFO.japaneseName}</p>
                </div>
                <Building className="text-white opacity-10 absolute right-4 top-1/2 transform -translate-y-1/2" size={60} />
            </div>
            <div className="p-4 space-y-4">
                <div 
                    onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(HOTEL_INFO.name)}`, '_blank')}
                    className="flex items-start space-x-3 cursor-pointer group"
                >
                    <div className="mt-1 min-w-[20px] bg-stone-100 p-1.5 rounded-full group-hover:bg-stone-200 transition-colors">
                        <Building size={14} className="text-stone-500" />
                    </div>
                    <p className="text-sm text-stone-600 leading-snug underline decoration-stone-200 group-hover:decoration-stone-400 underline-offset-4 transition-all">
                        {HOTEL_INFO.address}
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                     <div className="min-w-[20px] bg-stone-100 p-1.5 rounded-full">
                        <Phone size={14} className="text-stone-500" />
                     </div>
                     <p className="text-sm text-stone-600 font-medium tracking-wide">{HOTEL_INFO.phone}</p>
                </div>
            </div>
        </div>
      </section>

      {/* Emergency */}
      <section>
        <h2 className="text-sm font-bold text-japan-red uppercase tracking-wider mb-3">Emergency</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden">
            {EMERGENCY_CONTACTS.map((contact, index) => (
                <div key={index} className="flex justify-between items-center p-4 border-b border-stone-100 last:border-0 hover:bg-red-50/30 transition-colors">
                    <div className="flex items-center space-x-3">
                         <div className="bg-red-50 p-2 rounded-full text-red-500">
                            <Phone size={16} />
                         </div>
                         <span className="text-sm font-medium text-stone-700">{contact.label}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <a href={`tel:${contact.value}`} className="text-lg font-bold text-stone-800 font-display">{contact.value}</a>
                        <button onClick={() => copyToClipboard(contact.value, index)} className="text-stone-300 hover:text-stone-500 p-2">
                            {copiedIndex === index ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </section>
      
    </div>
  );
};

export default Utilities;