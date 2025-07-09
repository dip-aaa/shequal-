import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Heart, 
  Share2, 
  Star, 
  Clock, 
  MapPin, 
  Percent,
  Zap,
  Flame,
  Gift,
  ShoppingBag,
  Bookmark,
  TrendingUp,
  Users,
  ChevronDown,
  X,
  Sparkles,
  Tag,
  ExternalLink,
  Loader
} from 'lucide-react';
import { fetchDeals, searchDeals, fetchDealsByCategory, Deal } from '../services/dealsService';

const DealsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get unique categories from the deals
  const [categories, setCategories] = useState<string[]>(['All']);

  const filters = [
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'expiring', label: 'Expiring Soon', icon: Clock },
    { id: 'highest', label: 'Highest Discount', icon: Percent },
    { id: 'newest', label: 'Newest', icon: Sparkles },
  ];

  // Load deals on component mount
  useEffect(() => {
    const loadDeals = async () => {
      try {
        setLoading(true);
        const fetchedDeals = await fetchDeals();
        setDeals(fetchedDeals);
        
        // Extract unique categories
        const uniqueCategories = ['All', ...new Set(fetchedDeals.map(deal => deal.category))];
        setCategories(uniqueCategories);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load deals. Please try again later.');
        setLoading(false);
        console.error('Error loading deals:', err);
      }
    };
    
    loadDeals();
  }, []);

  // Handle search
  useEffect(() => {
    const handleSearch = async () => {
      if (searchTerm.trim() === '') {
        // If search is cleared, load all deals
        const fetchedDeals = await fetchDeals();
        setDeals(fetchedDeals);
        return;
      }
      
      try {
        setLoading(true);
        const searchResults = await searchDeals(searchTerm);
        setDeals(searchResults);
        setLoading(false);
      } catch (err) {
        setError('Search failed. Please try again.');
        setLoading(false);
      }
    };
    
    // Debounce search to avoid too many API calls
    const debounceTimer = setTimeout(() => {
      handleSearch();
    }, 500);
    
    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  // Handle category filter
  useEffect(() => {
    const filterByCategory = async () => {
      try {
        setLoading(true);
        
        if (selectedCategory === 'All') {
          const fetchedDeals = await fetchDeals();
          setDeals(fetchedDeals);
        } else {
          const categoryDeals = await fetchDealsByCategory(selectedCategory);
          setDeals(categoryDeals);
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to filter deals. Please try again.');
        setLoading(false);
      }
    };
    
    filterByCategory();
  }, [selectedCategory]);

  const toggleFavorite = (dealId: string) => {
    setFavorites(prev => 
      prev.includes(dealId) 
        ? prev.filter(id => id !== dealId)
        : [...prev, dealId]
    );
  };

  // Apply any additional filtering based on the selected filter
  const filteredDeals = [...deals].sort((a, b) => {
    if (selectedFilter === 'highest') {
      return b.discountPercentage - a.discountPercentage;
    } else if (selectedFilter === 'expiring' && a.expiryDate && b.expiryDate) {
      return new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime();
    } else {
      // Default sort (trending or newest)
      return 0; // In a real app, you'd have a trending score or date created
    }
  });

  // Function to calculate days remaining until expiry
  const getDaysRemaining = (expiryDateStr?: string) => {
    if (!expiryDateStr) return "Limited time";
    
    const expiryDate = new Date(expiryDateStr);
    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 0) return "Expired";
    if (diffDays === 1) return "1 day";
    if (diffDays < 1) {
      const hours = Math.ceil(diffTime / (1000 * 60 * 60));
      return `${hours} hours`;
    }
    return `${diffDays} days`;
  };

  // Function to open the deal in a new tab
  const openDealLink = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 lg:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 min-h-screen"
    >
      {/* Header */}
      <motion.div variants={cardVariants} className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              Exclusive Deals 🛍️
            </h1>
            <p className="text-gray-600">Discover amazing savings just for you</p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-emerald-100 px-4 py-2 rounded-full flex items-center"
            >
              <Flame className="w-4 h-4 text-emerald-600 mr-2" />
              <span className="text-emerald-700 font-medium">{filteredDeals.filter(d => d.isHot).length} Hot Deals</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-amber-100 px-4 py-2 rounded-full flex items-center"
            >
              <Clock className="w-4 h-4 text-amber-600 mr-2" />
              <span className="text-amber-700 font-medium">{filteredDeals.filter(d => d.isExpiring).length} Expiring Soon</span>
            </motion.div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for deals, brands, or products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Filter Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFilters(!showFilters)}
            className="px-6 py-3 bg-emerald-600 text-white rounded-xl flex items-center font-medium hover:bg-emerald-700 transition-colors"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
            <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </motion.button>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-6 bg-white rounded-xl border border-gray-200 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          selectedCategory === category
                            ? 'bg-emerald-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Sort By</h3>
                  <div className="space-y-2">
                    {filters.map((filter) => (
                      <motion.button
                        key={filter.id}
                        whileHover={{ x: 5 }}
                        onClick={() => setSelectedFilter(filter.id)}
                        className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
                          selectedFilter === filter.id
                            ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <filter.icon className="w-5 h-5 mr-3" />
                        {filter.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowFilters(false)}
                className="mt-4 w-full py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                Apply Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Deals Grid */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader size={40} className="text-emerald-500 animate-spin" />
            <span className="ml-3 text-emerald-600 font-medium">Loading deals...</span>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <p className="text-red-600 mb-2">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="text-emerald-600 underline font-medium"
            >
              Try again
            </button>
          </div>
        ) : filteredDeals.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-10 text-center">
            <ShoppingBag size={40} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-1">No deals found</h3>
            <p className="text-gray-500 mb-4">Try adjusting your filters or search term</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredDeals.map(deal => (
              <motion.div
                key={deal.id}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img 
                    src={deal.imageUrl} 
                    alt={deal.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 left-0 m-3">
                    <div className="bg-emerald-500 text-white text-sm font-bold px-2 py-1 rounded-md">
                      {deal.discountPercentage}% OFF
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleFavorite(deal.id)}
                    className="absolute top-0 right-0 m-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"
                  >
                    <Heart 
                      size={18} 
                      className={favorites.includes(deal.id) ? "fill-red-500 text-red-500" : "text-gray-400"} 
                    />
                  </button>
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{deal.title}</h3>
                      <p className="text-gray-500 text-sm">{deal.store}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{deal.description}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-lg font-bold text-gray-800">${deal.price.toFixed(2)}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${deal.originalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center text-amber-500">
                      <Tag size={16} className="mr-1" />
                      <span className="text-sm font-medium">{deal.category}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>Expires in {getDaysRemaining(deal.expiryDate)}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => openDealLink(deal.link)}
                      className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium flex items-center justify-center"
                    >
                      <ExternalLink size={16} className="mr-1.5" />
                      Get Deal
                    </button>
                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <Share2 size={18} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Pagination - For future implementation */}
        {!loading && !error && filteredDeals.length > 0 && (
          <div className="mt-10 flex justify-center">
            <div className="flex space-x-1">
              <button className="px-4 py-2 border border-gray-300 rounded-l-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-emerald-500 text-white border border-emerald-500">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-r-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default DealsPage;
