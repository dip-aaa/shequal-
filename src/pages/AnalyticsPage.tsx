import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  Calendar, 
  BarChart3,
  PieChart,
  Activity,
  Award,
  Zap,
  Eye,
  Download,
  Filter,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Users,
  ShoppingBag,
  CreditCard,
  Gift
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell,
  BarChart,
  Bar,
  RadialBarChart,
  RadialBar,
  Legend
} from 'recharts';

const AnalyticsPage = () => {
  const [timeframe, setTimeframe] = useState('6M');
  const [activeMetric, setActiveMetric] = useState('spending');
  const [isLoading, setIsLoading] = useState(false);

  const timeframes = ['1M', '3M', '6M', '1Y', 'ALL'];

  // Sample data - in real app, this would come from your API
  const monthlyData = [
    { month: 'Jan', spending: 2400, savings: 400, deals: 12, cashback: 45 },
    { month: 'Feb', spending: 1398, savings: 602, deals: 8, cashback: 32 },
    { month: 'Mar', spending: 2800, savings: 800, deals: 15, cashback: 67 },
    { month: 'Apr', spending: 3908, savings: 892, deals: 18, cashback: 89 },
    { month: 'May', spending: 4800, savings: 1200, deals: 22, cashback: 125 },
    { month: 'Jun', spending: 3800, savings: 1400, deals: 19, cashback: 156 },
  ];

  const categoryData = [
    { name: 'Fashion', value: 35, amount: 1200, color: '#10B981' },
    { name: 'Beauty', value: 25, amount: 850, color: '#F59E0B' },
    { name: 'Health', value: 20, amount: 680, color: '#8B5CF6' },
    { name: 'Food', value: 15, amount: 510, color: '#EF4444' },
    { name: 'Electronics', value: 5, amount: 170, color: '#3B82F6' },
  ];

  const goalData = [
    { name: 'Monthly Savings', current: 1400, target: 1500, percentage: 93 },
    { name: 'Deal Usage', current: 19, target: 25, percentage: 76 },
    { name: 'Cashback Earned', current: 156, target: 200, percentage: 78 },
  ];

  const comparisonData = [
    { category: 'Fashion', you: 35, community: 28 },
    { category: 'Beauty', you: 25, community: 32 },
    { category: 'Health', you: 20, community: 18 },
    { category: 'Food', you: 15, community: 15 },
    { category: 'Electronics', you: 5, community: 7 },
  ];

  const stats = [
    { 
      label: 'Total Saved', 
      value: '$3,247.89', 
      change: '+12.5%', 
      trend: 'up', 
      icon: DollarSign,
      color: 'emerald'
    },
    { 
      label: 'Deals Used', 
      value: '47', 
      change: '+8', 
      trend: 'up', 
      icon: Gift,
      color: 'purple'
    },
    { 
      label: 'Avg. Discount', 
      value: '32%', 
      change: '+5%', 
      trend: 'up', 
      icon: Target,
      color: 'amber'
    },
    { 
      label: 'Cashback Earned', 
      value: '$512.40', 
      change: '+23%', 
      trend: 'up', 
      icon: CreditCard,
      color: 'blue'
    },
  ];

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
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

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize="12" fontWeight="bold">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
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
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              Analytics Dashboard 📊
            </h1>
            <p className="text-gray-600">Track your savings journey and spending insights</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            {/* Timeframe Selector */}
            <div className="flex bg-white rounded-xl p-1 border border-gray-200">
              {timeframes.map((tf) => (
                <motion.button
                  key={tf}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTimeframe(tf)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    timeframe === tf
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tf}
                </motion.button>
              ))}
            </div>
            
            {/* Action Buttons */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={refreshData}
              disabled={isLoading}
              className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className={`w-5 h-5 text-gray-600 ${isLoading ? 'animate-spin' : ''}`} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
            >
              <Download className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div variants={cardVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 bg-${stat.color}-100 rounded-xl`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div className={`flex items-center px-2 py-1 rounded-lg ${
                stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 mr-1" />
                )}
                <span className="text-sm font-medium">{stat.change}</span>
              </div>
            </div>
            <h3 className="text-gray-600 mb-2 text-sm">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Spending Trends */}
        <motion.div 
          variants={cardVariants}
          whileHover={{ y: -2 }}
          className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Spending & Savings Trends</h3>
            <div className="flex space-x-2">
              {['spending', 'savings', 'deals'].map((metric) => (
                <motion.button
                  key={metric}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveMetric(metric)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    activeMetric === metric
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {metric.charAt(0).toUpperCase() + metric.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
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
              <Area 
                type="monotone" 
                dataKey="spending" 
                stroke="#10B981" 
                fillOpacity={1} 
                fill="url(#colorSpending)" 
                strokeWidth={3} 
              />
              <Area 
                type="monotone" 
                dataKey="savings" 
                stroke="#F59E0B" 
                fillOpacity={1} 
                fill="url(#colorSavings)" 
                strokeWidth={3} 
              />
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
          <ResponsiveContainer width="100%" height={250}>
            <RechartsPieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value}%`, name]} />
            </RechartsPieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-3">
            {categoryData.map((category, index) => (
              <motion.div 
                key={index} 
                whileHover={{ x: 5 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-3" 
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-sm text-gray-600">{category.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-gray-800">${category.amount}</span>
                  <span className="text-xs text-gray-500 ml-2">{category.value}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Goals Progress & Community Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Goals Progress */}
        <motion.div 
          variants={cardVariants}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Goals Progress</h3>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Target className="w-6 h-6 text-emerald-600" />
            </motion.div>
          </div>
          <div className="space-y-6">
            {goalData.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">{goal.name}</span>
                  <span className="text-gray-600 text-sm">
                    {goal.current} / {goal.target}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${goal.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full relative"
                  >
                    <div className="absolute right-2 top-0 h-full flex items-center">
                      <span className="text-white text-xs font-bold">{goal.percentage}%</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Comparison */}
        <motion.div 
          variants={cardVariants}
          className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Community Comparison</h3>
            <div className="flex items-center text-emerald-600">
              <Users className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">vs. 10K+ users</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={comparisonData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" stroke="#9ca3af" />
              <YAxis dataKey="category" type="category" stroke="#9ca3af" width={80} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: 'none', 
                  borderRadius: '12px', 
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)' 
                }} 
              />
              <Bar dataKey="you" fill="#10B981" name="You" radius={[0, 4, 4, 0]} />
              <Bar dataKey="community" fill="#E5E7EB" name="Community Avg" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Achievement Badges */}
      <motion.div 
        variants={cardVariants}
        className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 rounded-2xl text-white"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Recent Achievements</h3>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Award className="w-6 h-6" />
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Sparkles, title: 'Smart Saver', desc: 'Saved $500+ this month' },
            { icon: Target, title: 'Goal Crusher', desc: 'Achieved 3 goals' },
            { icon: ShoppingBag, title: 'Deal Hunter', desc: 'Used 20+ deals' },
            { icon: TrendingUp, title: 'Trend Setter', desc: 'Top 10% community' },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white/20 p-4 rounded-xl text-center backdrop-blur-sm"
            >
              <achievement.icon className="w-8 h-8 mx-auto mb-2" />
              <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
              <p className="text-xs opacity-90">{achievement.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnalyticsPage;
