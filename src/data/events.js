export const events = [
  {
    id: 1,
    name: "Tech Innovation Summit 2024",
    date: "2025-06-15",
    time: "10:00 AM - 05:00 PM",
    location: "Silicon Valley Convention Center",
    description: "Join industry leaders and innovators for a day of groundbreaking technology discoveries, networking, and future insights. Featuring keynotes from the best.",
    category: "Technology"
  },
  {
    id: 2,
    name: "Summer Music Festival",
    date: "2025-07-20",
    time: "06:00 PM - 11:00 PM",
    location: "Central Park Amphitheater",
    description: "Experience an unforgettable evening of live music, spectacular performances and amazing vibes. Food and drinks will be available.",
    category: "Entertainment"
  },
  {
    id: 3,
    name: "Startup Pitch Competition",
    date: "2025-08-10",
    time: "04:00 PM - 08:00 PM",
    location: "Innovation Hub Downtown",
    description: "Watch promising startups pitch their ideas to top investors, venture capitalists, and entrepreneurs. Network with funding partners in the startup ecosystem.",
    category: "Business"
  },
  {
    id: 4,
    name: "Food & Wine Expo",
    date: "2025-09-17",
    time: "11:00 AM - 08:00 PM",
    location: "Grand Exhibition Hall",
    description: "Indulge in flavors from renowned chefs, seasonal treats, and premium wines from around the world. Cooking demonstrations and tastings included.",
    category: "Food"
  },
  {
    id: 5,
    name: "Digital Art Workshop",
    date: "2023-05-30",
    time: "01:00 PM - 05:00 PM",
    location: "Creative Arts Studio",
    description: "Learn digital art techniques from professional artists. Participants will practice using digital painting, 3D modeling, and animation tools.",
    category: "Art",
    isPast: true
  },
  {
    id: 6,
    name: "Marketing Trends Conference",
    date: "2024-04-22",
    time: "09:00 AM - 03:00 PM",
    location: "Business Center Plaza",
    description: "Discover the latest marketing trends and strategies. Sessions cover digital marketing, social media, content marketing, branding, and customer engagement.",
    category: "Business",
    isPast: true
  }
];

// Helper functions
export const getUpcomingEvents = () => {
  const currentDate = new Date();
  return events.filter(event => new Date(event.date) >= currentDate);
};

export const getPastEvents = () => {
  const currentDate = new Date();
  return events.filter(event => new Date(event.date) < currentDate);
};

export const getNextEvent = () => {
  const currentDate = new Date();
  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  
  if (upcomingEvents.length === 0) return null;
  
  return upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date))[0];
};
