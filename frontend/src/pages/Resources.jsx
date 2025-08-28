import React, { useState, useEffect } from 'react';
import { 
  FileText, Search, Filter, Grid, List, TrendingUp, Star, Clock, 
  Download, Eye, Globe, Calendar, Play, ExternalLink, AlertCircle 
} from 'lucide-react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [isLoading, setIsLoading] = useState(false);
  const [resources, setResources] = useState([]);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');
  const [expandedCards, setExpandedCards] = useState(new Set());

  // Initialize with updated resources data (removed items 4 and 9)
  useEffect(() => {
    const initialResources = [
      {
        id: 1,
        title: "Complete Setup Guide for Google My Business",
        description: "Step-by-step guide to connect and configure your Google My Business account with our platform. Learn how to optimize your business profile for better visibility.",
        category: 'guides',
        type: 'PDF Guide',
        duration: '15 min read',
        difficulty: 'Beginner',
        downloadUrl: 'https://docs.google.com/document/d/1example/export?format=pdf',
        viewUrl: 'https://support.google.com/business/answer/2911778',
        previewUrl: 'https://business.google.com/create',
        tags: ['GMB', 'Setup', 'Reviews', 'SEO'],
        downloadCount: 1247,
        rating: 4.8,
        lastUpdated: '2025-08-15',
        isNew: false,
        featured: false
      },
      {
        id: 2,
        title: "WhatsApp Business API Integration Guide",
        description: "Learn how to integrate WhatsApp Business API for automated customer communication. Includes webhook setup and message templates.",
        category: 'guides',
        type: 'PDF Guide',
        duration: '20 min read',
        difficulty: 'Intermediate',
        downloadUrl: 'https://developers.facebook.com/docs/whatsapp/getting-started',
        viewUrl: 'https://developers.facebook.com/docs/whatsapp',
        previewUrl: 'https://business.whatsapp.com/api',
        tags: ['WhatsApp', 'API', 'Automation', 'Integration'],
        downloadCount: 892,
        rating: 4.9,
        lastUpdated: '2025-08-10',
        isNew: false,
        featured: true
      },
      {
        id: 3,
        title: "Social Media Automation Best Practices",
        description: "Master the art of automating Facebook, Instagram, and LinkedIn marketing campaigns with proven strategies and tools.",
        category: 'guides',
        type: 'PDF Guide',
        duration: '25 min read',
        difficulty: 'Advanced',
        downloadUrl: 'https://www.hootsuite.com/resources/social-media-automation',
        viewUrl: 'https://blog.hootsuite.com/social-media-automation/',
        previewUrl: 'https://help.hootsuite.com/hc/en-us/articles/204585267',
        tags: ['Social Media', 'Automation', 'Marketing', 'Strategy'],
        downloadCount: 675,
        rating: 4.7,
        lastUpdated: '2025-08-05',
        isNew: false,
        featured: false
      },
      {
        id: 5,
        title: "Setting Up Review Response Templates",
        description: "Learn how to create and customize automated review response templates for different scenarios.",
        category: 'tutorials',
        type: 'Video',
        duration: '8 minutes',
        difficulty: 'Beginner',
        downloadUrl: 'https://drive.google.com/file/d/1review-response-templates/download',
        viewUrl: 'https://code4system.com/tutorials/review-response-templates',
        previewUrl: 'https://code4system.com/preview/review-response-templates',
        tags: ['Reviews', 'Templates', 'Automation', 'Responses'],
        downloadCount: 1456,
        rating: 4.8,
        lastUpdated: '2025-08-18',
        isNew: true,
        featured: false
      },
      {
        id: 6,
        title: "Professional Review Response Templates",
        description: "Ready-to-use templates for responding to positive, negative, and neutral reviews across all platforms.",
        category: 'templates',
        type: 'Template Pack',
        duration: 'Instant use',
        difficulty: 'Beginner',
        downloadUrl: 'https://drive.google.com/file/d/1professional-review-templates/download',
        viewUrl: 'https://code4system.com/templates/professional-review-responses',
        previewUrl: 'https://code4system.com/preview/professional-review-responses',
        tags: ['Reviews', 'Templates', 'Responses', 'Customer Service'],
        downloadCount: 3421,
        rating: 4.9,
        lastUpdated: '2025-08-12',
        isNew: false,
        featured: true
      },
      {
        id: 7,
        title: "WhatsApp Marketing Message Templates",
        description: "Proven WhatsApp message templates for different business scenarios, campaigns, and customer touchpoints.",
        category: 'templates',
        type: 'Template Pack',
        duration: 'Instant use',
        difficulty: 'Beginner',
        downloadUrl: 'https://drive.google.com/file/d/1whatsapp-marketing-templates/download',
        viewUrl: 'https://code4system.com/templates/whatsapp-marketing-messages',
        previewUrl: 'https://code4system.com/preview/whatsapp-marketing-messages',
        tags: ['WhatsApp', 'Marketing', 'Messages', 'Templates'],
        downloadCount: 2187,
        rating: 4.7,
        lastUpdated: '2025-08-08',
        isNew: false,
        featured: false
      },
      {
        id: 8,
        title: "Code4 System API Documentation v2.0",
        description: "Complete API reference with endpoints, parameters, authentication, and practical code examples in multiple languages.",
        category: 'api',
        type: 'Documentation',
        duration: '45 min read',
        difficulty: 'Advanced',
        downloadUrl: 'https://api-docs.code4system.com/v2.0/download/pdf',
        viewUrl: 'https://api-docs.code4system.com/v2.0',
        previewUrl: 'https://api-docs.code4system.com/v2.0/preview',
        tags: ['API', 'Development', 'Integration', 'Documentation'],
        downloadCount: 567,
        rating: 4.6,
        lastUpdated: '2025-08-25',
        isNew: true,
        featured: false
      }
    ];
    
    setResources(initialResources);
  }, []);

  const resourceCategories = [
    { id: 'all', name: 'All Resources', count: resources.length },
    { id: 'guides', name: 'Setup Guides', count: resources.filter(r => r.category === 'guides').length },
    { id: 'tutorials', name: 'Video Tutorials', count: resources.filter(r => r.category === 'tutorials').length },
    { id: 'templates', name: 'Templates', count: resources.filter(r => r.category === 'templates').length },
    { id: 'api', name: 'API Documentation', count: resources.filter(r => r.category === 'api').length },
    { id: 'webinars', name: 'Webinars', count: resources.filter(r => r.category === 'webinars').length }
  ];

  // Helper functions
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'PDF Guide': return <FileText className="w-5 h-5 text-blue-600" />;
      case 'Video': return <Play className="w-5 h-5 text-purple-600" />;
      case 'Template Pack': return <Star className="w-5 h-5 text-yellow-600" />;
      case 'Documentation': return <Globe className="w-5 h-5 text-green-600" />;
      case 'Live Webinar': return <Calendar className="w-5 h-5 text-red-600" />;
      default: return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  // Handle resource actions
  const handleDownload = async (resource) => {
    setIsLoading(true);
    try {
      // Simulate download tracking
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update download count
      setResources(prev => prev.map(r => 
        r.id === resource.id 
          ? { ...r, downloadCount: r.downloadCount + 1 }
          : r
      ));

      // Open download link
      if (resource.downloadUrl && resource.downloadUrl !== '#') {
        window.open(resource.downloadUrl, '_blank');
      } else {
        alert('Download will be available soon!');
      }
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleView = (resource) => {
    if (resource.viewUrl && resource.viewUrl !== '#') {
      window.open(resource.viewUrl, '_blank');
    } else {
      alert('Preview will be available soon!');
    }
  };

  const handlePreview = (resource) => {
    if (resource.previewUrl) {
      window.open(resource.previewUrl, '_blank');
    }
  };

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    setSubscribeStatus('subscribing');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus(''), 3000);
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus(''), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  // Toggle card expansion
  const toggleCardExpansion = (resourceId) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(resourceId)) {
        newSet.delete(resourceId);
      } else {
        newSet.add(resourceId);
      }
      return newSet;
    });
  };

  // Filter resources
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Calculate stats
  const totalDownloads = resources.reduce((sum, resource) => sum + resource.downloadCount, 0);
  const avgRating = resources.reduce((sum, resource) => sum + resource.rating, 0) / resources.length;
  const newResourcesCount = resources.filter(r => r.isNew).length;

  return (
    <div className="p-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4 shadow-lg">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resource Center</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Everything you need to succeed with Code4 System - guides, tutorials, templates, and more.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-blue-600">{resources.length}</div>
          <div className="text-sm text-gray-600">Total Resources</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-green-600">{totalDownloads.toLocaleString()}+</div>
          <div className="text-sm text-gray-600">Downloads</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-purple-600">{avgRating.toFixed(1)}★</div>
          <div className="text-sm text-gray-600">Avg Rating</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
          <div className="text-2xl font-bold text-yellow-600">{newResourcesCount}</div>
          <div className="text-sm text-gray-600">New This Week</div>
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">View:</span>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-4">
          {resourceCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-purple-600 text-white shadow-md transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
          <p className="mt-2 text-gray-600">Processing...</p>
        </div>
      )}

      {/* Resources Grid/List */}
      <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredResources.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-500">Try adjusting your search terms or browse different categories.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
              className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          filteredResources.map(resource => (
            <ResourceCard 
              key={resource.id} 
              resource={resource} 
              viewMode={viewMode}
              getDifficultyColor={getDifficultyColor}
              getTypeIcon={getTypeIcon}
              onDownload={handleDownload}
              onView={handleView}
              onPreview={handlePreview}
              isExpanded={expandedCards.has(resource.id)}
              onToggleExpand={() => toggleCardExpansion(resource.id)}
              isLoading={isLoading}
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
          {resources.filter(r => r.featured).slice(0, 3).map((resource, index) => (
            <div key={resource.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mb-4">
                {index === 0 ? <TrendingUp className="w-6 h-6 text-blue-600" /> :
                 index === 1 ? <Star className="w-6 h-6 text-green-600" /> :
                 <Clock className="w-6 h-6 text-purple-600" />}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {index === 0 ? 'Most Downloaded' : index === 1 ? 'Highest Rated' : 'Recently Added'}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{resource.title}</p>
              {index === 0 && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {resource.downloadCount.toLocaleString()} downloads
                </span>
              )}
              {index === 1 && (
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-xs text-gray-600">{resource.rating}/5</span>
                </div>
              )}
              {index === 2 && (
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                  Added {resource.lastUpdated}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-8 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Get notified when we publish new resources and guides</p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              />
              <button 
                type="submit"
                disabled={isLoading || !email}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {subscribeStatus === 'subscribing' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            {subscribeStatus === 'success' && (
              <p className="text-green-600 text-sm mt-2">✓ Successfully subscribed!</p>
            )}
            {subscribeStatus === 'error' && (
              <p className="text-red-600 text-sm mt-2">✗ Subscription failed. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

// Enhanced Resource Card Component
const ResourceCard = ({ 
  resource, 
  viewMode, 
  getDifficultyColor, 
  getTypeIcon, 
  onDownload, 
  onView, 
  onPreview, 
  isExpanded, 
  onToggleExpand,
  isLoading 
}) => {
  if (viewMode === 'list') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              {getTypeIcon(resource.type)}
              <h3 className="text-lg font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">
                {resource.title}
              </h3>
              {resource.isNew && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                  NEW
                </span>
              )}
              {resource.featured && (
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              )}
            </div>
            
            <p className="text-gray-600 mb-3">
              {isExpanded ? resource.description : `${resource.description.substring(0, 120)}...`}
              <button 
                onClick={onToggleExpand}
                className="text-purple-600 hover:text-purple-700 ml-2 text-sm font-medium"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            </p>
            
            <div className="flex items-center space-x-4 text-sm mb-3">
              <span className={`px-2 py-1 rounded-full font-medium border ${getDifficultyColor(resource.difficulty)}`}>
                {resource.difficulty}
              </span>
              <span className="text-gray-500 flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {resource.duration}
              </span>
              <span className="text-gray-500 flex items-center">
                <Download className="w-4 h-4 mr-1" />
                {resource.downloadCount.toLocaleString()}
              </span>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span className="text-gray-500">{resource.rating}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {resource.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-gray-200 cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col space-y-2 ml-4">
            <button 
              onClick={() => onDownload(resource)}
              disabled={isLoading}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm disabled:opacity-50 flex items-center justify-center min-w-[100px]"
            >
              <Download className="w-4 h-4 mr-1" />
              Download
            </button>
            <button 
              onClick={() => onView(resource)}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center justify-center"
            >
              <Eye className="w-4 h-4 mr-1" />
              View
            </button>
            {resource.previewUrl && (
              <button 
                onClick={() => onPreview(resource)}
                className="border border-purple-300 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors text-sm flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Preview
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group">
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-t-lg flex items-center justify-center overflow-hidden">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
          {React.cloneElement(getTypeIcon(resource.type), { className: "w-16 h-16" })}
        </div>
        
        <div className="absolute top-3 right-3 flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(resource.difficulty)}`}>
            {resource.difficulty}
          </span>
          {resource.isNew && (
            <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              NEW
            </span>
          )}
        </div>

        {resource.featured && (
          <div className="absolute top-3 left-3">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
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
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {resource.duration}
          </span>
          <span className="flex items-center">
            <Download className="w-3 h-3 mr-1" />
            {resource.downloadCount.toLocaleString()}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {resource.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-gray-200 cursor-pointer transition-colors">
              #{tag}
            </span>
          ))}
          {resource.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
              +{resource.tags.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col space-y-2">
          <button 
            onClick={() => onDownload(resource)}
            disabled={isLoading}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm disabled:opacity-50 flex items-center justify-center"
          >
            <Download className="w-4 h-4 mr-1" />
            Download
          </button>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => onView(resource)}
              className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors text-sm flex items-center justify-center"
            >
              <Eye className="w-4 h-4 mr-1" />
              View
            </button>
            
            {resource.previewUrl && (
              <button 
                onClick={() => onPreview(resource)}
                className="px-3 py-2 border border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">
            Updated: {new Date(resource.lastUpdated).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Resources;
