import React from 'react'
import { useState } from 'react'
import { FileText, Search, Filter, Grid, List, TrendingUp, Star, Clock, Download, Eye, Globe, Calendar } from 'lucide-react';
const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const resourceCategories = [
    { id: 'all', name: 'All Resources', count: 24 },
    { id: 'guides', name: 'Setup Guides', count: 8 },
    { id: 'tutorials', name: 'Video Tutorials', count: 6 },
    { id: 'templates', name: 'Templates', count: 5 },
    { id: 'api', name: 'API Documentation', count: 3 },
    { id: 'webinars', name: 'Webinars', count: 2 }
  ];

  // ✅ FIXED: Define helper functions at component level
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'PDF Guide': return <FileText className="w-5 h-5 text-blue-600" />;
      case 'Video': return <Eye className="w-5 h-5 text-purple-600" />;
      case 'Template Pack': return <Star className="w-5 h-5 text-yellow-600" />;
      case 'Documentation': return <Globe className="w-5 h-5 text-green-600" />;
      case 'Live Webinar': return <Calendar className="w-5 h-5 text-red-600" />;
      default: return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  const resources = [
    {
      id: 1,
      title: "Complete Setup Guide for Google My Business",
      description: "Step-by-step guide to connect and configure your Google My Business account with our platform.",
      category: 'guides',
      type: 'PDF Guide',
      duration: '15 min read',
      difficulty: 'Beginner',
      downloadUrl: '#',
      viewUrl: '#',
      thumbnail: '/api/placeholder/300/200',
      tags: ['GMB', 'Setup', 'Reviews'],
      downloadCount: 1247,
      rating: 4.8,
      lastUpdated: '2025-08-15'
    },
    {
      id: 2,
      title: "WhatsApp Business API Integration Guide",
      description: "Learn how to integrate WhatsApp Business API for automated customer communication.",
      category: 'guides',
      type: 'PDF Guide',
      duration: '20 min read',
      difficulty: 'Intermediate',
      downloadUrl: '#',
      viewUrl: '#',
      thumbnail: '/api/placeholder/300/200',
      tags: ['WhatsApp', 'API', 'Automation'],
      downloadCount: 892,
      rating: 4.9,
      lastUpdated: '2025-08-10'
    },
    {
      id: 3,
      title: "Social Media Automation Best Practices",
      description: "Master the art of automating Facebook, Instagram, and LinkedIn marketing campaigns.",
      category: 'guides',
      type: 'PDF Guide',
      duration: '25 min read',
      difficulty: 'Advanced',
      downloadUrl: '#',
      viewUrl: '#',
      thumbnail: '/api/placeholder/300/200',
      tags: ['Social Media', 'Automation', 'Marketing'],
      downloadCount: 675,
      rating: 4.7,
      lastUpdated: '2025-08-05'
    },
    {
      id: 4,
      title: "Getting Started with Code4 System - Platform Overview",
      description: "Complete walkthrough of the dashboard and all available features.",
      category: 'tutorials',
      type: 'Video',
      duration: '12 minutes',
      difficulty: 'Beginner',
      downloadUrl: '#',
      viewUrl: '#',
      thumbnail: '/api/placeholder/300/200',
      tags: ['Overview', 'Dashboard', 'Getting Started'],
      downloadCount: 2103,
      rating: 4.9,
      lastUpdated: '2025-08-20'
    },
    {
      id: 5,
      title: "Setting Up Review Response Templates",
      description: "Learn how to create and customize automated review response templates.",
      category: 'tutorials',
      type: 'Video',
      duration: '8 minutes',
      difficulty: 'Beginner',
      downloadUrl: '#',
      viewUrl: '#',
      thumbnail: '/api/placeholder/300/200',
      tags: ['Reviews', 'Templates', 'Automation'],
      downloadCount: 1456,
      rating: 4.8,
      lastUpdated: '2025-08-18'
    },
    {
      id: 6,
      title: "Professional Review Response Templates",
      description: "Ready-to-use templates for responding to positive, negative, and neutral reviews.",
      category: 'templates',
      type: 'Template Pack',
      duration: 'Instant use',
      difficulty: 'Beginner',
      downloadUrl: '#',
      viewUrl: '#',
      thumbnail: '/api/placeholder/300/200',
      tags: ['Reviews', 'Templates', 'Responses'],
      downloadCount: 3421,
      rating: 4.9,
      lastUpdated: '2025-08-12'
    },
    {
      id: 7,
      title: "WhatsApp Marketing Message Templates",
      description: "Proven WhatsApp message templates for different business scenarios and campaigns.",
      category: 'templates',
      type: 'Template Pack',
      duration: 'Instant use',
      difficulty: 'Beginner',
      downloadUrl: '#',
      viewUrl: '#',
      thumbnail: '/api/placeholder/300/200',
      tags: ['WhatsApp', 'Marketing', 'Messages'],
      downloadCount: 2187,
      rating: 4.7,
      lastUpdated: '2025-08-08'
    },
    {
      id: 8,
      title: "Code4 System API Documentation v2.0",
      description: "Complete API reference with endpoints, parameters, and code examples.",
      category: 'api',
      type: 'Documentation',
      duration: '45 min read',
      difficulty: 'Advanced',
      downloadUrl: '#',
      viewUrl: '#',
      thumbnail: '/api/placeholder/300/200',
      tags: ['API', 'Development', 'Integration'],
      downloadCount: 567,
      rating: 4.6,
      lastUpdated: '2025-08-25'
    },
    {
      id: 9,
      title: "Mastering Google Review Management - Live Webinar",
      description: "Join our expert-led session on advanced review management strategies.",
      category: 'webinars',
      type: 'Live Webinar',
      duration: '60 minutes',
      difficulty: 'Intermediate',
      downloadUrl: '#',
      viewUrl: '#',
      thumbnail: '/api/placeholder/300/200',
      tags: ['Reviews', 'Live', 'Expert Tips'],
      downloadCount: 234,
      rating: 4.9,
      lastUpdated: '2025-08-30'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resource Center</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to succeed with Code4 System - guides, tutorials, templates, and more.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-blue-600">{resources.length}</div>
          <div className="text-sm text-gray-600">Total Resources</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-green-600">15K+</div>
          <div className="text-sm text-gray-600">Downloads</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-purple-600">4.8★</div>
          <div className="text-sm text-gray-600">Avg Rating</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center">
          <div className="text-2xl font-bold text-yellow-600">Weekly</div>
          <div className="text-sm text-gray-600">New Content</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">View:</span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-4">
          {resourceCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid/List */}
      <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredResources.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-500">Try adjusting your search terms or browse different categories.</p>
          </div>
        ) : (
          filteredResources.map(resource => (
            <ResourceCard 
              key={resource.id} 
              resource={resource} 
              viewMode={viewMode}
              getDifficultyColor={getDifficultyColor}
              getTypeIcon={getTypeIcon}
            />
          ))
        )}
      </div>

      {/* Featured Section */}
      <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured This Week</h2>
          <p className="text-gray-600">Don't miss these popular resources from our community</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Most Downloaded</h3>
            <p className="text-sm text-gray-600 mb-3">Professional Review Response Templates</p>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">3,421 downloads</span>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Highest Rated</h3>
            <p className="text-sm text-gray-600 mb-3">WhatsApp Business API Integration Guide</p>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-xs text-gray-600">4.9/5</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Recently Added</h3>
            <p className="text-sm text-gray-600 mb-3">Code4 System API Documentation v2.0</p>
            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Added yesterday</span>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Get notified when we publish new resources and guides</p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ FIXED: Resource Card Component with proper function usage
const ResourceCard = ({ resource, viewMode, getDifficultyColor, getTypeIcon }) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              {/* ✅ USING getTypeIcon */}
              {getTypeIcon(resource.type)}
              <h3 className="text-lg font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">
                {resource.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-3">{resource.description}</p>
            <div className="flex items-center space-x-4 text-sm">
              {/* ✅ USING getDifficultyColor */}
              <span className={`px-2 py-1 rounded-full font-medium ${getDifficultyColor(resource.difficulty)}`}>
                {resource.difficulty}
              </span>
              <span className="text-gray-500">{resource.duration}</span>
              <span className="text-gray-500">{resource.downloadCount} downloads</span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span className="text-gray-500">{resource.rating}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 ml-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
              <Download className="w-4 h-4 inline mr-1" />
              Download
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              <Eye className="w-4 h-4 inline mr-1" />
              View
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-t-lg flex items-center justify-center">
        {/* ✅ USING getTypeIcon - Make it larger for thumbnail */}
        <div className="text-6xl">
          {React.cloneElement(getTypeIcon(resource.type), { className: "w-16 h-16" })}
        </div>
        <div className="absolute top-3 right-3">
          {/* ✅ USING getDifficultyColor */}
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
            {resource.difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            {/* ✅ USING getTypeIcon */}
            {getTypeIcon(resource.type)}
            <span className="text-xs text-purple-600 font-medium">{resource.type}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
            {resource.rating}
          </div>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-purple-600 cursor-pointer">
          {resource.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{resource.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>{resource.duration}</span>
          <span>{resource.downloadCount} downloads</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {resource.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm">
            <Download className="w-4 h-4 inline mr-1" />
            Download
          </button>
          <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;


