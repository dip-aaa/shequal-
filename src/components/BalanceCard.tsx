import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, TrendingUp, Eye, EyeOff } from 'lucide-react';

const BalanceCard: React.FC = () => {
  const [showBalance, setShowBalance] = React.useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-6 h-6" />
            <h3 className="text-lg font-semibold">Payment Balance</h3>
          </div>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
          >
            {showBalance ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
          </button>
        </div>
        
        <div className="mb-6">
          <motion.div
            key={showBalance ? 'shown' : 'hidden'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-3xl font-bold mb-2">
              {showBalance ? '$4,847.52' : '••••••'}
            </p>
          </motion.div>
          <div className="flex items-center text-primary-100">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span className="text-sm">+12.5% from last month</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
            <p className="text-sm text-primary-100 mb-1">Available</p>
            <p className="text-lg font-semibold">
              {showBalance ? '$3,247.52' : '••••••'}
            </p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
            <p className="text-sm text-primary-100 mb-1">Pending</p>
            <p className="text-lg font-semibold">
              {showBalance ? '$1,600.00' : '••••••'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BalanceCard;
