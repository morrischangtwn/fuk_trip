import { DayItinerary, LocationType, Reservation, FlightOption } from './types';

// Reliable Image Assets
const IMAGES = {
  ramen: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80',
  sushi: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
  dessert: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
  motsunabe: 'https://images.unsplash.com/photo-1580442151529-343f2f6e0e27?auto=format&fit=crop&w=800&q=80',
  shrine: 'https://images.unsplash.com/photo-1590250645602-af53ea7f06fa?auto=format&fit=crop&w=800&q=80',
  cityNight: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
  canal: 'https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?auto=format&fit=crop&w=800&q=80',
  tower: 'https://images.unsplash.com/photo-1563721344-934d47192f15?auto=format&fit=crop&w=800&q=80',
  shopping: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
  airport: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
  train: 'https://images.unsplash.com/photo-1495539406979-bf61750d38ad?auto=format&fit=crop&w=800&q=80',
  applePie: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=80',
  salad: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
  matcha: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=800&q=80',
  yakitori: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80',
  unagi: 'https://images.unsplash.com/photo-1628203525283-6c61266052dc?auto=format&fit=crop&w=800&q=80',
  sukiyaki: 'https://images.unsplash.com/photo-1552590635-27c2c2128abf?auto=format&fit=crop&w=800&q=80',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
};

// Flight Options
export const FLIGHT_OPTIONS: FlightOption[] = [
  {
    id: 'CI',
    airline: 'China Airlines (CI)',
    outbound: { flight: 'CI116', dep: 'TPE 16:30', arr: 'FUK 19:35' },
    inbound: { flight: 'CI117', dep: 'FUK 20:35', arr: 'TPE 22:20' }
  },
  {
    id: 'JX',
    airline: 'Starlux Airlines (JX)',
    outbound: { flight: 'JX840', dep: 'TPE 06:00', arr: 'FUK 09:15' },
    inbound: { flight: 'JX841', dep: 'FUK 10:15', arr: 'TPE 11:50' }
  }
];

// CSV Data integrated
export const RESERVATIONS: Reservation[] = [
  { 
    id: 'r1', 
    name: 'Toriden Hakata Honten (水炊雞肉鍋)', 
    date: '12/17', 
    time: '20:30', 
    url: 'https://maps.app.goo.gl/b1DMdZkBof3MZtiT8',
    image: IMAGES.motsunabe
  },
  { 
    id: 'r2', 
    name: 'Torikami Garden City (雞肉料理)', 
    date: '12/19', 
    time: '12:00', 
    url: '',
    image: IMAGES.yakitori
  },
  { 
    id: 'r3', 
    name: 'Nishijin Hatsuki Hakata (西新初喜)', 
    date: '12/19', 
    time: '18:30', 
    url: '',
    image: IMAGES.sukiyaki
  },
  { 
    id: 'r4', 
    name: 'Unagi Yondaime Kikukawa (鰻魚四代目菊川)', 
    date: '12/21', 
    time: '12:00', 
    url: '',
    image: IMAGES.unagi
  },
];

export const HOTEL_INFO = {
  name: 'Hotel Okura Fukuoka',
  address: '3-2 Shimokawabatamachi, Hakata Ward, Fukuoka, 812-0027, Japan',
  phone: '+81 92-262-1111',
  japaneseName: 'ホテルオークラ福岡'
};

export const EMERGENCY_CONTACTS = [
  { label: 'Police', value: '110' },
  { label: 'Ambulance/Fire', value: '119' },
  { label: 'Taipei Office', value: '092-734-2810' },
  { label: 'Emergency (Consulate)', value: '090-1922-9740' }
];

// PDF Data Structured with Integrated Reservations
export const TRIP_DATA: DayItinerary[] = [
  {
    dayId: 1,
    date: 'Day 1 - 12/17',
    title: 'Arrival & Tenjin Underground',
    items: [
      {
        id: 'd1-1',
        name: 'Fukuoka Airport to Hakata',
        type: LocationType.TRANSPORT,
        description: '前往市區 ➟ 博多站',
        image: IMAGES.airport
      },
      {
        id: 'd1-2',
        name: 'Canal City Hakata',
        japaneseName: '博多運河城',
        type: LocationType.SHOPPING,
        description: '大型複合購物中心，噴水池表演。',
        image: IMAGES.canal
      },
      {
        id: 'd1-3',
        name: 'Nakasu Yatai',
        japaneseName: '中洲屋台',
        type: LocationType.FOOD,
        description: '體驗博多特有的屋台文化，拉麵、關東煮。',
        image: IMAGES.cityNight
      },
      {
        id: 'd1-4',
        name: 'Tenjin Underground Shopping Center',
        japaneseName: '天神地下街',
        type: LocationType.SHOPPING,
        description: '必買推薦清單：甜點、雜貨、伴手禮。',
        image: IMAGES.shopping,
        tips: [
          { title: 'Kabe-ya (加辺屋)', description: '60年歷史出雲蕎麥麵', tags: ['Must Eat'], image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=300&q=80' },
          { title: 'RINGO', description: '現烤蘋果派，144層酥脆派皮', tags: ['Must Eat'], image: IMAGES.applePie },
          { title: 'WithGreen', description: '國產野菜沙拉，健康飽足', tags: ['Food'], image: IMAGES.salad },
          { title: 'Mrs. Elizabeth Muffin', description: '手作現烤美式瑪芬', tags: ['Must Eat'], image: 'https://images.unsplash.com/photo-1558401391-7899b4bd5bbf?auto=format&fit=crop&w=300&q=80' },
          { title: 'Maccha House', description: '抹茶館，抹茶提拉米蘇/飲品', tags: ['Cafe'], image: IMAGES.matcha },
          { title: 'Imo-ya Kinjiro', description: '芋屋金次郎，地瓜條伴手禮', tags: ['Must Buy'], image: 'https://images.unsplash.com/photo-1628608221844-124b89387431?auto=format&fit=crop&w=300&q=80' },
          { title: 'Fukuya (ふくや)', description: '明太子專門店', tags: ['Must Buy'], image: 'https://images.unsplash.com/photo-1594910067757-50a80e463a56?auto=format&fit=crop&w=300&q=80' },
        ]
      },
      {
        id: 'r1',
        name: 'Toriden Hakata Honten',
        japaneseName: '博多水炊き とり田',
        type: LocationType.FOOD,
        description: 'Famous Mizutaki (Chicken Hot Pot).',
        image: IMAGES.motsunabe,
        reservation: RESERVATIONS[0] // 20:30
      }
    ]
  },
  {
    dayId: 2,
    date: 'Day 2 - 12/18',
    title: 'Mojiko Retro & Views',
    items: [
      {
        id: 'd2-1',
        name: 'Mojiko Retro District',
        japaneseName: '門司港懷舊區',
        type: LocationType.SIGHTSEEING,
        description: 'JR特急約1小時。參觀舊門司三井俱樂部、門司港懷舊展望室。',
        image: 'https://images.unsplash.com/photo-1570505191316-2c505435948f?auto=format&fit=crop&w=800&q=80',
        tips: [
          { title: 'Yaki Curry', description: '必吃名物：燒咖哩 (焼きカレー)', tags: ['Must Eat'], image: 'https://images.unsplash.com/photo-1604579278540-b8754e0a4251?auto=format&fit=crop&w=300&q=80' }
        ]
      },
      {
        id: 'd2-2',
        name: 'Kaikyo Plaza & Photo Spots',
        japaneseName: '海峽廣場',
        type: LocationType.SIGHTSEEING,
        description: '藍翼橋、舊大阪商船、跟「香蕉人」拍照打卡。',
        image: 'https://images.unsplash.com/photo-1610344403328-98e98632626e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'd2-3',
        name: 'Karato Market (Shimonoseki)',
        japaneseName: '唐戶市場',
        type: LocationType.FOOD,
        description: '搭船前往下關。參觀春帆樓，吃海鮮丼、壽司。',
        image: IMAGES.sushi
      },
      {
        id: 'd2-4',
        name: 'Mt. Sarakura Night View',
        japaneseName: '皿倉山',
        type: LocationType.SIGHTSEEING,
        description: '搭纜車欣賞「新日本三大夜景」。',
        image: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    dayId: 3,
    date: 'Day 3 - 12/19',
    title: 'Dazaifu & Christmas Market',
    items: [
      {
        id: 'd3-1',
        name: 'Dazaifu Tenmangu',
        japaneseName: '太宰府天滿宮',
        type: LocationType.SIGHTSEEING,
        description: '參拜學問之神，欣賞隈研吾設計的星巴克。',
        image: IMAGES.shrine,
        tips: [
          { title: 'Starbucks', description: '2000根杉木交織木構造', tags: ['Photo Spot'], image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=300&q=80' },
          { title: 'Chikushi-an', description: '筑紫庵，太宰府漢堡', tags: ['Must Eat'], image: IMAGES.burger },
          { title: 'Kagura', description: '和牛明太子御膳', tags: ['Must Eat'], image: IMAGES.motsunabe }
        ]
      },
      {
        id: 'r2',
        name: 'Torikami Garden City',
        japaneseName: 'とりかわ',
        type: LocationType.FOOD,
        description: 'Chicken Specialty Restaurant.',
        image: IMAGES.yakitori,
        reservation: RESERVATIONS[1] // 12:00
      },
      {
        id: 'd3-2',
        name: 'Hakata Christmas Market',
        japaneseName: '光の街・博多',
        type: LocationType.SIGHTSEEING,
        description: 'JR博多站前廣場，歐洲風情聖誕市集。',
        image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'r3',
        name: 'Nishijin Hatsuki Hakata',
        japaneseName: '西新初喜',
        type: LocationType.FOOD,
        description: 'Sukiyaki / Shabu Shabu.',
        image: IMAGES.sukiyaki,
        reservation: RESERVATIONS[2] // 18:30
      },
      {
        id: 'd3-3',
        name: 'Nakasu Illumination',
        japaneseName: '中洲 光之降臨',
        type: LocationType.SIGHTSEEING,
        description: '那珂川沿岸燈飾。',
        image: IMAGES.cityNight
      }
    ]
  },
  {
    dayId: 4,
    date: 'Day 4 - 12/20',
    title: 'Fukuoka City Highlights',
    items: [
      {
        id: 'd4-1',
        name: 'Kushida Shrine',
        japaneseName: '櫛田神社',
        type: LocationType.SIGHTSEEING,
        description: '千年銀杏樹，博多祇園山笠的起點。',
        image: 'https://images.unsplash.com/photo-1601823984263-1879d4dcceaa?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'd4-2',
        name: 'Kawabata Shopping Arcade',
        japaneseName: '川端通商店街',
        type: LocationType.SHOPPING,
        description: '百年歷史商店街，濃厚昭和風情。',
        image: 'https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'd4-3',
        name: 'Ohori Park & Japanese Garden',
        japaneseName: '大濠公園',
        type: LocationType.SIGHTSEEING,
        description: '模仿西湖設計，築山林泉迴遊式庭園。',
        image: 'https://images.unsplash.com/photo-1624606730598-e7080b435c2e?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'd4-4',
        name: 'Fukuoka Tower',
        japaneseName: '福岡塔',
        type: LocationType.SIGHTSEEING,
        description: '戀人的聖地，360度博多灣夜景。',
        image: IMAGES.tower
      }
    ]
  },
  {
    dayId: 5,
    date: 'Day 5 - 12/21',
    title: 'Shopping & Departure',
    items: [
      {
        id: 'd5-1',
        name: 'Tenjin Shopping District',
        japaneseName: '天神商圈',
        type: LocationType.SHOPPING,
        description: 'PARCO, Daimaru, ONE FUKUOKA BLDG.',
        image: IMAGES.shopping
      },
      {
        id: 'r4',
        name: 'Unagi Yondaime Kikukawa',
        japaneseName: '鰻魚四代目菊川',
        type: LocationType.FOOD,
        description: 'Premium Eel Rice (Unagi).',
        image: IMAGES.unagi,
        reservation: RESERVATIONS[3] // 12:00
      },
      {
        id: 'd5-5',
        name: 'Fukuoka Airport',
        japaneseName: '福岡空港',
        type: LocationType.TRANSPORT,
        description: '搭機返回台北。',
        image: IMAGES.airport
      }
    ]
  }
];