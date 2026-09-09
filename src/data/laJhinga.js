import goanThaali from '../assets/Gallary/Goan-Thaali.jpeg';
import prawnsRawaFry from '../assets/Gallary/Prawns-rawa-fry.jpeg';
import masalaPrawns from '../assets/Gallary/Masala-prawns.jpeg';
import sittingArea from '../assets/Gallary/Sitting-area.jpeg';
import sittingArea2 from '../assets/Gallary/Sitting-area-2.jpeg';
import entrance from '../assets/Gallary/Entrance.jpeg';
import dalMakhni from '../assets/Gallary/Dal-makhni.jpeg';
import orangeJuice from '../assets/Gallary/Orange-juice.jpeg';
import greenAppleJuice from '../assets/Gallary/Green-apple-juice.jpeg';
import todaySpecialMenu from '../assets/Gallary/today-special-menu.jpeg';
import taquila from '../assets/Gallary/taquila.jpeg';

export const laJhingaData = {
  brandId: 'lajhinga',
  brandName: 'La Jhinga',
  fullName: 'La Jhinga | Seafood | Cafe',
  badge: 'Coastal Seafood & Open-Air Cafe',
  tagline: 'Fresh From The Sea. Made For The Moment.',
  heroSubtitle: 'An open-air coastal cafe near Palolem Beach serving fresh seafood, Goan favourites and global flavours.',
  location: 'Near Palolem Beach (Beach Road / T-Junction), Palolem, Goa',
  shortLocation: 'Palolem Beach, South Goa',
  phone: '8287696969',
  phoneDisplay: '+91 82876 96969',
  rating: '4.7',
  reviewCount: '408',
  priceRange: '₹₹ - ₹₹₹',
  timings: '11:00 AM – 11:30 PM (Daily)',
  googleMapsUrl: 'https://maps.google.com/?q=La+Jhinga+Seafood+Cafe+Palolem+Goa',
  sisterBrandUrl: '../9pm',
  instagram: {
    handle: '@lajhingagoa',
    url: 'https://www.instagram.com/la_jhinga/?hl=en',
    followers: '9.2K',
    tagline: 'Taste the Coast'
  },
  whatsapp: 'https://wa.me/918287696969?text=Hi%20La%20Jhinga%2C%20I%20would%20like%20to%20reserve%20a%20table',
  
  heroStats: [
    { label: 'Google Rating', value: '4.7 ★' },
    { label: 'Verified Reviews', value: '408' },
    { label: 'Cuisine Styles', value: '4 Global' },
    { label: 'Ambience', value: 'Open-Air Coastal' }
  ],

  seafoodHero: {
    title: 'Fresh, Thoughtfully Prepared Seafood',
    subtitle: 'THE CATCH OF PALOLEM',
    description: 'Seafood is the beating heart of La Jhinga. From silver pomfrets grilled with aromatic Goan recheado masala to jumbo king prawns in golden garlic butter, our chefs celebrate coastal treasures with authentic coastal culinary pride.',
    highlights: [
      {
        id: 'pomfret',
        name: 'Whole Butter Garlic or Recheado Pomfret',
        desc: 'Fresh silver pomfret shallow fried or tandoor roasted with authentic homemade Goan spices.',
        tag: 'House Special'
      },
      {
        id: 'prawns',
        name: 'Tiger Prawns in Lemon Butter & Herb Crust',
        desc: 'Plump succulent tiger prawns glazed in melted butter, roasted garlic, and garden parsley.',
        tag: 'Guest Favourite'
      },
      {
        id: 'tandoori-catch',
        name: 'Clay Oven Tandoori Fish & Calamari',
        desc: 'Charred to smoky perfection with mustard marinade, crushed coriander seeds, and mint salad.',
        tag: 'Smoky & Tender'
      },
      {
        id: 'curry',
        name: 'Traditional Goan Coconut Fish Curry',
        desc: 'Slow-simmered in freshly squeezed coconut milk, raw mango, and hand-ground kokum.',
        tag: 'Heritage Recipe'
      }
    ]
  },

  multiCuisine: {
    title: 'A Culinary Journey Across Continents',
    subtitle: 'MULTI-CUISINE FLAVOURS',
    description: 'While seafood takes center stage, La Jhinga offers a complete multi-cuisine spread crafted for every palate in your group.',
    cuisines: [
      {
        id: 'goan',
        name: 'Goan Coastal Heritage',
        desc: 'Authentic Goan fish thali, spicy prawn balchão, pork vindaloo, and warm poi bread straight from local bakeries.',
        accent: 'Coconut, Kokum & Local Spices',
        image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'indian',
        name: 'North Indian & Tandoor',
        desc: 'Velvety butter chicken, aromatic dum biryanis, slow-cooked dal makhani, and sizzling tandoori platters.',
        accent: 'Royal Gravies & Clay Oven Breads',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'asian',
        name: 'Asian & Thai Specials',
        desc: 'Fragrant Thai green & red curries, crispy calamari pepper fry, wok-tossed hakka noodles, and dim sums.',
        accent: 'Lemongrass, Galangal & Chili Soy',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'mexican-continental',
        name: 'Mexican & Continental',
        desc: 'Loaded coastal fish tacos, fresh guacamole nachos, creamy pasta alfredo, wood-charred pizzas, and grilled steaks.',
        accent: 'Crisp Crusts & Fresh Herbs',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80'
      }
    ]
  },

  openAirExperience: {
    title: 'Dine With The Coastal Breeze',
    subtitle: 'OPEN-AIR PALOLEM AMBIENCE',
    description: 'La Jhinga is intentionally designed as an open-air cafe, welcoming the gentle salty sea breeze and swaying palm shadows of Palolem. Relax under woven cane lamps, surrounded by tropical greenery, where the open sky sets the perfect backdrop for long leisurely lunches and candle-lit dinners.',
    highlights: [
      { title: 'Natural Coastal Airflow', desc: 'Open-sided architecture designed to catch the refreshing South Goa sea breeze.' },
      { title: 'Lush Tropical Canopy', desc: 'Surrounded by palm trees and natural wooden accents that blend with the landscape.' },
      { title: 'Day-to-Dusk Mood', desc: 'Sun-dappled and relaxed by day, romantic and warm-toned with glowing lanterns by night.' }
    ]
  },

  liveMusic: {
    title: 'Good Food. Coastal Air. Live Music.',
    subtitle: 'ACOUSTIC & EVENING SESSIONS',
    description: 'On select evenings, La Jhinga comes alive with soul-stirring acoustic melodies, coastal indie jazz, and soothing rhythms that elevate your dining experience without overpowering conversation.',
    scheduleNote: 'Live music sessions are held on scheduled evenings. Inquire at your table or call ahead for today\'s artist lineup.',
    features: [
      { name: 'Acoustic Sunset Sets', time: '6:30 PM - 8:30 PM', desc: 'Gentle guitar melodies and vocal harmonies accompanying the golden hour.' },
      { name: 'Coastal Indie & Jazz', time: '8:30 PM - 10:30 PM', desc: 'Rhythmic soul and beachside blues under the canopy of stars.' }
    ]
  },

  hospitality: {
    title: 'Warm Hospitality, Served With Every Table',
    subtitle: 'THE LA JHINGA FAMILY',
    description: 'Generations of Goan warmth guide our service. Our team is known for genuine smiles, attentive table care, and helpful recommendations for both first-time seafood explorers and seasoned foodies.',
    quote: '"The staff at La Jhinga treated us with such warmth and care. They recommended the freshest catch of the day, and every dish was packed with authentic flavor."',
    highlights: [
      { title: 'Personal Catch Recommendations', desc: 'Our hosts happily show you the day\'s fish selection and recommend the best cooking styles.' },
      { title: 'Family & Group Friendly', desc: 'Spacious open seating comfortably welcoming families, couples, and large traveler groups.' },
      { title: 'Attentive, Relaxed Service', desc: 'We take pride in making your dining time feel peaceful, unrushed, and truly memorable.' }
    ]
  },

  reviews: [
    {
      id: 1,
      name: 'Ananya Deshmukh',
      rating: 5,
      date: '1 week ago',
      text: 'The best seafood we had in Palolem! The butter garlic prawns were massive and cooked to perfection. The open-air setting with palm trees and soft live music made our dinner magical.',
      tag: 'Fresh Seafood'
    },
    {
      id: 2,
      name: 'David Miller',
      rating: 5,
      date: '3 weeks ago',
      text: 'Outstanding multi-cuisine menu. My wife loved the Goan fish curry while I ordered the chicken biryani and fish tacos. Everything was bursting with flavor. 4.7 stars well deserved!',
      tag: 'Multi-Cuisine'
    },
    {
      id: 3,
      name: 'Pooja Kashyap',
      rating: 5,
      date: '1 month ago',
      text: 'Wonderful open-air cafe near Palolem Beach. Super hospitable staff who gave great recommendations. Clean, fresh, and delightfully relaxed atmosphere. A must-visit in Canacona!',
      tag: 'Open-Air Vibe'
    },
    {
      id: 4,
      name: 'Marcus Weber',
      rating: 5,
      date: '2 months ago',
      text: 'Fresh pomfret recheado was out of this world! Accompanied by cold drinks and a lovely acoustic singer. We ended up coming back twice during our holiday.',
      tag: 'Live Music & Food'
    }
  ],

  gallery: [
    {
      id: 1,
      category: 'Seafood',
      title: 'Goan Thaali',
      image: goanThaali,
      caption: 'Authentic Goan thaali with fresh coastal flavours.'
    },
    {
      id: 2,
      category: 'Seafood',
      title: 'Prawns Rawa Fry',
      image: prawnsRawaFry,
      caption: 'Crispy semicolon-coated prawns with a Goan twist.'
    },
    {
      id: 3,
      category: 'Seafood',
      title: 'Masala Prawns',
      image: masalaPrawns,
      caption: 'Spicy masala prawns tossed in aromatic coastal spices.'
    },
    {
      id: 4,
      category: 'North Indian',
      title: 'Dal Makhni',
      image: dalMakhni,
      caption: 'Rich and creamy dal makhni slow-cooked to perfection.'
    },
    {
      id: 5,
      category: 'Restaurant',
      title: 'Sitting Area',
      image: sittingArea,
      caption: 'Comfortable open-air seating with coastal vibes.'
    },
    {
      id: 6,
      category: 'Restaurant',
      title: 'Sitting Area',
      image: sittingArea2,
      caption: 'Relaxed dining space perfect for gatherings.'
    },
    {
      id: 7,
      category: 'Restaurant',
      title: 'Entrance',
      image: entrance,
      caption: 'Welcome to La Jhinga — coastal seafood and cafe.'
    },
    {
      id: 8,
      category: 'Beverages',
      title: 'Fresh Orange Juice',
      image: orangeJuice,
      caption: 'Refreshing freshly squeezed orange juice.'
    },
    {
      id: 9,
      category: 'Beverages',
      title: 'Green Apple Juice',
      image: greenAppleJuice,
      caption: 'Cool and refreshing green apple juice.'
    },
    {
      id: 10,
      category: 'Specials',
      title: "Today's Special Menu",
      image: todaySpecialMenu,
      caption: "Check out today's special dishes crafted by our chef."
    },
    {
      id: 11,
      category: 'Beverages',
      title: 'Tequila',
      image: taquila,
      caption: 'Premium tequila served with a coastal twist.'
    }
  ]
};
