const sampleListings = [
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category:"trending"
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category:"Beachfront"
  },
  
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category:"Mountains"
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category:"Historicalhomes"
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category:"Treehouse"
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category:"Beachfront"
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category:"Cabin"
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category:"trending"
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category:"trending"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category:"trending"
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category:"Historicalhomes"
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category:"trending"
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category:"Cottage"
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category:"Historicalhomes"
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category:"Beachfront"
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category:"Mountains"
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
    category:"trending"
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category:"trending"
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category:"Castles"
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category:"Desert"
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
    category:"Cabin"
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category:"Beachfront"
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category:"Treehouse"
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
    category:"Historicalhomes"
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category:"trending"
  },
  {
    "title": "Luxury Poolside Retreat",
    "description": "Experience unparalleled luxury at this poolside retreat with breathtaking ocean views.",
    "image": {
      "filename": "listingimage1",
      "url": "https://media.istockphoto.com/id/1298305536/photo/woman-relaxing-in-luxury-hotel-in-the-maldives.webp?b=1&s=170667a&w=0&k=20&c=OVebIr9pItNYvpahIQ4hoPS7JUjopz07GqvOSO2NDKo="
    },
    "price": 1500,
    "location": "Maldives",
    "country": "Maldives",
    "category": "Amazing pools"
  },
  {
    "title": "Romantic Poolside Escape",
    "description": "A romantic escape with a private pool, perfect for couples looking for a luxurious getaway.",
    "image": {
      "filename": "listingimage2",
      "url": "https://media.istockphoto.com/id/1364616908/photo/couple-relaxing-in-luxury-hotel-in-the-maldives.webp?b=1&s=170667a&w=0&k=20&c=R777qL95Zirxq_oyRhhcfbdH0_JfcqW7sNy0G_pwwl4="
    },
    "price": 1800,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "category": "Amazing pools"
  },
  {
    "title": "Overwater Pool Villa",
    "description": "Stay in this exclusive overwater villa featuring a private pool and stunning lagoon views.",
    "image": {
      "filename": "listingimage3",
      "url": "https://media.istockphoto.com/id/1310407781/photo/drone-view-of-couple-relaxing-in-overwater-private-villa.webp?b=1&s=170667a&w=0&k=20&c=52njCvF33cf8aNhrae04N_kAgpLlNzOHn_Ea7KOjePs="
    },
    "price": 2000,
    "location": "Tahiti",
    "country": "French Polynesia",
    "category": "Amazing pools"
  },
  {
    "title": "Private Pool Villa",
    "description": "Enjoy a private pool in this luxurious villa, surrounded by crystal clear waters.",
    "image": {
      "filename": "listingimage4",
      "url": "https://media.istockphoto.com/id/1311306725/photo/private-overwater-villa-in-the-maldives.webp?b=1&s=170667a&w=0&k=20&c=aIiAYaaGKua4aHo6QUfQusxbfW70ArqhCTCOAAWYcSg="
    },
    "price": 2200,
    "location": "Seychelles",
    "country": "Seychelles",
    "category": "Amazing pools"
  },
  {
    "title": "Sea Hammock Pool Villa",
    "description": "Relax in a hammock over the sea or in your private pool in this stunning villa.",
    "image": {
      "filename": "listingimage5",
      "url": "https://media.istockphoto.com/id/1327308827/photo/couple-relaxing-on-sea-hammock-in-private-villa.webp?b=1&s=170667a&w=0&k=20&c=kGtAUJQklo0ZPftKs3JSqwK1-jozp1swCq1fWegARjk="
    },
    "price": 2500,
    "location": "Fiji",
    "country": "Fiji",
    "category": "Amazing pools"
  },
  {
    "title": "Exquisite Poolside Resort",
    "description": "An exquisite resort featuring luxurious poolside suites and world-class amenities.",
    "image": {
      "filename": "listingimage6",
      "url": "https://media.istockphoto.com/id/1327412960/photo/young-woman-relaxing-in-luxury-hotel-in-the-maldives.webp?b=1&s=170667a&w=0&k=20&c=jCvz4Rr65JKwU3J4pDvc4OoVFtkt8owe9M-Yjr0Ns_0="
    },
    "price": 2300,
    "location": "Maldives",
    "country": "Maldives",
    "category": "Amazing pools"
  },
  {
    "title": "Private Overwater Bungalow",
    "description": "Stay in a private overwater bungalow with direct access to the pool and ocean.",
    "image": {
      "filename": "listingimage7",
      "url": "https://media.istockphoto.com/id/1311306725/photo/private-overwater-villa-in-the-maldives.webp?b=1&s=170667a&w=0&k=20&c=aIiAYaaGKua4aHo6QUfQusxbfW70ArqhCTCOAAWYcSg="
    },
    "price": 2400,
    "location": "Tahiti",
    "country": "French Polynesia",
    "category": "Amazing pools"
  },
  {
    "title": "Dream Pool House",
    "description": "A dream house with an amazing pool, offering luxury and relaxation in one.",
    "image": {
      "filename": "listingimage8",
      "url": "https://plus.unsplash.com/premium_photo-1661962769148-fbe587e60fb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YW1hemluZyUyMHBvb2xzJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
    },
    "price": 2100,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Amazing pools"
  },
  {
    "title": "Ultimate Pool Paradise",
    "description": "An ultimate paradise featuring a luxurious pool and serene surroundings.",
    "image": {
      "filename": "listingimage9",
      "url": "https://plus.unsplash.com/premium_photo-1686782502878-d965a74429a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFtYXppbmclMjBwb29scyUyMGhvdXNlfGVufDB8fDB8fHww"
    },
    "price": 2700,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Amazing pools"
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category:"Cabin"
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category:"trending"
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
    category:"trending"
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category:"Beach"
  },

  {
    title:"A Comfortable room for couples",
    description:"Background image of teens room interior with comfortable unmade bed and posters on wall",
    image:{
      filename:"listingimage",
      url:"https://media.istockphoto.com/id/1980152091/photo/teen-bedroom-interior-with-posters-on-wall.jpg?s=612x612&w=0&k=20&c=3eL9AmdwSy-73MyZFyZX1sIZEEuL2LSSY8kqDh5vrQ4="

    },
    price:4000,
    location:"Yuganda",
    country:"yuganda",
    category:"Rooms"
  },
  {
    title:"A Neet Clean Room",
    description:"3d render cozy bedroom",
    image:{
      filename:"listingimage",
      url:"https://media.istockphoto.com/id/1125318352/photo/3d-render-cozy-bedroom.jpg?s=1024x1024&w=is&k=20&c=S-n9IqeU_HaoyUOjDvAMvJhJfrepkqxUJES_l3v4r80=",

    },
    price:4500,
    location:"New York",
    country:"USA",
    category:"Rooms"
  },

  {
    title:"A Sleep well Room",
    description:"Most Comfortable room available for family with full facielites",
    image:{
      filename:"listingimage",
      url:"https://media.istockphoto.com/id/1847405068/photo/room-of-teenager-with-computer.jpg?s=612x612&w=0&k=20&c=Bg7mtqKAFHoIJ-5JcEPYKWaNAIYKOWKs453npxDsMPc=",

    },
    price:6000,
    location:"India",
    country:"Mumbai",
    category:"Rooms"
  },
  {
    "title": "Cozy Urban Loft",
    "description": "A beautiful and spacious loft in the heart of the city, perfect for a weekend getaway.",
    "image": {
      "filename": "listingimage1",
      "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 150,
    "location": "New York",
    "country": "USA",
    "category": "Rooms"
  },
  {
    "title": "Seaside Bungalow",
    "description": "Relax in this charming bungalow with a stunning view of the ocean.",
    "image": {
      "filename": "listingimage2",
      "url": "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 200,
    "location": "Malibu",
    "country": "USA",
    "category": "Rooms"
  },
  {
    "title": "Rustic Mountain Cabin",
    "description": "Escape to this rustic cabin in the mountains, surrounded by nature.",
    "image": {
      "filename": "listingimage3",
      "url": "https://plus.unsplash.com/premium_photo-1674676471380-1258cb31b3ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJvb218ZW58MHx8MHx8fDA%3D"
    },
    "price": 180,
    "location": "Aspen",
    "country": "USA",
    "category": "Rooms"
  },
  {
    "title": "Modern Downtown Apartment",
    "description": "Enjoy your stay in this modern apartment located in the downtown area.",
    "image": {
      "filename": "listingimage4",
      "url": "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cm9vbXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 220,
    "location": "San Francisco",
    "country": "USA",
    "category": "Rooms"
  },
  {
    "title": "Charming Country House",
    "description": "Stay in this charming house in the countryside, perfect for a peaceful retreat.",
    "image": {
      "filename": "listingimage5",
      "url": "https://plus.unsplash.com/premium_photo-1678752717095-08cd0bd1d7e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 130,
    "location": "Nashville",
    "country": "USA",
    "category": "Rooms"
  },
  {
    "title": "Luxury Penthouse Suite",
    "description": "Experience luxury in this stunning penthouse suite with a breathtaking view.",
    "image": {
      "filename": "listingimage6",
      "url": "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHJvb218ZW58MHwwfHx8MTcyMDI0NTA2NXwx&ixlib=rb-4.0.3"
    },
    "price": 300,
    "location": "Miami",
    "country": "USA",
    "category": "Rooms"
  },

  {
    "title": "Historic Townhouse",
    "description": "Stay in this beautiful historic townhouse with modern amenities.",
    "image": {
      "filename": "listingimage7",
      "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 250,
    "location": "Boston",
    "country": "USA",
    "category": "Rooms"
  },{
    "title": "Serene Villa",
    "description": "A tranquil villa by the lake, offering breathtaking views and peaceful surroundings.",
    "image": {
      "filename": "listingimage1",
      "url": "https://media.istockphoto.com/id/171259869/photo/villa-sri-lanka.webp?b=1&s=170667a&w=0&k=20&c=gIyBqCAjS6XsTVc2KVkz1Yt2usEAsvYTjehaYwLV_Zc="
    },
    "price": 450,
    "location": "Sri Lanka",
    "country": "Sri Lanka",
    "category": "Lakefronts"
  },
  {
    "title": "Luxury Yacht Marina",
    "description": "Stay in the luxurious yacht marina with stunning sunset views.",
    "image": {
      "filename": "listingimage2",
      "url": "https://media.istockphoto.com/id/1164251450/photo/sunset-at-fort-lauderdale-marina-luxury-yachts-in-las-olas-boulevard-florida-usa.webp?b=1&s=170667a&w=0&k=20&c=FjT955cNEM5mRtyp1adF66Xcb7NZR_1CH-ZXWqqZyjQ="
    },
    "price": 600,
    "location": "Fort Lauderdale",
    "country": "USA",
    "category": "Lakefronts"
  },
  {
    "title": "Wooden Pier Retreat",
    "description": "A retreat with a wooden pier looking out to the lake, forest, and mountains.",
    "image": {
      "filename": "listingimage3",
      "url": "https://media.istockphoto.com/id/1071647280/photo/the-wooden-pier-looks-out-to-the-lake-forest-and-mountain-view-3d-render.webp?b=1&s=170667a&w=0&k=20&c=TQXtZEQvKXljdsWU0V6ZcRJdx6LIjg2kwukKmaBxYyY="
    },
    "price": 500,
    "location": "Lake Tahoe",
    "country": "USA",
    "category": "Lakefronts"
  },
  {
    "title": "Dream House",
    "description": "A dream house with spectacular lakefront views and luxurious amenities.",
    "image": {
      "filename": "listingimage4",
      "url": "https://media.istockphoto.com/id/134212295/photo/dream-house.webp?b=1&s=170667a&w=0&k=20&c=WEOb-tiwpMyGgHZfEobgr5tOJ5oSwOm3BPnSdyQs4-k="
    },
    "price": 800,
    "location": "Lake Como",
    "country": "Italy",
    "category": "Lakefronts"
  },
  {
    "title": "Modern Building by the Pond",
    "description": "An exquisite modern building near a pond at twilight.",
    "image": {
      "filename": "listingimage5",
      "url": "https://media.istockphoto.com/id/505530020/photo/exterior-of-modern-building-near-pond-at-twilight.webp?b=1&s=170667a&w=0&k=20&c=NCh402bQT_BZG1tscSrFDldWzSCH2DOdZUqTfsI4U_c="
    },
    "price": 700,
    "location": "Zurich",
    "country": "Switzerland",
    "category": "Lakefronts"
  },
  {
    "title": "Lakefront Modern House",
    "description": "A luxurious modern house by the lake with stunning architecture.",
    "image": {
      "filename": "listingimage6",
      "url": "https://images.unsplash.com/photo-1720112706010-60904e396177?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxha2Vmcm9udCUyMGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    "price": 550,
    "location": "Oslo",
    "country": "Norway",
    "category": "Lakefronts"
  },
  {
    "title": "Luxury Lakefront Home",
    "description": "A luxurious home located on the lakefront with breathtaking views.",
    "image": {
      "filename": "listingimage7",
      "url": "https://media.istockphoto.com/id/174799353/photo/luxury-home-on-the-lakefront.webp?b=1&s=170667a&w=0&k=20&c=OcCya1MTeTMxLNsx4gUnpZf5V06uujQv7yPqHczwPgg="
    },
    "price": 750,
    "location": "Queenstown",
    "country": "New Zealand",
    "category": "Lakefronts"
  },
  {
    "title": "New Lakefront House",
    "description": "A brand new house with all modern amenities and a beautiful lakefront view.",
    "image": {
      "filename": "listingimage8",
      "url": "https://media.istockphoto.com/id/1393885905/photo/real-estate-agent-showing-a-mature-couple-a-new-house.webp?b=1&s=170667a&w=0&k=20&c=O6ROn4qlooIZo8xb124PcS3A3XncKnDRuASWJb3Jk3Y="
    },
    "price": 650,
    "location": "Toronto",
    "country": "Canada",
    "category": "Lakefronts"
  },
  {
    "title": "Premium Lakefront Residence",
    "description": "Experience luxury at this premium lakefront residence.",
    "image": {
      "filename": "listingimage9",
      "url": "https://plus.unsplash.com/premium_photo-1697729612944-b5b73ea1bf2c?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bGFrZWZyb250JTIwaG91c2VzfGVufDB8MHx8fDE3MjAzMjYwNzV8MQ&ixlib=rb-4.0.3"
    },
    "price": 900,
    "location": "Geneva",
    "country": "Switzerland",
    "category": "Lakefronts"
  },
  {
    "title": "Lakefront Manor",
    "description": "Stay at the majestic lakefront manor with a serene environment.",
    "image": {
      "filename": "listingimage10",
      "url": "https://plus.unsplash.com/premium_photo-1661876575627-92bdd8d9843b?dpr=1&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bGFrZWZyb250JTIwaG91c2VzfGVufDB8MHx8fDE3MjAzMjYwNzV8MQ&ixlib=rb-4.0.3"
    },
    "price": 1000,
    "location": "Lake Bled",
    "country": "Slovenia",
    "category": "Lakefronts"
  }

];

module.exports = { data: sampleListings };