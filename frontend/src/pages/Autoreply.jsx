import React, { useState, useEffect } from 'react';

const AutoReply = () => {
  const [settings, setSettings] = useState({
    enableAutoReply: true,
    enableFollowUp: false,
    responseTemplate: "Thank you for using ReviewAI! Your review has been completed with a score of {score}. Check out the detailed feedback in your dashboard."
  });

  const [recentReplies, setRecentReplies] = useState([
    {
      id: 1,
      title: "Business Plan Analysis",
      sentAt: "2 hours ago",
      status: "sent",
      recipient: "john@example.com"
    },
    {
      id: 2,
      title: "Technical Documentation",
      sentAt: "1 day ago",
      status: "sent",
      recipient: "sarah@example.com"
    },
    {
      id: 3,
      title: "Marketing Strategy Review",
      sentAt: "2 days ago",
      status: "delivered",
      recipient: "mike@example.com"
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  // Handle checkbox changes
  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  // Handle template change
  const handleTemplateChange = (e) => {
    setSettings(prev => ({
      ...prev,
      responseTemplate: e.target.value
    }));
  };

  // Save settings function
  const saveSettings = async () => {
    setIsLoading(true);
    setSaveStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would make actual API call
      // await api.updateAutoReplySettings(settings);
      
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus(''), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  // Preview template function
  const previewTemplate = () => {
    setPreviewMode(!previewMode);
  };

  // Get preview text
  const getPreviewText = () => {
    return settings.responseTemplate.replace('{score}', '8.5/10');
  };

  // Refresh recent replies
  const refreshReplies = () => {
    // Simulate fetching new data
    setIsLoading(true);
    setTimeout(() => {
      setRecentReplies(prev => [...prev]);
      setIsLoading(false);
    }, 1000);
  };

  // Delete a reply record
  const deleteReply = (id) => {
    setRecentReplies(prev => prev.filter(reply => reply.id !== id));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Auto Reply</h1>
        <p className="text-gray-600 mt-2">Configure automated responses for your reviews</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Settings Panel */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Auto Reply Settings</h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={previewTemplate}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              >
                {previewMode ? 'Hide Preview' : 'Preview'}
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Toggle Settings */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <label className="font-medium text-gray-900">Enable auto-reply for completed reviews</label>
                  <p className="text-sm text-gray-600">Automatically send responses when reviews are completed</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enableAutoReply}
                    onChange={(e) => handleSettingChange('enableAutoReply', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <label className="font-medium text-gray-900">Send follow-up suggestions</label>
                  <p className="text-sm text-gray-600">Include improvement suggestions in responses</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enableFollowUp}
                    onChange={(e) => handleSettingChange('enableFollowUp', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            
            {/* Template Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Response Template
                <span className="text-gray-500 font-normal"> (Use {'{score}'} for dynamic score insertion)</span>
              </label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                rows={4}
                value={settings.responseTemplate}
                onChange={handleTemplateChange}
                placeholder="Enter your auto-reply template..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Characters: {settings.responseTemplate.length}/500
              </p>
            </div>

            {/* Preview */}
            {previewMode && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Preview:</h4>
                <p className="text-blue-800 text-sm">{getPreviewText()}</p>
              </div>
            )}
            
            {/* Save Button */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={saveSettings}
                disabled={isLoading || !settings.responseTemplate.trim()}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center space-x-2"
              >
                {isLoading && (
                  <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                )}
                <span>{isLoading ? 'Saving...' : 'Save Settings'}</span>
              </button>

              {saveStatus === 'success' && (
                <div className="flex items-center text-green-600 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Settings saved!
                </div>
              )}

              {saveStatus === 'error' && (
                <div className="flex items-center text-red-600 text-sm">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Failed to save
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent Replies Panel */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Auto Replies</h3>
            <button
              onClick={refreshReplies}
              className="text-blue-600 hover:text-blue-800 transition-colors p-1"
              title="Refresh"
            >
              <svg className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {recentReplies.map((reply) => (
              <div key={reply.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-sm font-medium text-gray-900">{reply.title}</p>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        reply.status === 'sent' ? 'bg-blue-100 text-blue-800' :
                        reply.status === 'delivered' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {reply.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">To: {reply.recipient}</p>
                    <p className="text-xs text-gray-500 mt-1">{reply.sentAt}</p>
                  </div>
                  <button
                    onClick={() => deleteReply(reply.id)}
                    className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-all p-1"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            
            {recentReplies.length === 0 && (
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-gray-500 text-sm">No auto-replies sent yet</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoReply;