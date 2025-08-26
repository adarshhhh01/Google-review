





const AutoReply = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Auto Reply</h1>
        <p className="text-gray-600 mt-2">Configure automated responses for your reviews</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Auto Reply Settings</h3>
          
          <div className="space-y-4">
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" defaultChecked />
                <span>Enable auto-reply for completed reviews</span>
              </label>
            </div>
            
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span>Send follow-up suggestions</span>
              </label>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Response Template
              </label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows={4}
                defaultValue="Thank you for using ReviewAI! Your review has been completed with a score of {score}. Check out the detailed feedback in your dashboard."
              />
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Save Settings
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Auto Replies</h3>
          
          <div className="space-y-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium">Business Plan Analysis</p>
              <p className="text-xs text-gray-600 mt-1">Auto-reply sent 2 hours ago</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm font-medium">Technical Documentation</p>
              <p className="text-xs text-gray-600 mt-1">Auto-reply sent 1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


export default AutoReply