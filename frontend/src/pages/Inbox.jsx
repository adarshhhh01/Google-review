import React from 'react'



const MessageItem = ({ subject, preview, time, unread }) => (
    <div className={`p-4 hover:bg-gray-50 ${unread ? 'bg-blue-50' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className={`font-medium ${unread ? 'text-blue-900' : 'text-gray-900'}`}>
            {subject}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{preview}</p>
        </div>
        <span className="text-sm text-gray-500 ml-4">{time}</span>
      </div>
    </div>
  );

  const Inbox = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Inbox</h1>
        <p className="text-gray-600 mt-2">Messages and notifications</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-gray-900">Messages</h2>
            <button className="text-blue-600 hover:text-blue-800">Mark all as read</button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          <MessageItem 
            subject="Review Completed: Business Plan Analysis"
            preview="Your business plan has been analyzed with a score of 8.5/10..."
            time="2 hours ago"
            unread={true}
          />
          <MessageItem 
            subject="New Feature: Advanced Analytics Available"
            preview="We've launched new analytics features to help you track..."
            time="1 day ago"
            unread={false}
          />
          <MessageItem 
            subject="Weekly Summary Report"
            preview="Here's your weekly review performance summary..."
            time="3 days ago"
            unread={false}
          />
        </div>
      </div>
    </div>
  );

export default Inbox