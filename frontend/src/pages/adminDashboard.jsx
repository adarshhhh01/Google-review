import React, { useState,  } from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import Pricing from '../components/Pricing';
import AdminLogo from '../assets/admin_Logo.png';
import { 
  Shield,
  Users,
  Settings, 
  LogOut,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Plus,
  BarChart3,
  TrendingUp,
  Activity,
  Mail,
  MessageSquare,
  Smartphone,
  Server,
  CreditCard,
  Crown,
  Zap,
  Globe,
  Database,
  Headphones,
  UserCheck,
  UserX,
  DollarSign,
  Calendar,
  Clock,
  Star,
  FileText,
  Save,
  RefreshCw,
  Download,
  Upload,
  Bell,
  Lock,
  Unlock
} from 'lucide-react';


// const submitHandler = (e) => {
//   e.preventDefault();


// };

const AdminDashboard = () => {
  const [admin, ] = useState({ 
    username: 'Admin User',
    email: 'admin@company.com',
    role: 'Super Admin'
  });
  
  const [activeTab, setActiveTab] = useState('analytics');
  const [dateFilter, setDateFilter] = useState('month');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for analytics
  const analyticsData = {
    month: [
      { name: 'Jan', users: 65, revenue: 2400, reviews: 340 },
      { name: 'Feb', users: 89, revenue: 1398, reviews: 450 },
      { name: 'Mar', users: 78, revenue: 3800, reviews: 320 },
      { name: 'Apr', users: 91, revenue: 3908, reviews: 580 },
      { name: 'May', users: 103, revenue: 4800, reviews: 670 },
      { name: 'Jun', users: 125, revenue: 3800, reviews: 890 }
    ],
    year: [
      { name: '2021', users: 450, revenue: 24000, reviews: 3400 },
      { name: '2022', users: 680, revenue: 35000, reviews: 4500 },
      { name: '2023', users: 890, revenue: 48000, reviews: 6200 },
      { name: '2024', users: 1200, revenue: 62000, reviews: 8900 }
    ],
    day: [
      { name: 'Mon', users: 12, revenue: 240, reviews: 34 },
      { name: 'Tue', users: 18, revenue: 380, reviews: 45 },
      { name: 'Wed', users: 15, revenue: 290, reviews: 32 },
      { name: 'Thu', users: 22, revenue: 420, reviews: 58 },
      { name: 'Fri', users: 28, revenue: 510, reviews: 67 },
      { name: 'Sat', users: 19, revenue: 340, reviews: 43 },
      { name: 'Sun', users: 14, revenue: 280, reviews: 38 }
    ]
  };

  const userPlanData = [
    { name: 'Free', value: 45, color: '#8884d8' },
    { name: 'Basic', value: 35, color: '#82ca9d' },
    { name: 'Pro', value: 15, color: '#ffc658' },
    { name: 'Enterprise', value: 5, color: '#ff7300' }
  ];

  const [users, ] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', plan: 'Pro', status: 'active', joined: '2024-01-15', lastActive: '2024-08-20' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', plan: 'Basic', status: 'active', joined: '2024-02-20', lastActive: '2024-08-19' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', plan: 'Free', status: 'inactive', joined: '2024-03-10', lastActive: '2024-08-15' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', plan: 'Enterprise', status: 'active', joined: '2024-01-05', lastActive: '2024-08-21' }
  ]);

  const [plans, ] = useState([
    { id: 1, name: 'Free', price: 0, features: ['5 Reviews', 'Basic Analytics'], users: 450, status: 'active' },
    { id: 2, name: 'Basic', price: 19, features: ['50 Reviews', 'Advanced Analytics', 'Email Support'], users: 350, status: 'active' },
    { id: 3, name: 'Pro', price: 49, features: ['Unlimited Reviews', 'Custom Branding', 'Priority Support'], users: 150, status: 'active' },
    { id: 4, name: 'Enterprise', price: 99, features: ['Everything in Pro', 'API Access', 'Dedicated Manager'], users: 50, status: 'active' }
  ]);

  const [supportTickets, ] = useState([
    { id: 1, user: 'John Doe', subject: 'Integration Issue', priority: 'high', status: 'open', created: '2024-08-20' },
    { id: 2, user: 'Jane Smith', subject: 'Payment Problem', priority: 'medium', status: 'in-progress', created: '2024-08-19' },
    { id: 3, user: 'Bob Wilson', subject: 'Feature Request', priority: 'low', status: 'closed', created: '2024-08-18' }
  ]);

  const [config, setConfig] = useState({
    smtp: {
      host: 'smtp.gmail.com',
      port: 587,
      username: 'noreply@company.com',
      password: '••••••••',
      secure: true
    },
    whatsapp: {
      apiKey: '••••••••••••••••',
      phoneNumber: '+1234567890',
      enabled: true
    },
    general: {
      siteName: 'ReviewPro',
      maintenance: false,
      registrationOpen: true,
      emailVerification: true
    }
  });

  const sidebarItems = [
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'plans', label: 'Plan Management', icon: CreditCard },
    { id: 'config', label: 'Configuration', icon: Settings },
    { id: 'support', label: 'Support', icon: Headphones }
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h2>
        <div className="flex space-x-2">
          {['day', 'month', 'year'].map((period) => (
            <button
              key={period}
              onClick={() => setDateFilter(period)}
              className={`px-4 py-2 rounded-lg capitalize ${
                dateFilter === period 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Users</p>
              <p className="text-2xl font-bold text-gray-800">1,247</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-green-600 text-sm mt-2">↑ 12% from last period</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Revenue</p>
              <p className="text-2xl font-bold text-gray-800">$48,392</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
          <p className="text-green-600 text-sm mt-2">↑ 8% from last period</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Reviews</p>
              <p className="text-2xl font-bold text-gray-800">8,942</p>
            </div>
            <Star className="h-8 w-8 text-purple-500" />
          </div>
          <p className="text-green-600 text-sm mt-2">↑ 15% from last period</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Support Tickets</p>
              <p className="text-2xl font-bold text-gray-800">23</p>
            </div>
            <Headphones className="h-8 w-8 text-orange-500" />
          </div>
          <p className="text-red-600 text-sm mt-2">↑ 3% from last period</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData[dateFilter]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#3B82F6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Revenue Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={analyticsData[dateFilter]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Reviews Analytics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData[dateFilter]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reviews" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">User Distribution by Plan</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userPlanData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {userPlanData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">User Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add User</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>All Plans</option>
              <option>Free</option>
              <option>Basic</option>
              <option>Pro</option>
              <option>Enterprise</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Active</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <div className="font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.plan === 'Enterprise' ? 'bg-purple-100 text-purple-800' :
                      user.plan === 'Pro' ? 'bg-blue-100 text-blue-800' :
                      user.plan === 'Basic' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center space-x-1 ${
                      user.status === 'active' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {user.status === 'active' ? <UserCheck className="h-4 w-4" /> : <UserX className="h-4 w-4" />}
                      <span className="capitalize">{user.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.joined}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{user.lastActive}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPlanManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Plan Management</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Plan</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-white rounded-lg shadow-md p-6 border hover:border-blue-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${
                plan.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {plan.status}
              </span>
            </div>
            
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
              <span className="text-gray-600">/month</span>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Features:</p>
              <ul className="space-y-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600">Active Users: <span className="font-semibold">{plan.users}</span></p>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-sm">
                Edit
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 text-sm">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Plan Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">$18,542</p>
            <p className="text-gray-600">Monthly Recurring Revenue</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">1,000</p>
            <p className="text-gray-600">Total Subscribers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">92%</p>
            <p className="text-gray-600">Customer Retention</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderConfiguration = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Configuration</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SMTP Configuration */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Mail className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">SMTP Configuration</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SMTP Host</label>
              <input
                type="text"
                value={config.smtp.host}
                onChange={(e) => setConfig({...config, smtp: {...config.smtp, host: e.target.value}})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Port</label>
              <input
                type="number"
                value={config.smtp.port}
                onChange={(e) => setConfig({...config, smtp: {...config.smtp, port: e.target.value}})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={config.smtp.username}
                onChange={(e) => setConfig({...config, smtp: {...config.smtp, username: e.target.value}})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={config.smtp.password}
                onChange={(e) => setConfig({...config, smtp: {...config.smtp, password: e.target.value}})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="smtp-secure"
                checked={config.smtp.secure}
                onChange={(e) => setConfig({...config, smtp: {...config.smtp, secure: e.target.checked}})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="smtp-secure" className="ml-2 text-sm text-gray-700">Use SSL/TLS</label>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Test Connection
            </button>
          </div>
        </div>

        {/* WhatsApp Configuration */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Smartphone className="h-5 w-5 text-green-600" />
            <h3 className="text-lg font-semibold">WhatsApp Configuration</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">API Key</label>
              <input
                type="password"
                value={config.whatsapp.apiKey}
                onChange={(e) => setConfig({...config, whatsapp: {...config.whatsapp, apiKey: e.target.value}})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                value={config.whatsapp.phoneNumber}
                onChange={(e) => setConfig({...config, whatsapp: {...config.whatsapp, phoneNumber: e.target.value}})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="whatsapp-enabled"
                checked={config.whatsapp.enabled}
                onChange={(e) => setConfig({...config, whatsapp: {...config.whatsapp, enabled: e.target.checked}})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="whatsapp-enabled" className="ml-2 text-sm text-gray-700">Enable WhatsApp Integration</label>
            </div>
            
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
              Test Connection
            </button>
          </div>
        </div>

        {/* General Settings */}
        <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <Settings className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold">General Settings</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
              <input
                type="text"
                value={config.general.siteName}
                onChange={(e) => setConfig({...config, general: {...config.general, siteName: e.target.value}})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="maintenance"
                  checked={config.general.maintenance}
                  onChange={(e) => setConfig({...config, general: {...config.general, maintenance: e.target.checked}})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="maintenance" className="ml-2 text-sm text-gray-700">Maintenance Mode</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="registration"
                  checked={config.general.registrationOpen}
                  onChange={(e) => setConfig({...config, general: {...config.general, registrationOpen: e.target.checked}})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="registration" className="ml-2 text-sm text-gray-700">Open Registration</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="email-verification"
                  checked={config.general.emailVerification}
                  onChange={(e) => setConfig({...config, general: {...config.general, emailVerification: e.target.checked}})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="email-verification" className="ml-2 text-sm text-gray-700">Email Verification Required</label>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
              <Save className="h-4 w-4" />
              <span>Save Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Support Management</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh</span>
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Open Tickets</p>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
            <AlertCircle className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">In Progress</p>
              <p className="text-2xl font-bold text-gray-800">8</p>
            </div>
            <Clock className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Resolved Today</p>
              <p className="text-2xl font-bold text-gray-800">15</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg Response Time</p>
              <p className="text-2xl font-bold text-gray-800">2.4h</p>
            </div>
            <Activity className="h-8 w-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Support Tickets Table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <div className="flex space-x-4">
            <div className="flex-1 relative">
              <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>All Priorities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>Open</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ticket ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {supportTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">#{ticket.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{ticket.user}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{ticket.subject}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      ticket.priority === 'high' ? 'bg-red-100 text-red-800' :
                      ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      ticket.status === 'open' ? 'bg-red-100 text-red-800' :
                      ticket.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{ticket.created}</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-800">
                        <MessageSquare className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <XCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2" >
                      
                      <button className="text-grey-600 hover:text-white bg-yellow-500 p-2 rounded-2xl">
                        <a href="/user-Dashboard">Login</a>
                      </button>
                     
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'analytics':
        return renderAnalytics();
      case 'users':
        return renderUserManagement();
      case 'plans':
        return renderPlanManagement();
      case 'config':
        return renderConfiguration();
      case 'support':
        return renderSupport();
      default:
        return renderAnalytics();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
           
            <img src={AdminLogo} className=" w-40" alt="AdminLogo" />
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center space-x-3">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {admin.username}
                </p>
                <p className="text-xs text-gray-600">{admin.role}</p>
              </div>
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {admin.username.charAt(0)}
              </div>
            </div>

            <button className="p-2 text-gray-600 hover:text-gray-900">
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <nav className="mt-6">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-50 ${
                  activeTab === item.id
                    ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                    : "text-gray-700"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminDashboard;
              