import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Send, Gift, CreditCard } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    {
      icon: Plus,
      label: 'Add Deal',
      color: 'bg-primary-500 hover:bg-primary-600',
      textColor: 'text-white'
    },
    {
      icon: Send,
      label: 'Send Money',
      color: 'bg-blue-500 hover:bg-blue-600',
      textColor: 'text-white'
    },
    {
      icon: Gift,
      label: 'Rewards',
      color: 'bg-purple-500 hover:bg-purple-600',
      textColor: 'text-white'
    },
    {
      icon: CreditCard,
      label: 'Top Up',
      color: 'bg-orange-500 hover:bg-orange-600',
      textColor: 'text-white'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${action.color} ${action.textColor} p-4 rounded-xl transition-all duration-200 flex flex-col items-center space-y-2`}
          >
            <action.icon className="w-6 h-6" />
            <span className="text-sm font-medium">{action.label}</span>
          </motion.button>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">🎯</span>
          </div>
          <div>
            <p className="text-sm font-medium text-primary-900">Weekly Goal</p>
            <p className="text-xs text-primary-700">Save $200 this week</p>
          </div>
        </div>
        <div className="mt-3">
          <div className="flex justify-between text-xs text-primary-700 mb-1">
            <span>Progress</span>
            <span>$150 / $200</span>
          </div>
          <div className="w-full bg-primary-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-primary-500 h-2 rounded-full"
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuickActions;
