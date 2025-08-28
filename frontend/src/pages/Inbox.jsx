import React, { useState, useEffect } from 'react';

const MessageItem = ({ message, isSelected, onClick, onMarkRead }) => {
  const formatTime = (timestamp) => {
    const now = new Date();
    const messageTime = new Date(timestamp);
    const diffInHours = (now - messageTime) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return messageTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
    } else {
      return messageTime.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  return (
    <div 
      className={`p-4 cursor-pointer transition-all duration-200 border-l-4 ${
        isSelected 
          ? 'bg-blue-50 border-l-blue-500' 
          : message.unread 
            ? 'bg-blue-25 hover:bg-blue-50 border-l-transparent' 
            : 'hover:bg-gray-50 border-l-transparent'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
            message.type === 'system' ? 'bg-purple-500' : 'bg-blue-500'
          }`}>
            {message.sender.charAt(0).toUpperCase()}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className={`font-medium text-sm ${
                message.unread ? 'text-blue-900' : 'text-gray-900'
              } truncate`}>
                {message.sender}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">
                  {formatTime(message.timestamp)}
                </span>
                {message.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </div>
            
            <p className={`text-sm ${
              message.unread ? 'text-gray-800' : 'text-gray-600'
            } truncate`}>
              {message.preview}
            </p>
          </div>
        </div>
      </div>
      
      {message.unread && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onMarkRead(message.id);
          }}
          className="mt-2 text-xs text-blue-600 hover:text-blue-800 transition-colors"
        >
          Mark as read
        </button>
      )}
    </div>
  );
};

const MessageDetail = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="flex-1 flex flex-col bg-white border-l border-gray-200">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="md:hidden text-gray-500 hover:text-gray-700"
            >
              ← Back
            </button>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs ${
              message.type === 'system' ? 'bg-purple-500' : 'bg-blue-500'
            }`}>
              {message.sender.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">{message.sender}</h2>
              <p className="text-xs text-gray-500">
                {new Date(message.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
              ⭐
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
              🗑️
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{message.subject}</h1>
          <div className="prose prose-blue max-w-none">
            <p className="text-gray-700 leading-relaxed">{message.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Inbox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "System Analytics",
      subject: "Review Completed: Business Plan Analysis",
      preview: "Your business plan has been analyzed with a score of 8.5/10...",
      content: "Your business plan has been thoroughly analyzed by our AI system. The overall score is 8.5/10. Key strengths include market analysis and financial projections. Areas for improvement: marketing strategy and risk assessment.",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      unread: true,
      type: "system"
    },
    {
      id: 2,
      sender: "Product Updates",
      subject: "New Feature: Advanced Analytics Available",
      preview: "We've launched new analytics features to help you track...",
      content: "We're excited to announce the launch of our new advanced analytics dashboard. This includes real-time tracking, custom reports, and AI-powered insights to help you make better business decisions.",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      unread: true,
      type: "system"
    },
    {
      id: 3,
      sender: "Weekly Reports",
      subject: "Weekly Summary Report",
      preview: "Here's your weekly review performance summary...",
      content: "This week you received 15 new reviews with an average rating of 4.6/5. Your response rate improved by 12% compared to last week. Great job maintaining customer engagement!",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      unread: false,
      type: "system"
    },
    {
      id: 4,
      sender: "Support Team",
      subject: "Account Security Update",
      preview: "We've enhanced your account security settings...",
      content: "Your account security has been updated with new features including two-factor authentication and login monitoring. Please review your security settings to ensure your account remains protected.",
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      unread: false,
      type: "support"
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all, unread, read

  const unreadCount = messages.filter(msg => msg.unread).length;

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.preview.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === 'all' || 
                         (filter === 'unread' && message.unread) ||
                         (filter === 'read' && !message.unread);
    
    return matchesSearch && matchesFilter;
  });

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    if (message.unread) {
      markAsRead(message.id);
    }
  };

  const markAsRead = (messageId) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId ? { ...msg, unread: false } : msg
    ));
  };

  const markAllAsRead = () => {
    setMessages(prev => prev.map(msg => ({ ...msg, unread: false })));
  };

  const deleteMessage = (messageId) => {
    setMessages(prev => prev.filter(msg => msg.id !== messageId));
    if (selectedMessage && selectedMessage.id === messageId) {
      setSelectedMessage(null);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Inbox</h1>
            <p className="text-sm text-gray-600">
              {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
            </p>
          </div>
          <button 
            onClick={markAllAsRead}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Mark all as read
          </button>
        </div>
        
        {/* Search and Filter */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-3 top-2.5 text-gray-400">🔍</div>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'unread' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilter('read')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'read' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Read
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Messages List */}
        <div className={`${selectedMessage ? 'hidden md:block' : 'block'} w-full md:w-1/3 bg-white border-r border-gray-200 overflow-y-auto`}>
          {filteredMessages.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-gray-400 text-lg mb-2">📭</div>
              <p className="text-gray-500">No messages found</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredMessages.map((message) => (
                <MessageItem
                  key={message.id}
                  message={message}
                  isSelected={selectedMessage?.id === message.id}
                  onClick={() => handleMessageClick(message)}
                  onMarkRead={markAsRead}
                />
              ))}
            </div>
          )}
        </div>

        {/* Message Detail */}
        {selectedMessage ? (
          <MessageDetail 
            message={selectedMessage} 
            onClose={() => setSelectedMessage(null)}
          />
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="text-6xl text-gray-300 mb-4">💬</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Select a message</h3>
              <p className="text-gray-500">Choose a message from the list to view its contents</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
