import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownLeft, MoreHorizontal } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: string;
  icon: string;
}

const TransactionList: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'expense',
      amount: -89.99,
      description: 'Fashion Deal - Zara',
      category: 'Shopping',
      date: '2 hours ago',
      icon: '👗'
    },
    {
      id: '2',
      type: 'income',
      amount: 25.00,
      description: 'Cashback Reward',
      category: 'Reward',
      date: '1 day ago',
      icon: '💰'
    },
    {
      id: '3',
      type: 'expense',
      amount: -34.50,
      description: 'Beauty Products',
      category: 'Beauty',
      date: '2 days ago',
      icon: '💄'
    },
    {
      id: '4',
      type: 'expense',
      amount: -125.00,
      description: 'Electronics Deal',
      category: 'Tech',
      date: '3 days ago',
      icon: '📱'
    },
    {
      id: '5',
      type: 'income',
      amount: 50.00,
      description: 'Referral Bonus',
      category: 'Bonus',
      date: '1 week ago',
      icon: '🎁'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <motion.div
            key={transaction.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-lg">{transaction.icon}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {transaction.description}
              </p>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{transaction.category}</span>
                <span>•</span>
                <span>{transaction.date}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-semibold ${
                transaction.type === 'income' ? 'text-green-600' : 'text-gray-900'
              }`}>
                {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
              </span>
              {transaction.type === 'income' ? (
                <ArrowUpRight className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDownLeft className="w-4 h-4 text-gray-400" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors">
        View All Transactions
      </button>
    </motion.div>
  );
};

export default TransactionList;
