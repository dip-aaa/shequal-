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
  Tag
} from 'lucide-react';

const DealsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = ['All', 'Fashion', 'Beauty', 'Health', 'Food', 'Electronics', 'Home'];
  const filters = [
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'expiring', label: 'Expiring Soon', icon: Clock },
    { id: 'highest', label: 'Highest Discount', icon: Percent },
    { id: 'newest', label: 'Newest', icon: Sparkles },
  ];

  const deals = [
    {
      id: 1,
      brand: 'Nike',
      title: 'Air Max 270 Women\'s Shoes',
      originalPrice: 150,
      discountPrice: 89.99,
      discount: 40,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
      category: 'Fashion',
      expires: '2 days',
      rating: 4.8,
      reviews: 1247,
      description: 'Comfortable and stylish athletic shoes perfect for everyday wear.',
      isHot: true,
      isExpiring: false,
      saved: 156,
      location: 'Online & In Store'
    },
    {
      id: 2,
      brand: 'Sephora',
      title: 'Rare Beauty Makeup Set',
      originalPrice: 89.99,
      discountPrice: 67.49,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
      category: 'Beauty',
      expires: '5 hours',
      rating: 4.9,
      reviews: 892,
      description: 'Complete makeup collection featuring foundation, lipstick, and more.',
      isHot: true,
      isExpiring: true,
      saved: 234,
      location: 'Online Only'
    },
    {
      id: 3,
      brand: 'Lululemon',
      title: 'Align High-Rise Leggings',
      originalPrice: 128,
      discountPrice: 89.60,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1506629905607-24218193fde4?w=400&h=300&fit=crop',
      category: 'Fashion',
      expires: '1 day',
      rating: 4.7,
      reviews: 2103,
      description: 'Buttery-soft leggings perfect for yoga and everyday comfort.',
      isHot: false,
      isExpiring: false,
      saved: 89,
      location: 'Online & In Store'
    },
    {
      id: 4,
      brand: 'Apple',
      title: 'AirPods Pro (2nd generation)',
      originalPrice: 249,
      discountPrice: 199.99,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop',
      category: 'Electronics',
      expires: '3 days',
      rating: 4.6,
      reviews: 3567,
      description: 'Active noise cancellation and spatial audio technology.',
      isHot: false,
      isExpiring: false,
      saved: 445,
      location: 'Online & In Store'
    },
    {
      id: 5,
      brand: 'Whole Foods',
      title: 'Organic Beauty Bundle',
      originalPrice: 75,
      discountPrice: 45,
      discount: 40,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop',
      category: 'Health',
      expires: '6 hours',
      rating: 4.5,
      reviews: 567,
      description: 'Complete organic skincare routine with natural ingredients.',
      isHot: true,
      isExpiring: true,
      saved: 78,
      location: 'In Store Only'
    },
    {
      id: 6,
      brand: 'Target',
      title: 'Home Decor Collection',
      originalPrice: 199.99,
      discountPrice: 149.99,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      category: 'Home',
      expires: '4 days',
      rating: 4.4,
      reviews: 234,
      description: 'Beautiful home accessories to transform your living space.',
      isHot: false,
      isExpiring: false,
      saved: 123,
      location: 'Online & In Store'
    }
  ];

  const toggleFavorite = (dealId: number) => {
    setFavorites(prev => 
      prev.includes(dealId) 
        ? prev.filter(id => id !== dealId)
        : [...prev, dealId]
    );
  };

  const filteredDeals = deals.filter(deal => {
    const matchesSearch = deal.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deal.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || deal.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
        {filteredDeals.map((deal) => (
          <motion.div
            key={deal.id}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Image Section */}
            <div className="relative">
              <img 
                src={deal.image} 
                alt={deal.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {deal.isHot && (
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center"
                  >
                    <Flame className="w-3 h-3 mr-1" />
                    HOT
                  </motion.div>
                )}
                {deal.isExpiring && (
                  <motion.div 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center"
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    EXPIRING
                  </motion.div>
                )}
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-2 rounded-xl font-bold text-lg">
                {deal.discount}% OFF
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleFavorite(deal.id)}
                  className={`p-2 rounded-full shadow-lg transition-colors ${
                    favorites.includes(deal.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-gray-600 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(deal.id) ? 'fill-current' : ''}`} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:text-emerald-600 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-emerald-600 font-medium text-sm">{deal.brand}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{deal.rating} ({deal.reviews})</span>
                </div>
              </div>

              <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{deal.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{deal.description}</p>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-gray-800">${deal.discountPrice}</span>
                  <span className="text-gray-500 line-through ml-2">${deal.originalPrice}</span>
                </div>
                <div className="text-right">
                  <p className="text-emerald-600 font-semibold">Save ${(deal.originalPrice - deal.discountPrice).toFixed(2)}</p>
                </div>
              </div>

              {/* Details */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Expires in {deal.expires}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{deal.saved} saved</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{deal.location}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  <span>{deal.category}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Get Deal
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <Bookmark className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More */}
      <motion.div 
        variants={cardVariants}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white border border-emerald-200 text-emerald-600 rounded-xl font-medium hover:bg-emerald-50 transition-colors flex items-center mx-auto"
        >
          <Zap className="w-5 h-5 mr-2" />
          Load More Deals
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DealsPage;
