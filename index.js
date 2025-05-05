const React = window.React;  // Yeh line add karo
const ReactDOM = window.ReactDOM;  // Yeh bhi add karo

// Claude ka code yahan se shuru...
import { useState } from 'react';
// ... rest of your code

import { useState } from 'react';
import { Wallet, Clock, Settings, BarChart3, MessageSquare, ArrowRightCircle, ArrowLeftCircle, Phone, Search, X, ChevronDown, PlusCircle, DollarSign } from 'lucide-react';

export default function UnifiedPaymentWallet() {
  const [activeTab, setActiveTab] = useState('home');
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showExpensePopup, setShowExpensePopup] = useState(false);
  const [expenseType, setExpenseType] = useState('');
  const [expenseNote, setExpenseNote] = useState('');
  const [isVoiceNoteActive, setIsVoiceNoteActive] = useState(false);
  
  const platforms = [
    { name: 'Paytm', balance: '₹1,245' },
    { name: 'PhonePe', balance: '₹2,350' },
    { name: 'Google Pay', balance: '₹890' },
    { name: 'Amazon Pay', balance: '₹640' }
  ];
  
  const transactions = [
    { id: 1, recipient: 'Grocery Store', amount: '₹750', date: 'Today, 10:30 AM', platform: 'Paytm', category: 'Groceries', note: 'Weekly groceries including fruits and vegetables' },
    { id: 2, recipient: 'Coffee Shop', amount: '₹250', date: 'Yesterday, 5:15 PM', platform: 'Google Pay', category: 'Food', note: 'Coffee with colleagues after work' },
    { id: 3, recipient: 'Electric Bill', amount: '₹1,450', date: 'May 3, 2025', platform: 'PhonePe', category: 'Utilities', note: 'Monthly electricity bill payment' },
    { id: 4, recipient: 'Jane Smith', amount: '₹300', date: 'May 2, 2025', platform: 'Amazon Pay', category: 'Personal', note: 'Splitting dinner bill from last night' }
  ];

  const handlePaymentClick = () => {
    setShowPaymentPopup(true);
  };

  const handleTransactionComplete = () => {
    setShowPaymentPopup(false);
    setShowExpensePopup(true);
  };

  const handleExpenseSubmit = () => {
    setShowExpensePopup(false);
    setExpenseType('');
    setExpenseNote('');
    setIsVoiceNoteActive(false);
  };

  const toggleVoiceNote = () => {
    setIsVoiceNoteActive(!isVoiceNoteActive);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* App Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">UniPay Wallet</h1>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-blue-500">
              <Search size={18} />
            </button>
            <button className="p-2 rounded-full bg-blue-500">
              <Settings size={18} />
            </button>
          </div>
        </div>
        {activeTab === 'home' && (
          <div className="mt-4">
            <h2 className="text-lg">Total Balance</h2>
            <p className="text-3xl font-bold">₹5,125</p>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {activeTab === 'home' && (
          <div className="p-4">
            {/* Connected Platforms */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Connected Platforms</h3>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map((platform, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
                    <span>{platform.name}</span>
                    <span className="font-bold">{platform.balance}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
              <div className="flex space-x-4 overflow-x-auto py-2">
                <button
                  onClick={handlePaymentClick}
                  className="flex flex-col items-center justify-center bg-blue-600 text-white p-4 rounded-lg min-w-24"
                >
                  <ArrowRightCircle size={24} />
                  <span className="mt-1 text-sm">Pay</span>
                </button>
                <button className="flex flex-col items-center justify-center bg-green-600 text-white p-4 rounded-lg min-w-24">
                  <ArrowLeftCircle size={24} />
                  <span className="mt-1 text-sm">Request</span>
                </button>
                <button className="flex flex-col items-center justify-center bg-purple-600 text-white p-4 rounded-lg min-w-24">
                  <BarChart3 size={24} />
                  <span className="mt-1 text-sm">Analytics</span>
                </button>
                <button className="flex flex-col items-center justify-center bg-orange-600 text-white p-4 rounded-lg min-w-24">
                  <Clock size={24} />
                  <span className="mt-1 text-sm">History</span>
                </button>
              </div>
            </div>

            {/* Recent Transactions */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
              <div className="space-y-3">
                {transactions.map(transaction => (
                  <div key={transaction.id} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-semibold">{transaction.recipient}</p>
                        <p className="text-xs text-gray-500">{transaction.date} • {transaction.platform}</p>
                      </div>
                      <p className="font-bold text-red-600">{transaction.amount}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-md mt-2">
                      <p className="text-xs font-medium text-gray-500">AI Expense Note:</p>
                      <p className="text-sm">{transaction.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Spending Analytics</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <h3 className="text-lg font-semibold mb-2">Monthly Breakdown</h3>
              <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
                <p className="text-gray-500">Spending visualization chart</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Top Categories</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Groceries</span>
                  <span className="font-bold">₹2,450</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                </div>
                <div className="flex justify-between">
                  <span>Utilities</span>
                  <span className="font-bold">₹1,950</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-2/3"></div>
                </div>
                <div className="flex justify-between">
                  <span>Food</span>
                  <span className="font-bold">₹1,250</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Navigation Bar */}
      <nav className="bg-white border-t border-gray-200">
        <div className="flex justify-around">
          <button 
            className={`p-4 flex flex-col items-center ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('home')}
          >
            <Wallet size={20} />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button 
            className={`p-4 flex flex-col items-center ${activeTab === 'analytics' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('analytics')}
          >
            <BarChart3 size={20} />
            <span className="text-xs mt-1">Analytics</span>
          </button>
          <button 
            className="p-4 flex flex-col items-center text-gray-500"
            onClick={handlePaymentClick}
          >
            <PlusCircle size={20} />
            <span className="text-xs mt-1">Pay</span>
          </button>
          <button className="p-4 flex flex-col items-center text-gray-500">
            <Clock size={20} />
            <span className="text-xs mt-1">History</span>
          </button>
          <button className="p-4 flex flex-col items-center text-gray-500">
            <Settings size={20} />
            <span className="text-xs mt-1">Settings</span>
          </button>
        </div>
      </nav>

      {/* Payment Popup */}
      {showPaymentPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-bold">Make Payment</h2>
              <button onClick={() => setShowPaymentPopup(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Pay through</label>
                <div className="border rounded-lg p-3 flex justify-between items-center">
                  <span>Paytm</span>
                  <ChevronDown size={16} />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input 
                  type="text" 
                  placeholder="Enter UPI ID / Phone Number" 
                  className="w-full border rounded-lg p-3"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign size={16} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="0.00" 
                    className="w-full border rounded-lg p-3 pl-10"
                  />
                </div>
              </div>
              <button 
                onClick={handleTransactionComplete}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Expense Categorization Popup */}
      {showExpensePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="p-4 border-b">
              <h2 className="text-lg font-bold">What was this payment for?</h2>
            </div>
            <div className="p-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  className="w-full border rounded-lg p-3"
                  value={expenseType}
                  onChange={(e) => setExpenseType(e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="food">Food & Dining</option>
                  <option value="groceries">Groceries</option>
                  <option value="transport">Transportation</option>
                  <option value="utilities">Utilities</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="shopping">Shopping</option>
                  <option value="health">Health</option>
                  <option value="personal">Personal</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">Add a note</label>
                  <button 
                    onClick={toggleVoiceNote}
                    className={`p-1 rounded-full ${isVoiceNoteActive ? 'bg-red-100 text-red-600' : 'bg-gray-100'}`}
                  >
                    <Phone size={16} />
                  </button>
                </div>
                {isVoiceNoteActive ? (
                  <div className="border rounded-lg p-3 flex items-center justify-center bg-red-50 h-20">
                    <div className="text-center">
                      <div className="flex justify-center mb-1">
                        <div className="h-4 w-1 bg-red-500 mx-0.5 animate-pulse"></div>
                        <div className="h-6 w-1 bg-red-500 mx-0.5 animate-pulse delay-75"></div>
                        <div className="h-8 w-1 bg-red-500 mx-0.5 animate-pulse delay-150"></div>
                        <div className="h-6 w-1 bg-red-500 mx-0.5 animate-pulse delay-75"></div>
                        <div className="h-4 w-1 bg-red-500 mx-0.5 animate-pulse"></div>
                      </div>
                      <p className="text-sm text-red-600">Recording voice note...</p>
                    </div>
                  </div>
                ) : (
                  <textarea 
                    className="w-full border rounded-lg p-3 h-20"
                    placeholder="What was this payment for?"
                    value={expenseNote}
                    onChange={(e) => setExpenseNote(e.target.value)}
                  ></textarea>
                )}
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowExpensePopup(false)}
                  className="flex-1 border border-gray-300 py-3 rounded-lg font-medium"
                >
                  Skip
                </button>
                <button 
                  onClick={handleExpenseSubmit}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Yeh last line add karo
ReactDOM.render(<UnifiedPaymentWallet />, document.getElementById('root'));
