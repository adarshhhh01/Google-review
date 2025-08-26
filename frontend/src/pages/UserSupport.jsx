import React from 'react'
import { Send, User } from 'lucide-react';
  const UserSupport = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Support</h1>
        <p className="text-gray-600 mt-2">Get help and submit feedback</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Support</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows={4} />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Help</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
              📚 How to submit a review
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
              🔍 Understanding your scores
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
              ⚙️ Account settings
            </button>
            <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg">
              💳 Billing and plans
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Tickets</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3">Ticket ID</th>
                <th className="text-left py-3">Subject</th>
                <th className="text-left py-3">Status</th>
                <th className="text-left py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3">#12345</td>
                <td className="py-3">Review processing issue</td>
                <td className="py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Resolved</span></td>
                <td className="py-3">Aug 20, 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
export default UserSupport