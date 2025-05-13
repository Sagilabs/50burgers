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
    ],
    transport: {
      to: {
        "Da Nang": {
          options: [
            {
              type: "plane",
              duration: "1h 20m",
              cost: "$30-60",
              frequency: "Multiple daily",
              url: "https://www.vietjetair.com"
            },
            {
              type: "train",
              duration: "16h 30m",
              cost: "$40-75",
              frequency: "Daily",
              url: "https://dsvn.vn"
            }
          ]
        },
        "Hanoi": {
          options: [
            {
              type: "plane",
              duration: "2h 10m",
              cost: "$40-80",
              frequency: "Multiple daily",
              url: "https://www.vietnamairlines.com"
            },
            {
              type: "train",
              duration: "32h",
              cost: "$65-120",
              frequency: "Daily",
              url: "https://dsvn.vn"
            }
          ]
        },
        "Hoi An": {
          options: [
            {
              type: "plane",
              duration: "1h 20m",
              cost: "$30-60",
              frequency: "Multiple daily",
              url: "https://www.vietjetair.com"
            },
            {
              type: "train",
              duration: "17h",
              cost: "$45-80",
              frequency: "Daily",
              url: "https://dsvn.vn"
            }
          ]
        }
      }
    }
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
    ],
    transport: {
      to: {
        "Ho Chi Minh City": {
          options: [
            {
              type: "plane",
              duration: "1h 20m",
              cost: "$30-60",
              frequency: "Multiple daily",
              url: "https://www.vietjetair.com"
            },
            {
              type: "train",
              duration: "16h 30m",
              cost: "$40-75",
              frequency: "Daily",
              url: "https://dsvn.vn"
            }
          ]
        },
        "Hanoi": {
          options: [
            {
              type: "plane",
              duration: "1h 20m",
              cost: "$30-60",
              frequency: "Multiple daily",
              url: "https://www.vietjetair.com"
            },
            {
              type: "train",
              duration: "15h",
              cost: "$35-70",
              frequency: "Daily",
              url: "https://dsvn.vn"
            }
          ]
        },
        "Hue": {
          options: [
            {
              type: "train",
              duration: "2h 30m",
              cost: "$10-20",
              frequency: "Multiple daily",
              url: "https://dsvn.vn"
            },
            {
              type: "bus",
              duration: "3h",
              cost: "$8-15",
              frequency: "Every 2 hours",
              url: "https://www.bookaway.com"
            }
          ]
        },
        "Hoi An": {
          options: [
            {
              type: "bus",
              duration: "45m",
              cost: "$5-8",
              frequency: "Every hour",
              url: "https://www.bookaway.com"
            }
          ]
        }
      }
    }
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
    ],
    transport: {
      to: {
        "Ho Chi Minh City": {
          options: [
            {
              type: "plane",
              duration: "2h 10m",
              cost: "$40-80",
              frequency: "Multiple daily",
              url: "https://www.vietnamairlines.com"
            },
            {
              type: "train",
              duration: "32h",
              cost: "$65-120",
              frequency: "Daily",
              url: "https://dsvn.vn"
            }
          ]
        },
        "Da Nang": {
          options: [
            {
              type: "plane",
              duration: "1h 20m",
              cost: "$30-60",
              frequency: "Multiple daily",
              url: "https://www.vietjetair.com"
            },
            {
              type: "train",
              duration: "15h",
              cost: "$35-70",
              frequency: "Daily",
              url: "https://dsvn.vn"
            }
          ]
        },
        "Ha Long Bay": {
          options: [
            {
              type: "bus",
              duration: "2h 30m",
              cost: "$10-15",
              frequency: "Every 2 hours",
              url: "https://www.bookaway.com"
            }
          ]
        }
      }
    }
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
    ],
    transport: {
      to: {
        "Hanoi": {
          options: [
            {
              type: "bus",
              duration: "2h 30m",
              cost: "$10-15",
              frequency: "Every 2 hours",
              url: "https://www.bookaway.com"
            }
          ]
        }
      }
    }
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
    ],
    transport: {
      to: {
        "Da Nang": {
          options: [
            {
              type: "bus",
              duration: "45m",
              cost: "$5-8",
              frequency: "Every hour",
              url: "https://www.bookaway.com"
            }
          ]
        },
        "Hue": {
          options: [
            {
              type: "bus",
              duration: "3h 30m",
              cost: "$12-18",
              frequency: "Every 2 hours",
              url: "https://www.bookaway.com"
            }
          ]
        }
      }
    }
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
    ],
    transport: {
      to: {
        "Da Nang": {
          options: [
            {
              type: "train",
              duration: "2h 30m",
              cost: "$10-20",
              frequency: "Multiple daily",
              url: "https://dsvn.vn"
            },
            {
              type: "bus",
              duration: "3h",
              cost: "$8-15",
              frequency: "Every 2 hours",
              url: "https://www.bookaway.com"
            }
          ]
        },
        "Hoi An": {
          options: [
            {
              type: "bus",
              duration: "3h 30m",
              cost: "$12-18",
              frequency: "Every 2 hours",
              url: "https://www.bookaway.com"
            }
          ]
        }
      }
    }
  }
];