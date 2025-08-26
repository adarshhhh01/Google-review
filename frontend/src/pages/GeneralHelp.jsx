import React, { useState } from 'react';
import { Zap, Star, Bot, Globe, FileText, AlertCircle , Search, MessageCircle,Send ,Plus, Headphones, Eye, Book } from 'lucide-react';

const Help = () => {
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
 
  const CustomerSupport = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    priority: 'medium',
    message: '',
    attachments: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const supportChannels = [
    {
      icon: <User className="w-8 h-8 text-blue-600" />,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+91 98765 43210",
      availability: "Mon-Fri: 9:00 AM - 8:00 PM IST",
      responseTime: "Immediate",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Send className="w-8 h-8 text-green-600" />,
      title: "Email Support", 
      description: "Send us your queries via email",
      contact: "support@code4system.com",
      availability: "24/7 - We respond within 2-4 hours",
      responseTime: "2-4 hours",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      title: "WhatsApp Support",
      description: "Get quick help via WhatsApp",
      contact: "+91 98765 43210",
      availability: "Mon-Sat: 9:00 AM - 6:00 PM IST",
      responseTime: "Within 30 minutes",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Live Chat",
      description: "Instant chat support on our website",
      contact: "Available on all pages",
      availability: "24/7 with AI, Human: 9 AM - 8 PM",
      responseTime: "Instant",
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFeedbackForm(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const removeAttachment = (index) => {
    setFeedbackForm(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Feedback submitted:', feedbackForm);
    setSubmitSuccess(true);
    setIsSubmitting(false);

    // Reset form after successful submission
    setTimeout(() => {
      setFeedbackForm({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        priority: 'medium',
        message: '',
        attachments: []
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="p-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
          <Headphones className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Support</h1>
        <p className="text-gray-600">We're here to help! Choose how you'd like to get in touch with us.</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeTab === 'contact'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Contact Info
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`px-6 py-2 rounded-md font-medium transition-all ${
              activeTab === 'feedback'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Submit Feedback
          </button>
        </div>
      </div>

      {/* Contact Information Tab */}
      {activeTab === 'contact' && (
        <div className="animate-slideUp">
          {/* Emergency Contact Banner */}
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-8">
            <div className="flex items-center">
              <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
              <div>
                <h3 className="font-semibold text-red-800">Emergency Support</h3>
                <p className="text-red-700 text-sm">
                  For critical issues affecting your business operations, call us immediately at{' '}
                  <span className="font-bold">+91 98765 43210</span>
                </p>
              </div>
            </div>
          </div>

          {/* Support Channels */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className={`bg-white p-6 rounded-xl border-2 ${channel.color} hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {channel.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{channel.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-xs font-medium text-gray-500 w-16">Contact:</span>
                        <span className="font-semibold text-gray-900 select-all">{channel.contact}</span>
                        {channel.title === 'Phone Support' || channel.title === 'WhatsApp Support' ? (
                          <button 
                            onClick={() => window.open(`tel:${channel.contact}`, '_self')}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </button>
                        ) : channel.title === 'Email Support' ? (
                          <button 
                            onClick={() => window.open(`mailto:${channel.contact}`, '_self')}
                            className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                        ) : null}
                      </div>
                      
                      <div className="flex items-center">
                        <span className="text-xs font-medium text-gray-500 w-16">Hours:</span>
                        <span className="text-sm text-gray-700">{channel.availability}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="text-xs font-medium text-gray-500 w-16">Response:</span>
                        <span className="text-sm font-medium text-green-600">{channel.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Office Information */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Office Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Headquarters</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Code4 System Pvt Ltd<br />
                  Tech Park, Phase 2<br />
                  Sector 18, Gurugram<br />
                  Haryana - 122015, India
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Form Tab */}
      {activeTab === 'feedback' && (
        <div className="animate-slideUp max-w-2xl mx-auto">
          {submitSuccess ? (
            <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Feedback Submitted Successfully! 🎉</h3>
              <p className="text-green-700">
                Thank you for your feedback. We'll review it and get back to you within 24 hours.
                <br />
                <strong>Ticket ID:</strong> #CS{Date.now().toString().slice(-6)}
              </p>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Feedback</h2>
              <p className="text-gray-600 mb-6">
                We value your feedback! Please fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmitFeedback} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={feedbackForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={feedbackForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={feedbackForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of your issue or feedback"
                  />
                </div>

                {/* Category and Priority */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={feedbackForm.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                      <option value="account">Account Issue</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority Level
                    </label>
                    <select
                      name="priority"
                      value={feedbackForm.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="low">Low - General question</option>
                      <option value="medium">Medium - Standard issue</option>
                      <option value="high">High - Urgent matter</option>
                      <option value="critical">Critical - Service down</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detailed Message *
                  </label>
                  <textarea
                    name="message"
                    value={feedbackForm.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Please provide as much detail as possible about your issue or feedback..."
                  />
                </div>

                {/* File Attachments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attachments (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload screenshots, documents, or other files
                    </p>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                    >
                      Choose Files
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      Max 5MB per file. Formats: JPG, PNG, PDF, DOC, DOCX
                    </p>
                  </div>

                  {/* Display uploaded files */}
                  {feedbackForm.attachments.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Files:</h4>
                      <div className="space-y-2">
                        {feedbackForm.attachments.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                            <span className="text-sm text-gray-600">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeAttachment(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setFeedbackForm({
                      name: '', email: '', subject: '', category: 'general',
                      priority: 'medium', message: '', attachments: []
                    })}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Clear Form
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Feedback</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};


  const helpCategories = [
    { id: 'getting-started', name: 'Getting Started', icon: <Zap className="w-5 h-5" /> },
    { id: 'reviews', name: 'Review Management', icon: <Star className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Bot className="w-5 h-5" /> },
    { id: 'integrations', name: 'Integrations', icon: <Globe className="w-5 h-5" /> },
    { id: 'billing', name: 'Billing & Plans', icon: <FileText className="w-5 h-5" /> },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: <AlertCircle className="w-5 h-5" /> },
  ];

  const faqData = {
    'getting-started': [
      {
        question: "How do I get started with Code4 System?",
        answer: "Getting started is easy! First, complete your profile setup, then connect your Google My Business account. Our onboarding wizard will guide you through the process step by step."
      },
      {
        question: "What do I need to begin using the platform?",
        answer: "You'll need: 1) A Google My Business account, 2) Admin access to your social media accounts, 3) Your business verification documents. That's it!"
      },
      {
        question: "How long does the setup process take?",
        answer: "Most users complete the initial setup in 10-15 minutes. Full integration with all platforms typically takes 30-60 minutes."
      },
      {
        question: "Is there a mobile app available?",
        answer: "Currently, we offer a responsive web dashboard that works perfectly on mobile devices. A dedicated mobile app is in development and coming soon!"
      }
    ],
    'reviews': [
      {
        question: "How does automated review management work?",
        answer: "Our AI monitors your Google reviews 24/7, categorizes them by sentiment, and can automatically respond to reviews based on your pre-set templates and preferences."
      },
      {
        question: "Can I customize automated responses?",
        answer: "Absolutely! You can create custom response templates for different types of reviews (positive, negative, neutral) and set specific triggers for automated responses."
      },
      {
        question: "How do I handle negative reviews?",
        answer: "Our platform flags negative reviews immediately and provides suggested professional responses. You can also set up alerts to manually review before any automated response is sent."
      },
      {
        question: "Can I track review analytics?",
        answer: "Yes! You get comprehensive analytics including review volume, sentiment trends, response rates, and customer satisfaction scores over time."
      }
    ],
    'automation': [
      {
        question: "What platforms support WhatsApp automation?",
        answer: "We support WhatsApp Business API, bulk messaging, chatbot integration, and automated customer service responses across WhatsApp Business accounts."
      },
      {
        question: "How do I set up social media automation?",
        answer: "Connect your Facebook, Instagram, LinkedIn, and Twitter accounts through our integrations page. Then configure posting schedules, auto-responses, and engagement rules."
      },
      {
        question: "Are there automation limits?",
        answer: "Limits depend on your plan. Starter plans include 1,000 automated actions/month, while Pro plans offer unlimited automation within platform guidelines."
      },
      {
        question: "Can I pause automation temporarily?",
        answer: "Yes! You can pause any automation rule or entire campaigns instantly from your dashboard. All scheduled actions will be paused until you reactivate them."
      }
    ],
    'integrations': [
      {
        question: "Which platforms can I integrate?",
        answer: "We integrate with Google My Business, Facebook, Instagram, WhatsApp Business, LinkedIn, Twitter, Zapier, and 50+ other business tools."
      },
      {
        question: "How do I connect my Google My Business?",
        answer: "Go to Integrations → Google My Business → Click 'Connect'. You'll be redirected to Google for authorization. Make sure you have admin access to your GMB account."
      },
      {
        question: "Is my data secure during integrations?",
        answer: "Absolutely! We use OAuth 2.0 authentication and never store your passwords. All data is encrypted in transit and at rest with enterprise-grade security."
      },
      {
        question: "Can I disconnect integrations anytime?",
        answer: "Yes, you can disconnect any integration instantly from the Integrations page. This will stop all automated actions for that platform immediately."
      }
    ],
    'billing': [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. International payments are also supported."
      },
      {
        question: "Can I change my plan anytime?",
        answer: "Yes! You can upgrade or downgrade your plan anytime. Changes take effect immediately, and billing is prorated accordingly."
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial."
      },
      {
        question: "What happens if I cancel my subscription?",
        answer: "You can cancel anytime. Your account remains active until the end of your billing period, after which you'll lose access to premium features but keep your data."
      }
    ],
    'troubleshooting': [
      {
        question: "Why aren't my automated responses working?",
        answer: "Check: 1) Integration status is active, 2) Response templates are enabled, 3) Your account has necessary permissions, 4) Platform-specific limits aren't exceeded."
      },
      {
        question: "I'm not receiving review notifications",
        answer: "Verify your notification settings in Settings → Notifications. Also check your email spam folder and ensure our emails aren't blocked."
      },
      {
        question: "Dashboard is loading slowly",
        answer: "This might be due to large data sets. Try refreshing the page, clearing browser cache, or contact support if the issue persists."
      },
      {
        question: "Integration keeps disconnecting",
        answer: "This usually happens when account passwords are changed. Re-authenticate the integration and ensure your account has proper permissions."
      }
    ]
  };

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get help from our support team",
      icon: <Headphones className="w-6 h-6" />,
      action: "Open chat or email support",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      icon: <Eye className="w-6 h-6" />,
      action: "Access video library",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Book Demo",
      description: "Schedule a personal walkthrough",
      icon: <Book className="w-6 h-6" />,
      action: "Schedule 30-min demo",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Feature Request",
      description: "Suggest new features",
      icon: <Plus className="w-6 h-6" />,
      action: "Submit feedback",
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  const filteredFAQs = faqData[activeCategory]?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="p-8 animate-fadeIn">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
          <Headphones className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Help & Support Center</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions, learn how to use our features, and get the support you need.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for help articles, FAQs, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {quickActions.map((action, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
              {action.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{action.description}</p>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              {action.action} →
            </button>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Help Categories</h3>
            <nav className="space-y-2">
              {helpCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {category.icon}
                  <span className="ml-3 text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {helpCategories.find(cat => cat.id === activeCategory)?.name} - Frequently Asked Questions
            </h2>

            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your search terms or browse different categories.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900 pr-4">{faq.question}</h3>
                      <div className={`transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-4 pb-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Still Need Help Section */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Still Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Live Chat Support
                </button>
                <button className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-gray-200">
                  <Send className="w-5 h-5 inline mr-2" />
                  Email Support
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Average response time: <span className="font-medium text-green-600">2 hours</span> | 
                Available: <span className="font-medium">24/7</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Setup Guide</h3>
            <p className="text-sm text-gray-600 mb-4">Complete step-by-step setup guide for new users</p>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
              Read Guide →
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Automation Best Practices</h3>
            <p className="text-sm text-gray-600 mb-4">Learn how to optimize your automation workflows</p>
            <button className="text-green-600 text-sm font-medium hover:text-green-800">
              Learn More →
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Review Management Tips</h3>
            <p className="text-sm text-gray-600 mb-4">Expert tips for managing online reviews effectively</p>
            <button className="text-purple-600 text-sm font-medium hover:text-purple-800">
              View Tips →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;