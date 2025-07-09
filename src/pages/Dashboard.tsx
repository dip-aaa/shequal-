import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  TrendingUp, 
  ShoppingBag, 
  DollarSign, 
  Users, 
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  EyeOff,
  Sparkles,
  Gift,
  Target,
  Zap
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const spendingData = [
    { month: 'Jan', spent: 2400, saved: 400 },
    { month: 'Feb', spent: 1398, saved: 602 },
    { month: 'Mar', spent: 9800, saved: 1200 },
    { month: 'Apr', spent: 3908, saved: 892 },
    { month: 'May', spent: 4800, saved: 1200 },
    { month: 'Jun', spent: 3800, saved: 1400 },
  ];

  const categoryData = [
    { name: 'Fashion', value: 35, color: '#10B981' },
    { name: 'Beauty', value: 25, color: '#F59E0B' },
    { name: 'Health', value: 20, color: '#8B5CF6' },
    { name: 'Food', value: 20, color: '#EF4444' },
  ];

  const recentTransactions = [
    { id: 1, type: 'purchase', amount: -124.99, merchant: 'Sephora', category: 'Beauty', time: '2 hours ago', savings: 25.99 },
    { id: 2, type: 'cashback', amount: 15.50, merchant: 'Nike Deal', category: 'Fashion', time: '4 hours ago', savings: 0 },
    { id: 3, type: 'purchase', amount: -89.99, merchant: 'Target', category: 'Health', time: '1 day ago', savings: 12.00 },
    { id: 4, type: 'purchase', amount: -45.00, merchant: 'Starbucks', category: 'Food', time: '2 days ago', savings: 5.50 },
  ];

  const dealCards = [
    { 
      id: 1, 
      brand: 'Nike', 
      discount: '40%', 
      expires: '2 days', 
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
      category: 'Fashion'
    },
    { 
      id: 2, 
      brand: 'Sephora', 
      discount: '25%', 
      expires: '5 hours', 
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop',
      category: 'Beauty'
    },
    { 
      id: 3, 
      brand: 'Lululemon', 
      discount: '30%', 
      expires: '1 day', 
      image: 'https://images.unsplash.com/photo-1506629905607-24218193fde4?w=100&h=100&fit=crop',
      category: 'Activewear'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: { duration: 2, repeat: Infinity }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 lg:p-8 space-y-6 bg-gradient-to-br from-emerald-50 to-teal-50 min-h-screen"
    >
      {/* Welcome Header */}
      <motion.div variants={cardVariants} className="text-center mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Welcome back, Sophia! 
          <motion.span 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block ml-2"
          >
            👋
          </motion.span>
        </h1>
        <p className="text-gray-600">
          {currentTime.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={cardVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Balance Card */}
        <motion.div 
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.15)" }}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-2xl text-white relative overflow-hidden"
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
            <div className="flex items-center justify-between mb-4">
              <CreditCard className="w-8 h-8" />
              <button 
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              >
                {balanceVisible ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              </button>
            </div>
            <h3 className="text-lg opacity-90 mb-2">Total Balance</h3>
            <p className="text-3xl font-bold">
              {balanceVisible ? '$12,847.50' : '••••••'}
            </p>
            <div className="flex items-center mt-3 text-emerald-100">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span className="text-sm">+2.5% from last month</span>
            </div>
          </div>
        </motion.div>

        {/* Savings Card */}
        <motion.div 
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)" }}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-amber-100 rounded-xl">
              <Target className="w-6 h-6 text-amber-600" />
            </div>
            <motion.div variants={pulseVariants} animate="pulse">
              <Sparkles className="w-5 h-5 text-amber-500" />
            </motion.div>
          </div>
          <h3 className="text-gray-600 mb-2">Total Saved</h3>
          <p className="text-2xl font-bold text-gray-800">$3,247.89</p>
          <div className="flex items-center mt-3 text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span className="text-sm">+12% this month</span>
          </div>
        </motion.div>

        {/* Deals Used Card */}
        <motion.div 
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)" }}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Gift className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-xs text-purple-600 font-medium">ACTIVE</div>
            </div>
          </div>
          <h3 className="text-gray-600 mb-2">Deals Used</h3>
          <p className="text-2xl font-bold text-gray-800">47</p>
          <div className="flex items-center mt-3 text-purple-600">
            <span className="text-sm">23 deals available</span>
          </div>
        </motion.div>

        {/* Community Card */}
        <motion.div 
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(239, 68, 68, 0.15)" }}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-rose-100 rounded-xl">
              <Users className="w-6 h-6 text-rose-600" />
            </div>
            <div className="flex">
              {[1,2,3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                  className="w-2 h-2 bg-rose-400 rounded-full ml-1"
                />
              ))}
            </div>
          </div>
          <h3 className="text-gray-600 mb-2">Community Rank</h3>
          <p className="text-2xl font-bold text-gray-800">#127</p>
          <div className="flex items-center mt-3 text-rose-600">
            <Star className="w-4 h-4 mr-1 fill-current" />
            <span className="text-sm">Top 15% saver</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Spending Trend */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -2 }}
          className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Spending Overview</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium">6M</button>
              <button className="px-3 py-1 text-gray-500 hover:bg-gray-100 rounded-lg text-sm">1Y</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={spendingData}>
              <defs>
                <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '12px', 
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)' 
                }} 
              />
              <Area type="monotone" dataKey="spent" stroke="#10B981" fillOpacity={1} fill="url(#colorSpent)" strokeWidth={3} />
              <Area type="monotone" dataKey="saved" stroke="#F59E0B" fillOpacity={1} fill="url(#colorSaved)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Category Breakdown */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -2 }}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Spending by Category</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm text-gray-600">{category.name}</span>
                </div>
                <span className="text-sm font-semibold">{category.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Hot Deals & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hot Deals */}
        <motion.div 
          variants={cardVariants}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">🔥 Hot Deals</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
            >
              View All
            </motion.button>
          </div>
          <div className="space-y-4">
            {dealCards.map((deal) => (
              <motion.div
                key={deal.id}
                whileHover={{ x: 5, boxShadow: "0 5px 20px rgba(0,0,0,0.1)" }}
                className="flex items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100"
              >
                <img 
                  src={deal.image} 
                  alt={deal.brand}
                  className="w-12 h-12 rounded-lg object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-800">{deal.brand}</h4>
                    <span className="bg-emerald-500 text-white px-2 py-1 rounded-lg text-sm font-bold">
                      {deal.discount} OFF
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{deal.category}</p>
                  <p className="text-xs text-emerald-600 font-medium">Expires in {deal.expires}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div 
          variants={cardVariants}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Recent Activity</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
            >
              View All
            </motion.button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <motion.div
                key={transaction.id}
                whileHover={{ x: 3 }}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-3 ${
                    transaction.type === 'cashback' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-rose-100 text-rose-600'
                  }`}>
                    {transaction.type === 'cashback' ? (
                      <ArrowUpRight className="w-5 h-5" />
                    ) : (
                      <ArrowDownRight className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{transaction.merchant}</h4>
                    <p className="text-sm text-gray-600">{transaction.time}</p>
                    {transaction.savings > 0 && (
                      <p className="text-xs text-emerald-600 font-medium">
                        Saved ${transaction.savings}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${
                    transaction.amount > 0 ? 'text-green-600' : 'text-gray-800'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div 
        variants={cardVariants}
        className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-2xl text-white"
      >
        <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: ShoppingBag, label: 'Browse Deals', color: 'bg-white/20 hover:bg-white/30' },
            { icon: TrendingUp, label: 'View Analytics', color: 'bg-white/20 hover:bg-white/30' },
            { icon: DollarSign, label: 'Add Income', color: 'bg-white/20 hover:bg-white/30' },
            { icon: Zap, label: 'Set Goals', color: 'bg-white/20 hover:bg-white/30' },
          ].map((action, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${action.color} p-4 rounded-xl flex flex-col items-center transition-all duration-200`}
            >
              <action.icon className="w-6 h-6 mb-2" />
              <span className="text-sm font-medium">{action.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
