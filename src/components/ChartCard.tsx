import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ChartCard: React.FC = () => {
  const data = [
    { name: 'Jan', savings: 240, spending: 180 },
    { name: 'Feb', savings: 310, spending: 220 },
    { name: 'Mar', savings: 280, spending: 200 },
    { name: 'Apr', savings: 450, spending: 280 },
    { name: 'May', savings: 380, spending: 250 },
    { name: 'Jun', savings: 520, spending: 320 },
    { name: 'Jul', savings: 480, spending: 290 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Spending Trends</h3>
          <p className="text-sm text-gray-600">Your savings vs spending this year</p>
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
            <span className="text-gray-600">Savings</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <span className="text-gray-600">Spending</span>
          </div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              stroke="#666"
              fontSize={12}
              tickLine={false}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="savings" 
              stroke="#4CAF50" 
              strokeWidth={3}
              dot={{ fill: '#4CAF50', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#4CAF50', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="spending" 
              stroke="#e0e0e0" 
              strokeWidth={3}
              dot={{ fill: '#e0e0e0', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#e0e0e0', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary-600">$2,847</p>
          <p className="text-sm text-gray-600">Total Saved</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">$1,940</p>
          <p className="text-sm text-gray-600">Total Spent</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ChartCard;
