import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Logo from '../assets/logo.png'; // Adjust the path as necessary
import Inbox from './Inbox';
import Support from './UserSupport';
import AutoReply from './Autoreply';
import { 
  User, 
  Upload, 
  FileText, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Search,
  Filter,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Star,
  Calendar,
  TrendingUp,
  MessageCircle,
  Inbox as InboxIcon,
  Users,
  Globe,
  Headphones,
  Zap,
  Bot,
  Send,
  RefreshCw
  
} from 'lucide-react';

const UserDashboard = () => {
  const [user, ] = useState({ 
    username: 'john_doe', 
    email: 'john@example.com', 
    role: 'user' 
  });
  const [currentView, setCurrentView] = useState('dashboard');
  const [reviews, setReviews] = useState([]);
  // const [analytics, setAnalytics] = useState({});
  // const [loading, setLoading] = useState(false);
  const [timeFilter, setTimeFilter] = useState('month');

  

  // Mock analytics data
  const analyticsData = {
    month: [
      { name: 'Jan', reviews: 4, score: 7.2 },
      { name: 'Feb', reviews: 6, score: 7.8 },
      { name: 'Mar', reviews: 8, score: 8.1 },
      { name: 'Apr', reviews: 5, score: 7.9 },
      { name: 'May', reviews: 9, score: 8.4 },
      { name: 'Jun', reviews: 7, score: 8.2 }
    ],
    year: [
      { name: '2022', reviews: 45, score: 7.1 },
      { name: '2023', reviews: 78, score: 7.8 },
      { name: '2024', reviews: 92, score: 8.3 }
    ],
    day: [
      { name: 'Mon', reviews: 2, score: 8.1 },
      { name: 'Tue', reviews: 1, score: 7.9 },
      { name: 'Wed', reviews: 3, score: 8.4 },
      { name: 'Thu', reviews: 2, score: 8.0 },
      { name: 'Fri', reviews: 4, score: 8.6 },
      { name: 'Sat', reviews: 1, score: 7.8 },
      { name: 'Sun', reviews: 2, score: 8.2 }
    ]
  };

  const categoryData = [
    { name: 'Academic', value: 35, color: '#3B82F6' },
    { name: 'Business', value: 28, color: '#10B981' },
    { name: 'Technical', value: 22, color: '#F59E0B' },
    { name: 'Creative', value: 15, color: '#EF4444' }
  ];

  useEffect(() => {
    setReviews([
      {
        id: 1,
        title: "Business Plan Analysis",
        category: "business",
        status: "completed",
        overallScore: 8.5,
        createdAt: "2024-08-20T10:00:00Z",
        priority: "high"
      },
      {
        id: 2,
        title: "Technical Documentation Review",
        category: "technical",
        status: "processing",
        overallScore: null,
        createdAt: "2024-08-21T14:30:00Z",
        priority: "medium"
      }
    ]);
  }, []);

  const Sidebar = () => (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900"><img src={Logo} alt="Logo" /></h1>
        <h2 className="text-lg text-center text-gray-800 mt-1 "><i>User Dashboard</i></h2>
      </div>
      
      <nav className="mt-8">
        <NavItem icon={BarChart3} label="Dashboard" view="dashboard" />
        <NavItem icon={TrendingUp} label="Analytics" view="analytics" />
        <NavItem icon={FileText} label="My Reviews" view="reviews" />
        <NavItem icon={Plus} label="Submit Review" view="submit" />
        <NavItem icon={Zap} label="Integration" view="integration" />
        <NavItem icon={InboxIcon} label="Inbox" view="inbox" />
        <NavItem icon={Globe} label="Testimonials" view="testimonials" />
        <NavItem icon={Bot} label="Auto Reply" view="auto-reply" />
        <NavItem icon={Headphones} label="Support" view="Support" />
        <NavItem icon={Settings} label="Settings" view="settings" />
        <NavItem icon={LogOut} label="Logout" view="logout" />
      </nav>
    </div>
  );

  const NavItem = ({ icon: Icon, label, view }) => (
    <button
      onClick={() => setCurrentView(view)}
      className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
        currentView === view ? 'bg-blue-50 border-r-2 border-blue-500 text-blue-700' : 'text-gray-700'
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      {label}
    </button>
  );

  const Dashboard = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back, {user.username}! Here's your overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Total Reviews" value="47" icon={FileText} color="blue" />
        <StatsCard title="Completed" value="42" icon={CheckCircle} color="green" />
        <StatsCard title="Avg Score" value="8.3" icon={Star} color="purple" />
        <StatsCard title="This Month" value="9" icon={Calendar} color="yellow" />
      </div>

      {/* Quick Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Performance</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={analyticsData.month.slice(-6)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({name, value}) => `${name}: ${value}%`}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Recent Reviews</h2>
        </div>
        <div className="p-6">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );


  const Analytics = () => (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-2">Track your review performance and growth</p>
        </div>
        <div className="flex space-x-4">
          <select 
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2"
          >
            <option value="day">Daily</option>
            <option value="month">Monthly</option>
            <option value="year">Yearly</option>
          </select>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard title="Growth Rate" value="+23%" icon={TrendingUp} color="green" />
        <StatsCard title="Best Score" value="9.2" icon={Star} color="purple" />
        <StatsCard title="Avg Processing" value="2.4s" icon={Clock} color="blue" />
        <StatsCard title="Success Rate" value="96%" icon={CheckCircle} color="green" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Volume</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData[timeFilter]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="reviews" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Score Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData[timeFilter]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900">Most Improved Area</h4>
            <p className="text-blue-700 mt-1">Technical Writing (+15%)</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900">Highest Category Score</h4>
            <p className="text-green-700 mt-1">Business Plans (8.9/10)</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-900">Review Streak</h4>
            <p className="text-purple-700 mt-1">15 days active</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Integration = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Integration</h1>
        <p className="text-gray-600 mt-2">Connect ReviewAI with your favorite tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <IntegrationCard 
          name="Google Docs" 
          description="Sync your documents for automatic review"
          icon="📄"
          connected={true}
        />
        <IntegrationCard 
          name="Microsoft Office" 
          description="Import Word documents and presentations"
          icon="📊"
          connected={false}
        />
        <IntegrationCard 
          name="Slack" 
          description="Get review notifications in your workspace"
          icon="💬"
          connected={true}
        />
        <IntegrationCard 
          name="GitHub" 
          description="Review code and documentation automatically"
          icon="💻"
          connected={false}
        />
        <IntegrationCard 
          name="Zapier" 
          description="Automate workflows with 3000+ apps"
          icon="⚡"
          connected={false}
        />
        <IntegrationCard 
          name="API Access" 
          description="Build custom integrations with our API"
          icon="🔗"
          connected={true}
        />
      </div>
    </div>
  );

  const IntegrationCard = ({ name, description, icon, connected }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
          connected 
            ? 'bg-green-100 text-green-800' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}>
          {connected ? 'Connected' : 'Connect'}
        </button>
      </div>
      <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );



  const Testimonials = () => (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Public Testimonials</h1>
        <p className="text-gray-600 mt-2">Share your success stories with the community</p>
      </div>

      <div className="mb-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Share New Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TestimonialCard 
          rating={5}
          text="ReviewAI helped me improve my academic papers significantly. The detailed feedback is incredibly valuable!"
          author="Anonymous User"
          category="Academic"
        />
        <TestimonialCard 
          rating={4}
          text="Great tool for business document analysis. The AI suggestions saved me hours of editing work."
          author="Business Professional"
          category="Business"
        />
      </div>
    </div>
  );

  const TestimonialCard = ({ rating, text, author, category }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
        ))}
        <span className="ml-2 text-sm text-gray-600">{category}</span>
      </div>
      <p className="text-gray-700 mb-4">"{text}"</p>
      <p className="text-sm text-gray-500">- {author}</p>
    </div>
  );


  

  // const AutoReply = () => (
  //   <div className="p-8">
  //     <div className="mb-8">
  //       <h1 className="text-3xl font-bold text-gray-900">Auto Reply</h1>
  //       <p className="text-gray-600 mt-2">Configure automated responses for your reviews</p>
  //     </div>

  //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  //       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
  //         <h3 className="text-lg font-semibold text-gray-900 mb-4">Auto Reply Settings</h3>
          
  //         <div className="space-y-4">
  //           <div>
  //             <label className="flex items-center">
  //               <input type="checkbox" className="mr-3" defaultChecked />
  //               <span>Enable auto-reply for completed reviews</span>
  //             </label>
  //           </div>
            
  //           <div>
  //             <label className="flex items-center">
  //               <input type="checkbox" className="mr-3" />
  //               <span>Send follow-up suggestions</span>
  //             </label>
  //           </div>
            
  //           <div>
  //             <label className="block text-sm font-medium text-gray-700 mb-2">
  //               Response Template
  //             </label>
  //             <textarea 
  //               className="w-full p-3 border border-gray-300 rounded-lg"
  //               rows={4}
  //               defaultValue="Thank you for using ReviewAI! Your review has been completed with a score of {score}. Check out the detailed feedback in your dashboard."
  //             />
  //           </div>
            
  //           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
  //             Save Settings
  //           </button>
  //         </div>
  //       </div>

  //       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
  //         <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Auto Replies</h3>
          
  //         <div className="space-y-4">
  //           <div className="p-3 bg-gray-50 rounded-lg">
  //             <p className="text-sm font-medium">Business Plan Analysis</p>
  //             <p className="text-xs text-gray-600 mt-1">Auto-reply sent 2 hours ago</p>
  //           </div>
            
  //           <div className="p-3 bg-gray-50 rounded-lg">
  //             <p className="text-sm font-medium">Technical Documentation</p>
  //             <p className="text-xs text-gray-600 mt-1">Auto-reply sent 1 day ago</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );



  const StatsCard = ({ title, value, icon: Icon, color }) => {
    const colors = {
      blue: 'bg-blue-50 text-blue-700',
      green: 'bg-green-50 text-green-700',
      yellow: 'bg-yellow-50 text-yellow-700',
      purple: 'bg-purple-50 text-purple-700'
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          </div>
          <div className={`p-3 rounded-full ${colors[color]}`}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </div>
    );
  };

  const ReviewCard = ({ review }) => (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg mb-3 last:mb-0">
      <div className="flex items-center space-x-4">
        {review.status === 'completed' && <CheckCircle className="w-5 h-5 text-green-500" />}
        {review.status === 'processing' && <Clock className="w-5 h-5 text-blue-500 animate-spin" />}
        {review.status === 'pending' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
        <div>
          <h3 className="font-medium text-gray-900">{review.title}</h3>
          <p className="text-sm text-gray-500 capitalize">{review.category}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {review.overallScore && (
          <span className="text-sm font-medium text-gray-900">{review.overallScore}/10</span>
        )}
        <button className="text-blue-600 hover:text-blue-800">
          <Eye className="w-5 h-5" />
        </button>
      </div>
    </div>
  );

  // const renderCurrentView = () => {
  //   switch (currentView) {
  //     case 'dashboard': return <Dashboard />;
  //     case 'analytics': return <Analytics />;
  //     case 'integration': return <Integration />;
  //     case 'inbox': return <Inbox />;
  //     case 'testimonials': return <Testimonials />;
  //     case 'auto-reply': return <AutoReply />;
  //     case 'support': return <Support />;
  //     default: return <Dashboard />;
  //   }
  // };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />
      <main className="flex-1">
      {currentView === 'dashboard' && <Dashboard />}
      {currentView === 'analytics' && <Analytics />}
      {currentView === 'reviews' && <reviews />}
      {currentView === 'submit' && <setReviews />}
      {currentView === 'integration' && <Integration />}
      {currentView === 'inbox' && <Inbox />} 
      {currentView === 'testimonials' && <Testimonials />}
      {currentView === 'auto-reply' && <AutoReply />}
      {currentView === 'Support' && <Support />}
      {currentView === 'settings' && <Settings />}
      {currentView === 'logout' && <Logout />}
    </main>
      <footer/>
    </div>
  );
};

export default UserDashboard;