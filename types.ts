export enum LocationType {
  SIGHTSEEING = 'SIGHTSEEING',
  FOOD = 'FOOD',
  SHOPPING = 'SHOPPING',
  TRANSPORT = 'TRANSPORT',
  HOTEL = 'HOTEL'
}

export interface Reservation {
  id: string;
  name: string;
  date: string;
  time: string;
  url?: string;
  image?: string;
}

export interface GuideTip {
  title: string;
  description: string;
  tags: string[]; // e.g., "Must Eat", "Must Buy"
  image?: string; // URL for food/item photo
}

export interface ItineraryItem {
  id: string;
  time?: string;
  name: string;
  japaneseName?: string;
  type: LocationType;
  description?: string;
  tips?: GuideTip[];
  reservation?: Reservation;
  image?: string;
}

export interface DayItinerary {
  dayId: number;
  date: string;
  title: string;
  items: ItineraryItem[];
}

export interface WeatherData {
  temp: number;
  condition: string; // "Sunny", "Cloudy", "Rain"
  iconCode: number;
}

export interface FlightOption {
  id: string;
  airline: string;
  outbound: { flight: string; dep: string; arr: string };
  inbound: { flight: string; dep: string; arr: string };
}