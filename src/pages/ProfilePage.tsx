import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Edit3, 
  Camera, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Star,
  Award,
  Target,
  TrendingUp,
  ShoppingBag,
  Heart,
  Share2,
  Settings,
  LogOut,
  Check,
  X,
  Upload,
  Badge,
  Gift,
  Crown,
  Sparkles,
  Users,
  Activity,
  Bookmark
} from 'lucide-react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Sophia Johnson',
    email: 'sophia.johnson@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'Passionate about finding the best deals and helping other women save money! 💸✨',
    joinDate: 'March 2023',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face'
  });
  const [tempData, setTempData] = useState(profileData);
  const [activeTab, setActiveTab] = useState('overview');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const stats = [
    { label: 'Total Saved', value: '$3,247', icon: Target, color: 'emerald' },
    { label: 'Deals Used', value: '47', icon: Gift, color: 'purple' },
    { label: 'Community Rank', value: '#127', icon: Users, color: 'amber' },
    { label: 'Badges Earned', value: '12', icon: Award, color: 'blue' },
  ];

  const achievements = [
    { 
      id: 1, 
      title: 'Smart Saver', 
      description: 'Saved $500+ in a single month', 
      icon: Target, 
      earned: true, 
      date: '2024-06-15',
      rarity: 'gold'
    },
    { 
      id: 2, 
      title: 'Deal Hunter', 
      description: 'Used 20+ deals in one month', 
      icon: ShoppingBag, 
      earned: true, 
      date: '2024-05-22',
      rarity: 'silver'
    },
    { 
      id: 3, 
      title: 'Community Leader', 
      description: 'Referred 10+ friends to the platform', 
      icon: Users, 
      earned: true, 
      date: '2024-04-10',
      rarity: 'gold'
    },
    { 
      id: 4, 
      title: 'Trend Setter', 
      description: 'First to discover 5 trending deals', 
      icon: TrendingUp, 
      earned: false, 
      progress: 60,
      rarity: 'diamond'
    },
    { 
      id: 5, 
      title: 'VIP Member', 
      description: 'Maintain premium status for 6 months', 
      icon: Crown, 
      earned: false, 
      progress: 75,
      rarity: 'diamond'
    },
  ];

  const favoriteDeals = [
    {
      id: 1,
      brand: 'Nike',
      title: 'Air Max 270 Women\'s Shoes',
      discount: 40,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&h=150&fit=crop',
      saved: 60
    },
    {
      id: 2,
      brand: 'Sephora',
      title: 'Rare Beauty Makeup Set',
      discount: 25,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=150&h=150&fit=crop',
      saved: 22.50
    },
    {
      id: 3,
      brand: 'Lululemon',
      title: 'Align High-Rise Leggings',
      discount: 30,
      image: 'https://images.unsplash.com/photo-1506629905607-24218193fde4?w=150&h=150&fit=crop',
      saved: 38.40
    },
  ];

  const recentActivity = [
    { id: 1, action: 'Saved $25.99 on Nike Air Max', time: '2 hours ago', type: 'savings' },
    { id: 2, action: 'Earned "Smart Saver" badge', time: '1 day ago', type: 'achievement' },
    { id: 3, action: 'Referred friend Sarah', time: '3 days ago', type: 'referral' },
    { id: 4, action: 'Bookmarked Sephora deal', time: '5 days ago', type: 'bookmark' },
  ];

  const handleSave = () => {
    setProfileData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setTempData({ ...tempData, avatar: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'gold': return 'from-yellow-400 to-orange-500';
      case 'silver': return 'from-gray-300 to-gray-500';
      case 'diamond': return 'from-blue-400 to-purple-600';
      default: return 'from-gray-300 to-gray-500';
    }
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
      {/* Profile Header */}
      <motion.div 
        variants={cardVariants}
        className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white mb-8 relative overflow-hidden"
      >
        <motion.div 
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0"
        />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img 
                  src={isEditing ? tempData.avatar : profileData.avatar}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white/30 object-cover"
                />
                {isEditing && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                  >
                    <Camera className="w-4 h-4" />
                  </motion.button>
                )}
              </motion.div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              {/* Status Badge */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-full"
              >
                <Crown className="w-4 h-4 text-white" />
              </motion.div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              {isEditing ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={tempData.name}
                    onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                    className="text-2xl font-bold bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 text-white placeholder-white/70"
                    placeholder="Your name"
                  />
                  <textarea
                    value={tempData.bio}
                    onChange={(e) => setTempData({ ...tempData, bio: e.target.value })}
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 text-white placeholder-white/70 resize-none"
                    rows={2}
                    placeholder="Tell us about yourself"
                  />
                </div>
              ) : (
                <div>
                  <h1 className="text-3xl font-bold mb-2">{profileData.name}</h1>
                  <p className="text-emerald-100 mb-4">{profileData.bio}</p>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-emerald-100">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Joined {profileData.joinDate}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  <span>VIP Member</span>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSave}
                    className="bg-white text-emerald-600 px-4 py-2 rounded-lg font-medium hover:bg-emerald-50 transition-colors flex items-center"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Save
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCancel}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors flex items-center"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </motion.button>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(true)}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/30 transition-colors flex items-center"
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={cardVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg text-center"
          >
            <div className={`inline-flex p-3 bg-${stat.color}-100 rounded-xl mb-3`}>
              <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</p>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Tabs */}
      <motion.div variants={cardVariants} className="mb-8">
        <div className="flex space-x-1 bg-white p-1 rounded-xl border border-gray-200">
          {[
            { id: 'overview', label: 'Overview', icon: User },
            { id: 'achievements', label: 'Achievements', icon: Award },
            { id: 'favorites', label: 'Favorites', icon: Heart },
            { id: 'activity', label: 'Activity', icon: Activity },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Contact Information */}
            <motion.div 
              variants={cardVariants}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">{profileData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">{profileData.phone}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">{profileData.location}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div 
              variants={cardVariants}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Settings, label: 'Settings', color: 'emerald' },
                  { icon: Share2, label: 'Share Profile', color: 'blue' },
                  { icon: Bookmark, label: 'Saved Deals', color: 'purple' },
                  { icon: LogOut, label: 'Sign Out', color: 'red' },
                ].map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-${action.color}-50 border border-${action.color}-100 rounded-xl hover:bg-${action.color}-100 transition-colors text-center`}
                  >
                    <action.icon className={`w-6 h-6 text-${action.color}-600 mx-auto mb-2`} />
                    <span className={`text-${action.color}-700 text-sm font-medium`}>{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === 'achievements' && (
          <motion.div
            key="achievements"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-white p-6 rounded-2xl border shadow-lg relative overflow-hidden ${
                  achievement.earned ? 'border-emerald-200' : 'border-gray-200'
                }`}
              >
                {/* Rarity Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getRarityColor(achievement.rarity)}`} />
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${achievement.earned ? 'bg-emerald-100' : 'bg-gray-100'}`}>
                    <achievement.icon className={`w-6 h-6 ${achievement.earned ? 'text-emerald-600' : 'text-gray-400'}`} />
                  </div>
                  {achievement.earned && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                  )}
                </div>
                
                <h4 className={`font-semibold mb-2 ${achievement.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                  {achievement.title}
                </h4>
                <p className={`text-sm mb-4 ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                  {achievement.description}
                </p>
                
                {achievement.earned ? (
                  <div className="flex items-center text-emerald-600 text-sm">
                    <Check className="w-4 h-4 mr-2" />
                    <span>Earned {achievement.date}</span>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${achievement.progress}%` }}
                        transition={{ duration: 1 }}
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'favorites' && (
          <motion.div
            key="favorites"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {favoriteDeals.map((deal) => (
              <motion.div
                key={deal.id}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src={deal.image} 
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-600 font-medium text-sm">{deal.brand}</span>
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg text-sm font-bold">
                      {deal.discount}% OFF
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{deal.title}</h4>
                  <p className="text-emerald-600 font-semibold">Saved ${deal.saved}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'activity' && (
          <motion.div
            key="activity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <motion.div
                  key={activity.id}
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-4 ${
                    activity.type === 'savings' ? 'bg-emerald-100 text-emerald-600' :
                    activity.type === 'achievement' ? 'bg-amber-100 text-amber-600' :
                    activity.type === 'referral' ? 'bg-blue-100 text-blue-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {activity.type === 'savings' ? <Target className="w-5 h-5" /> :
                     activity.type === 'achievement' ? <Award className="w-5 h-5" /> :
                     activity.type === 'referral' ? <Users className="w-5 h-5" /> :
                     <Bookmark className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProfilePage;
