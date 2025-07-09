import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette, 
  CreditCard,
  Users,
  HelpCircle,
  LogOut,
  Eye,
  EyeOff,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Globe,
  Mail,
  Phone,
  Lock,
  Trash2,
  Download,
  Upload,
  Save,
  X,
  Check,
  ChevronRight,
  Smartphone,
  Monitor,
  Zap,
  Heart,
  Star,
  Target,
  Gift
} from 'lucide-react';

const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState('account');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [settings, setSettings] = useState({
    // Account Settings
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    dealAlerts: true,
    weeklyDigest: true,
    
    // Privacy Settings
    profileVisibility: 'public',
    dataSharing: false,
    analyticsTracking: true,
    marketingEmails: true,
    
    // Appearance Settings
    darkMode: false,
    soundEffects: true,
    animations: true,
    compactView: false,
    
    // Security Settings
    twoFactorAuth: false,
    loginAlerts: true,
    sessionTimeout: '30min',
    
    // Deal Preferences
    maxDiscount: 70,
    favoriteCategories: ['Fashion', 'Beauty'],
    priceRange: [0, 500],
    locationBasedDeals: true,
  });

  const menuItems = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'deals', label: 'Deal Preferences', icon: Gift },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  const categories = ['Fashion', 'Beauty', 'Health', 'Food', 'Electronics', 'Home', 'Sports'];

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const updateSetting = (key: keyof typeof settings, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleCategoryToggle = (category: string) => {
    const currentCategories = settings.favoriteCategories;
    if (currentCategories.includes(category)) {
      updateSetting('favoriteCategories', currentCategories.filter(c => c !== category));
    } else {
      updateSetting('favoriteCategories', [...currentCategories, category]);
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

  const ToggleSwitch = ({ enabled, onChange, label }: { enabled: boolean; onChange: () => void; label: string }) => (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-700">{label}</span>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={onChange}
        className={`relative w-12 h-6 rounded-full transition-colors ${
          enabled ? 'bg-emerald-600' : 'bg-gray-300'
        }`}
      >
        <motion.div
          animate={{ x: enabled ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md"
        />
      </motion.button>
    </div>
  );

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-4 lg:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 min-h-screen"
    >
      {/* Header */}
      <motion.div variants={cardVariants} className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          Settings ⚙️
        </h1>
        <p className="text-gray-600">Customize your experience and preferences</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Menu */}
        <motion.div 
          variants={cardVariants}
          className="lg:col-span-1"
        >
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
              <SettingsIcon className="w-8 h-8 mb-2" />
              <h3 className="text-lg font-semibold">Settings Menu</h3>
            </div>
            <div className="p-2">
              {menuItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl mb-2 transition-all ${
                    activeSection === item.id
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Settings Content */}
        <motion.div 
          variants={cardVariants}
          className="lg:col-span-3"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6"
            >
              {/* Account Settings */}
              {activeSection === 'account' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Account Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        value="sophia.johnson@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                      <input
                        type="text"
                        value="Sophia Johnson"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value="+1 (555) 123-4567"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      />
                    </div>
                    <div className="flex gap-4 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
                      >
                        Save Changes
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeSection === 'notifications' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Notification Preferences</h3>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Bell className="w-5 h-5 mr-2 text-emerald-600" />
                        Push Notifications
                      </h4>
                      <div className="space-y-3">
                        <ToggleSwitch 
                          enabled={settings.pushNotifications} 
                          onChange={() => toggleSetting('pushNotifications')}
                          label="Push notifications" 
                        />
                        <ToggleSwitch 
                          enabled={settings.dealAlerts} 
                          onChange={() => toggleSetting('dealAlerts')}
                          label="Deal alerts" 
                        />
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Mail className="w-5 h-5 mr-2 text-emerald-600" />
                        Email Notifications
                      </h4>
                      <div className="space-y-3">
                        <ToggleSwitch 
                          enabled={settings.emailNotifications} 
                          onChange={() => toggleSetting('emailNotifications')}
                          label="Email notifications" 
                        />
                        <ToggleSwitch 
                          enabled={settings.weeklyDigest} 
                          onChange={() => toggleSetting('weeklyDigest')}
                          label="Weekly digest" 
                        />
                        <ToggleSwitch 
                          enabled={settings.marketingEmails} 
                          onChange={() => toggleSetting('marketingEmails')}
                          label="Marketing emails" 
                        />
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Phone className="w-5 h-5 mr-2 text-emerald-600" />
                        SMS Notifications
                      </h4>
                      <ToggleSwitch 
                        enabled={settings.smsNotifications} 
                        onChange={() => toggleSetting('smsNotifications')}
                        label="SMS notifications" 
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy */}
              {activeSection === 'privacy' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Privacy Settings</h3>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4">Profile Visibility</h4>
                      <div className="space-y-3">
                        {['public', 'friends', 'private'].map((option) => (
                          <motion.label
                            key={option}
                            whileHover={{ x: 5 }}
                            className="flex items-center cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="profileVisibility"
                              value={option}
                              checked={settings.profileVisibility === option}
                              onChange={(e) => updateSetting('profileVisibility', e.target.value)}
                              className="w-4 h-4 text-emerald-600 border-gray-300 focus:ring-emerald-500 mr-3"
                            />
                            <span className="text-gray-700 capitalize">{option}</span>
                          </motion.label>
                        ))}
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4">Data & Analytics</h4>
                      <div className="space-y-3">
                        <ToggleSwitch 
                          enabled={settings.dataSharing} 
                          onChange={() => toggleSetting('dataSharing')}
                          label="Share data with partners" 
                        />
                        <ToggleSwitch 
                          enabled={settings.analyticsTracking} 
                          onChange={() => toggleSetting('analyticsTracking')}
                          label="Analytics tracking" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Appearance */}
              {activeSection === 'appearance' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Appearance & Display</h3>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        {settings.darkMode ? <Moon className="w-5 h-5 mr-2 text-emerald-600" /> : <Sun className="w-5 h-5 mr-2 text-emerald-600" />}
                        Theme
                      </h4>
                      <ToggleSwitch 
                        enabled={settings.darkMode} 
                        onChange={() => toggleSetting('darkMode')}
                        label="Dark mode" 
                      />
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-emerald-600" />
                        Effects & Animations
                      </h4>
                      <div className="space-y-3">
                        <ToggleSwitch 
                          enabled={settings.soundEffects} 
                          onChange={() => toggleSetting('soundEffects')}
                          label="Sound effects" 
                        />
                        <ToggleSwitch 
                          enabled={settings.animations} 
                          onChange={() => toggleSetting('animations')}
                          label="Animations" 
                        />
                        <ToggleSwitch 
                          enabled={settings.compactView} 
                          onChange={() => toggleSetting('compactView')}
                          label="Compact view" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Security */}
              {activeSection === 'security' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Security Settings</h3>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-emerald-600" />
                        Two-Factor Authentication
                      </h4>
                      <ToggleSwitch 
                        enabled={settings.twoFactorAuth} 
                        onChange={() => toggleSetting('twoFactorAuth')}
                        label="Enable 2FA" 
                      />
                      {settings.twoFactorAuth && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 p-4 bg-emerald-50 rounded-lg"
                        >
                          <p className="text-emerald-700 text-sm">Two-factor authentication is enabled. You'll receive SMS codes for additional security.</p>
                        </motion.div>
                      )}
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4">Login & Session</h4>
                      <div className="space-y-4">
                        <ToggleSwitch 
                          enabled={settings.loginAlerts} 
                          onChange={() => toggleSetting('loginAlerts')}
                          label="Login alerts" 
                        />
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Session timeout</label>
                          <select
                            value={settings.sessionTimeout}
                            onChange={(e) => updateSetting('sessionTimeout', e.target.value)}
                            className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          >
                            <option value="15min">15 minutes</option>
                            <option value="30min">30 minutes</option>
                            <option value="1hour">1 hour</option>
                            <option value="never">Never</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="border border-red-200 rounded-xl p-6 bg-red-50">
                      <h4 className="font-semibold text-red-800 mb-4 flex items-center">
                        <Trash2 className="w-5 h-5 mr-2" />
                        Danger Zone
                      </h4>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowDeleteConfirm(true)}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                      >
                        Delete Account
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}

              {/* Deal Preferences */}
              {activeSection === 'deals' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Deal Preferences</h3>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-emerald-600" />
                        Favorite Categories
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {categories.map((category) => (
                          <motion.button
                            key={category}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCategoryToggle(category)}
                            className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                              settings.favoriteCategories.includes(category)
                                ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {category}
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-emerald-600" />
                        Deal Filters
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Minimum discount: {settings.maxDiscount}%
                          </label>
                          <input
                            type="range"
                            min="10"
                            max="90"
                            value={settings.maxDiscount}
                            onChange={(e) => updateSetting('maxDiscount', parseInt(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                        <ToggleSwitch 
                          enabled={settings.locationBasedDeals} 
                          onChange={() => toggleSetting('locationBasedDeals')}
                          label="Location-based deals" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing */}
              {activeSection === 'billing' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Billing & Subscription</h3>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl p-6 bg-gradient-to-r from-emerald-50 to-teal-50">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 flex items-center">
                            <Star className="w-5 h-5 mr-2 text-yellow-500 fill-current" />
                            VIP Membership
                          </h4>
                          <p className="text-gray-600 text-sm">Access to exclusive deals and features</p>
                        </div>
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-800">$9.99/month</span>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                        >
                          Manage Plan
                        </motion.button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-800 mb-4">Payment Method</h4>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <CreditCard className="w-8 h-8 text-gray-400 mr-3" />
                          <div>
                            <p className="font-medium text-gray-800">**** **** **** 1234</p>
                            <p className="text-sm text-gray-600">Expires 12/25</p>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="text-emerald-600 hover:text-emerald-700 font-medium"
                        >
                          Update
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Help & Support */}
              {activeSection === 'help' && (
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Help & Support</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: 'FAQ', description: 'Find answers to common questions', icon: HelpCircle, color: 'emerald' },
                      { title: 'Contact Support', description: 'Get help from our team', icon: Mail, color: 'blue' },
                      { title: 'Community Forum', description: 'Connect with other users', icon: Users, color: 'purple' },
                      { title: 'Video Tutorials', description: 'Learn with step-by-step guides', icon: Monitor, color: 'amber' },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className={`p-6 border border-${item.color}-200 bg-${item.color}-50 rounded-xl cursor-pointer`}
                      >
                        <item.icon className={`w-8 h-8 text-${item.color}-600 mb-3`} />
                        <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8 border border-gray-200 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Export Your Data</h4>
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Data
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Import Data
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Delete Account Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Delete Account</h3>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
                </p>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium"
                  >
                    Delete Account
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SettingsPage;
