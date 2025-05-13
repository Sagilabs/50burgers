import { Location } from '../types/Location';

export const locations: Location[] = [
  {
    id: 1,
    name: "Ho Chi Minh City",
    description: "Vietnam's largest city, a dynamic metropolis with French colonial architecture",
    lat: 10.8231,
    lng: 106.6297,
    type: "city",
    region: "South",
    minDays: 3,
    imageUrl: "https://images.pexels.com/photos/2177558/pexels-photo-2177558.jpeg",
    activities: [
      "Visit War Remnants Museum",
      "Explore Ben Thanh Market",
      "Cu Chi Tunnels tour",
      "Notre-Dame Cathedral"
    ]
  },
  {
    id: 2,
    name: "Da Nang",
    description: "Modern coastal city famous for its beaches and Dragon Bridge",
    lat: 16.0544,
    lng: 108.2022,
    type: "city",
    region: "Central",
    minDays: 3,
    imageUrl: "https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg",
    activities: [
      "Visit Dragon Bridge",
      "Marble Mountains exploration",
      "My Khe Beach",
      "Ba Na Hills"
    ]
  },
  {
    id: 3,
    name: "Hanoi",
    description: "Vietnam's capital city, known for its ancient architecture and rich culture",
    lat: 21.0285,
    lng: 105.8542,
    type: "city",
    region: "North",
    minDays: 3,
    imageUrl: "https://images.pexels.com/photos/2177558/pexels-photo-2177558.jpeg",
    activities: [
      "Visit Hoan Kiem Lake",
      "Explore Old Quarter",
      "Temple of Literature",
      "Try street food"
    ]
  },
  {
    id: 4,
    name: "Ha Long Bay",
    description: "UNESCO World Heritage site featuring thousands of limestone islands",
    lat: 20.9101,
    lng: 107.1839,
    type: "attraction",
    region: "North",
    minDays: 2,
    imageUrl: "https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg",
    activities: [
      "Overnight cruise",
      "Kayaking",
      "Visit floating villages",
      "Cave exploration"
    ]
  },
  {
    id: 5,
    name: "Hoi An",
    description: "Ancient town known for its well-preserved architecture and lanterns",
    lat: 15.8801,
    lng: 108.3380,
    type: "city",
    region: "Central",
    minDays: 2,
    imageUrl: "https://images.pexels.com/photos/5625432/pexels-photo-5625432.jpeg",
    activities: [
      "Visit Ancient Town",
      "Lantern making workshop",
      "Cooking class",
      "Beach relaxation"
    ]
  },
  {
    id: 6,
    name: "Hue",
    description: "Former imperial capital with historic citadel and royal tombs",
    lat: 16.4637,
    lng: 107.5909,
    type: "city",
    region: "Central",
    minDays: 2,
    imageUrl: "https://images.pexels.com/photos/5625432/pexels-photo-5625432.jpeg",
    activities: [
      "Imperial City tour",
      "Visit royal tombs",
      "Dragon boat ride",
      "Try imperial cuisine"
    ]
  }
];