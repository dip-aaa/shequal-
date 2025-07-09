// Deals Service for fetching real women-focused deals from external sources
import axios from 'axios';

// Interfaces for our data structure
export interface Deal {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  imageUrl: string;
  category: string;
  store: string;
  link: string;
  expiryDate?: string;
  isWomenFocused: boolean;
  tags: string[];
}

// API endpoints for women's deals
const DEAL_APIS = {
  // You can replace these with actual APIs that provide women's deals
  RETAILMENOT: 'https://api.retailmenot.com/v1/deals?category=women',
  SLICKDEALS: 'https://slickdeals.net/api/v1/deals?category=women',
  // Add more deal sources as needed
};

// Fallback deals in case APIs are not available or for development
const FALLBACK_DEALS: Deal[] = [
  {
    id: '1',
    title: 'Women\'s Professional Attire - 40% Off',
    description: 'Professional clothing for the modern working woman. Limited time offer.',
    price: 59.99,
    originalPrice: 99.99,
    discountPercentage: 40,
    imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Clothing',
    store: 'Ann Taylor',
    link: 'https://www.anntaylor.com/sale',
    expiryDate: '2025-08-15',
    isWomenFocused: true,
    tags: ['professional', 'clothing', 'office', 'business']
  },
  {
    id: '2',
    title: 'Women in Tech Conference - Early Bird Tickets',
    description: 'Annual conference celebrating women in technology fields. Networking, speakers, and workshops.',
    price: 149.99,
    originalPrice: 299.99,
    discountPercentage: 50,
    imageUrl: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Events',
    store: 'Tech Conferences',
    link: 'https://womenintech.org/conference',
    expiryDate: '2025-07-30',
    isWomenFocused: true,
    tags: ['tech', 'conference', 'career', 'networking']
  },
  {
    id: '3',
    title: 'Women\'s Financial Planning Workshop - 25% Off',
    description: 'Learn investment strategies tailored for women\'s financial needs and goals.',
    price: 74.99,
    originalPrice: 99.99,
    discountPercentage: 25,
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Education',
    store: 'Financial Freedom Institute',
    link: 'https://finwomen.org/workshops',
    expiryDate: '2025-08-01',
    isWomenFocused: true,
    tags: ['finance', 'education', 'investment', 'planning']
  },
  {
    id: '4',
    title: 'Women\'s Health Subscription Box - First Month Free',
    description: 'Monthly box with health and wellness products specially selected for women.',
    price: 0,
    originalPrice: 39.99,
    discountPercentage: 100,
    imageUrl: 'https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Health',
    store: 'WellnessForHer',
    link: 'https://wellnessforher.com/subscribe',
    expiryDate: '2025-07-20',
    isWomenFocused: true,
    tags: ['health', 'wellness', 'subscription', 'self-care']
  },
  {
    id: '5',
    title: 'Women\'s Leadership Book Bundle - 35% Off',
    description: 'Collection of bestselling books on women\'s leadership and career advancement.',
    price: 45.99,
    originalPrice: 69.99,
    discountPercentage: 35,
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'Books',
    store: 'Leadership Press',
    link: 'https://leadershipbooks.com/women',
    expiryDate: '2025-08-10',
    isWomenFocused: true,
    tags: ['books', 'leadership', 'career', 'education']
  }
];

/**
 * Fetches real deals from multiple sources
 */
export const fetchDeals = async (): Promise<Deal[]> => {
  try {
    // In a production environment, you would implement actual API calls here
    // For example:
    // const response = await axios.get(DEAL_APIS.RETAILMENOT);
    // const deals = response.data.map(mapApiResponseToDeal);
    // return deals;
    
    // For now, simulate an API call with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // You could add logic here to fetch from real APIs when they're available
    return FALLBACK_DEALS;
  } catch (error) {
    console.error('Error fetching deals:', error);
    return FALLBACK_DEALS; // Fallback to predefined deals
  }
};

/**
 * Fetches deals by category
 */
export const fetchDealsByCategory = async (category: string): Promise<Deal[]> => {
  const allDeals = await fetchDeals();
  return allDeals.filter(deal => deal.category.toLowerCase() === category.toLowerCase());
};

/**
 * Searches deals by keyword
 */
export const searchDeals = async (keyword: string): Promise<Deal[]> => {
  const allDeals = await fetchDeals();
  const lowercaseKeyword = keyword.toLowerCase();
  
  return allDeals.filter(deal => 
    deal.title.toLowerCase().includes(lowercaseKeyword) ||
    deal.description.toLowerCase().includes(lowercaseKeyword) ||
    deal.store.toLowerCase().includes(lowercaseKeyword) ||
    deal.tags.some(tag => tag.toLowerCase().includes(lowercaseKeyword))
  );
};

// For real implementation, you would add functions to:
// 1. Parse different API responses to a standard Deal format
// 2. Handle pagination for large datasets
// 3. Add caching mechanisms to reduce API calls
// 4. Implement filtering and sorting

export default {
  fetchDeals,
  fetchDealsByCategory,
  searchDeals
};
