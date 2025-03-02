export interface Car {
  id: number;
  name: string;
  category: string;
  image: string;
  rating: number;
  description: string;
  features: string[];
  pricePerKm: number;
  baseFare: number;
  reviews: Review[];
  carFeatures: string[];
}

export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const carsData: Car[] = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    rating: 4.9,
    description: 'Experience ultimate luxury with our flagship Mercedes-Benz S-Class. Perfect for executive travel and special occasions. The S-Class sets the standard for luxury sedans with its elegant design, state-of-the-art technology, and unparalleled comfort.',
    features: [
      'Premium leather interior',
      'Climate control with 4 zones',
      'Privacy glass',
      'Burmester® surround sound system',
      'Ambient lighting with 64 colors',
      'Massage seats',
      'Rear entertainment system',
      'Champagne cooler'
    ],
    pricePerKm: 5.0,
    baseFare: 20,
    reviews: [
      {
        id: 1,
        userName: 'James Wilson',
        rating: 5,
        comment: 'Absolutely incredible experience. The car was immaculate and the driver was professional and courteous. Made my business trip so much more comfortable.',
        date: '2025-03-15'
      },
      {
        id: 2,
        userName: 'Sophia Chen',
        rating: 5,
        comment: 'Used this for my wedding day transportation and it was perfect! Elegant, comfortable, and made for beautiful photos.',
        date: '2025-02-28'
      },
      {
        id: 3,
        userName: 'Robert Johnson',
        rating: 4.5,
        comment: 'Excellent service and beautiful vehicle. The only minor issue was a slight delay in pickup, but the ride itself was fantastic.',
        date: '2025-01-20'
      }
    ],
    carFeatures: [
      '30 MPG',
      '2022 Model',
      '₹4,150/day',
      '4 passengers max'
    ]
  },
  {
    id: 2,
    name: 'BMW 7 Series',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.8,
    description: 'The BMW 7 Series combines sophisticated elegance with cutting-edge technology for a premium travel experience. This flagship sedan offers a perfect balance of luxury, performance, and innovation.',
    features: [
      'Executive seating with extended legroom',
      'Ambient lighting',
      'Panoramic glass roof',
      'Advanced driver assistance systems',
      'Harman Kardon surround sound',
      'Gesture control',
      'Wireless charging',
      'Rear-seat entertainment'
    ],
    pricePerKm: 4.8,
    baseFare: 18,
    reviews: [
      {
        id: 1,
        userName: 'Michael Thompson',
        rating: 5,
        comment: 'The BMW 7 Series is my go-to choice for airport transfers. Spacious, comfortable, and always impeccably maintained.',
        date: '2025-03-10'
      },
      {
        id: 2,
        userName: 'Emma Davis',
        rating: 4.5,
        comment: 'Excellent ride quality and the technology features are impressive. The driver was knowledgeable about the car\'s features too.',
        date: '2025-02-15'
      }
    ],
    carFeatures: [
      '15 MPG',
      '2023 Model',
      '₹12,450/day',
      '4 passengers'
    ]
  },
  {
    id: 3,
    name: 'Cadillac Escalade',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.7,
    description: 'Our Cadillac Escalade offers spacious luxury with commanding presence, perfect for group travel or making a statement. This premium SUV combines bold American styling with sophisticated comfort.',
    features: [
      'Spacious 7-seater configuration',
      'AKG Studio Reference 36-speaker audio',
      'Heated and ventilated seats',
      'Ample luggage space',
      'Super Cruise hands-free driving',
      'Refrigerated center console',
      'Night vision',
      'Panoramic sunroof'
    ],
    pricePerKm: 4.5,
    baseFare: 22,
    reviews: [
      {
        id: 1,
        userName: 'David Miller',
        rating: 5,
        comment: 'Perfect for our family trip. Plenty of space for luggage and the kids loved the entertainment system.',
        date: '2025-03-05'
      },
      {
        id: 2,
        userName: 'Jennifer Lopez',
        rating: 4,
        comment: 'Impressive vehicle with great presence. Very comfortable for our group of 6, though fuel efficiency could be better.',
        date: '2025-02-20'
      }
    ],
    carFeatures: [
      '15 MPG',
      '2023 Model',
      '₹12,450/day',
      '4 passengers'
    ]
  },
  {
    id: 4,
    name: 'Audi A8',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    rating: 4.8,
    description: 'The Audi A8 represents the pinnacle of German engineering and luxury. With its understated elegance and advanced technology, it provides a sophisticated and refined travel experience.',
    features: [
      'Matrix LED headlights',
      'Bang & Olufsen sound system',
      'MMI touch response system',
      'Adaptive air suspension',
      'Valcona leather upholstery',
      'Four-zone automatic climate control',
      'Power rear seats with massage',
      'OLED lighting'
    ],
    pricePerKm: 4.7,
    baseFare: 19,
    reviews: [
      {
        id: 1,
        userName: 'Thomas Wright',
        rating: 5,
        comment: 'The Audi A8 is simply outstanding. The ride quality is exceptional and the interior is a masterpiece of design.',
        date: '2025-03-12'
      },
      {
        id: 2,
        userName: 'Sarah Johnson',
        rating: 4.5,
        comment: 'Elegant and understated luxury. Perfect for business travel when you want to make an impression without being flashy.',
        date: '2025-02-25'
      }
    ],
    carFeatures: [
      '15 MPG',
      '2023 Model',
      '₹12,450/day',
      '4 passengers'
    ]
  },
  {
    id: 5,
    name: 'Tesla Model S',
    category: 'Premium',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    rating: 4.6,
    description: 'Our Tesla Model S offers a sustainable luxury experience with impressive performance and cutting-edge technology. This all-electric sedan combines environmental consciousness with premium comfort.',
    features: [
      'All-electric powertrain',
      'Autopilot capabilities',
      '17-inch touchscreen display',
      'Zero emissions',
      'Instant acceleration',
      'Over-the-air updates',
      'Premium audio system',
      'Glass roof'
    ],
    pricePerKm: 4.2,
    baseFare: 15,
    reviews: [
      {
        id: 1,
        userName: 'Alex Chen',
        rating: 5,
        comment: 'Amazing experience in the Tesla. Silent, powerful, and the technology is mind-blowing. Will definitely book again.',
        date: '2025-03-08'
      },
      {
        id: 2,
        userName: 'Jessica Williams',
        rating: 4,
        comment: 'Very impressive car with great acceleration. The tech features are fantastic, though I missed some of the traditional luxury touches.',
        date: '2025-02-18'
      }
    ],
    carFeatures: [
      '15 MPG',
      '2023 Model',
      '₹12,450/day',
      '4 passengers'
    ]
  },
  {
    id: 6,
    name: 'Range Rover Autobiography',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
    rating: 4.9,
    description: 'The Range Rover Autobiography represents the height of British luxury and capability. This premium SUV offers exceptional comfort both on and off-road, with an interior that rivals the finest luxury sedans.',
    features: [
      'Semi-aniline leather seats',
      'Executive Class rear seating',
      'Meridian™ Signature Sound System',
      'All-terrain capability',
      'Sliding panoramic roof',
      'Configurable ambient lighting',
      'Activity Key',
      'Head-up display'
    ],
    pricePerKm: 5.2,
    baseFare: 25,
    reviews: [
      {
        id: 1,
        userName: 'William Parker',
        rating: 5,
        comment: 'The ultimate luxury SUV experience. Commanding on the road yet incredibly refined inside. Worth every penny.',
        date: '2025-03-14'
      },
      {
        id: 2,
        userName: 'Olivia Thompson',
        rating: 5,
        comment: 'Absolutely loved the Range Rover. The elevated seating position gives you a great view, and the interior is simply stunning.',
        date: '2025-02-22'
      }
    ],
    carFeatures: [
      '15 MPG',
      '2023 Model',
      '₹12,450/day',
      '4 passengers'
    ]
  },
  {
    id: 7,
    name: 'Lexus LS',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    rating: 4.7,
    description: 'The Lexus LS exemplifies Japanese luxury with meticulous craftsmanship and attention to detail. This flagship sedan offers exceptional comfort with innovative features inspired by traditional Japanese aesthetics.',
    features: [
      'Hand-pleated door panels',
      'Kiriko glass accents',
      'Mark Levinson audio system',
      'Shiatsu massage seats',
      'Climate Concierge',
      'Noise-reducing wheels',
      'Adaptive Variable Suspension',
      'Ottoman rear seats'
    ],
    pricePerKm: 4.5,
    baseFare: 18,
    reviews: [
      {
        id: 1,
        userName: 'Daniel Kim',
        rating: 5,
        comment: 'The craftsmanship in the Lexus LS is extraordinary. So many thoughtful details and the ride is incredibly smooth and quiet.',
        date: '2025-03-07'
      },
      {
        id: 2,
        userName: 'Michelle Wong',
        rating: 4.5,
        comment: 'Excellent service and a beautiful car. The Japanese-inspired interior elements are unique and elegant.',
        date: '2025-02-17'
      }
    ],
    carFeatures: [
      '15 MPG',
      '2023 Model',
      '₹12,450/day',
      '4 passengers'
    ]
  },
  {
    id: 8,
    name: 'Bentley Continental GT',
    category: 'Ultra Luxury',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    rating: 5.0,
    description: 'The Bentley Continental GT represents the pinnacle of British luxury grand touring. This handcrafted masterpiece combines exhilarating performance with unmatched refinement and prestige.',
    features: [
      'Handcrafted interior',
      'Rotating dashboard display',
      'Naim for Bentley audio system',
      'Diamond-in-Diamond quilting',
      'Mulliner Driving Specification',
      'Bentley Dynamic Ride',
      'Mood lighting',
      'Breitling clock'
    ],
    pricePerKm: 6.5,
    baseFare: 35,
    reviews: [
      {
        id: 1,
        userName: 'Jonathan Reynolds',
        rating: 5,
        comment: 'An extraordinary experience. The Bentley Continental GT is automotive art - the craftsmanship is beyond compare.',
        date: '2025-03-18'
      },
      {
        id: 2,
        userName: 'Victoria Hughes',
        rating: 5,
        comment: 'Worth every penny for a special occasion. The attention to detail is remarkable and the drive is both powerful and refined.',
        date: '2025-03-01'
      }
    ],
    carFeatures: [
      '15 MPG',
      '2023 Model',
      '₹12,450/day',
      '4 passengers'
    ]
  }
];