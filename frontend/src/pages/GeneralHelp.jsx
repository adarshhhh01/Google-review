// Help.jsx
import React, { useState, useEffect } from 'react';
import { 
  Zap, Star, Bot, Globe, FileText, AlertCircle, Search, 
  MessageCircle, Send, Plus, Headphones, Eye, Book, 
  User, CheckCircle, RefreshCw, Upload, Trash2 
} from 'lucide-react';
import { 
  X, Calendar, Clock, Building2, Mail, Phone, 
  Users, ChevronDown, ChevronUp, Play, Shield, Award, 
  BarChart3, MessageSquare
} from 'lucide-react';

// Book Demo Popup Component
const BookDemoPopup = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDemo, setSelectedDemo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [demoForm, setDemoForm] = useState({
    // Personal/Company Information
    contactType: 'company', // 'individual' or 'company'
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    
    // Company Information (if company)
    companyName: '',
    companySize: '',
    industry: '',
    website: '',
    
    // Demo Preferences
    demoType: 'product-overview',
    preferredDate: '',
    preferredTime: '',
    timezone: 'IST',
    duration: '30',
    
    // Specific Interests
    interests: [],
    currentChallenges: '',
    specificQuestions: '',
    
    // Additional Information
    hearAboutUs: '',
    additionalNotes: ''
  });

  // Demo Types Configuration
  const demoTypes = [
    {
      id: 'product-overview',
      title: 'Product Overview Demo',
      duration: '30 minutes',
      description: 'Complete platform walkthrough covering all key features',
      features: ['Review Management', 'Automation Tools', 'Analytics Dashboard', 'Integrations'],
      icon: <Play className="w-6 h-6" />,
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    },
    {
      id: 'custom-demo',
      title: 'Custom Solution Demo',
      duration: '45 minutes',
      description: 'Tailored demonstration based on your specific business needs',
      features: ['Custom Workflows', 'Industry Solutions', 'Advanced Features', 'Implementation Plan'],
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-purple-50 border-purple-200 text-purple-700'
    },
    {
      id: 'technical-deep-dive',
      title: 'Technical Deep Dive',
      duration: '60 minutes',
      description: 'Detailed technical session for IT teams and decision makers',
      features: ['API Integration', 'Security Features', 'Scalability', 'Technical Support'],
      icon: <Bot className="w-6 h-6" />,
      color: 'bg-green-50 border-green-200 text-green-700'
    }
  ];

  // Company Size Options
  const companySizes = [
    '1-10 employees',
    '11-50 employees', 
    '51-200 employees',
    '201-500 employees',
    '501-1000 employees',
    '1000+ employees'
  ];

  // Industry Options
  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Retail', 'Manufacturing',
    'Education', 'Real Estate', 'Hospitality', 'Professional Services',
    'Non-profit', 'Government', 'Other'
  ];

  // Interest Areas
  const interestAreas = [
    { id: 'review-management', label: 'Review Management', icon: <Star className="w-4 h-4" /> },
    { id: 'social-automation', label: 'Social Media Automation', icon: <Bot className="w-4 h-4" /> },
    { id: 'whatsapp-integration', label: 'WhatsApp Integration', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'analytics-reporting', label: 'Analytics & Reporting', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'api-integrations', label: 'API Integrations', icon: <Globe className="w-4 h-4" /> },
    { id: 'custom-solutions', label: 'Custom Solutions', icon: <Zap className="w-4 h-4" /> }
  ];

  // Time Slots
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM'
  ];

  // Demo FAQs
  const demoFAQs = [
    {
      question: "What should I expect during the demo?",
      answer: "Our demos are interactive sessions where we'll show you the platform in action, discuss your specific needs, and answer any questions. You'll see real examples of how Code4 System can solve your business challenges."
    },
    {
      question: "How long do demos typically last?",
      answer: "Demo duration varies by type: Product Overview (30 min), Custom Solution (45 min), and Technical Deep Dive (60 min). We respect your time and keep sessions focused and valuable."
    },
    {
      question: "Can I reschedule or cancel my demo?",
      answer: "Absolutely! You can reschedule or cancel your demo up to 2 hours before the scheduled time. We'll send you a confirmation email with rescheduling options."
    },
    {
      question: "Will I get a recording of the demo?",
      answer: "Yes, we provide demo recordings upon request. You'll also receive a follow-up email with key highlights, pricing information, and next steps."
    },
    {
      question: "Can multiple team members join the demo?",
      answer: "Yes! We encourage multiple stakeholders to join. Please let us know how many attendees to expect so we can tailor the session accordingly."
    },
    {
      question: "What if I have specific questions or use cases?",
      answer: "Perfect! Please share your specific questions or use cases when booking. This helps us prepare a more targeted demonstration that addresses your exact needs."
    }
  ];

  // Company Information Display
  const companyInfo = {
    name: "Code4 System Pvt Ltd",
    description: "Leading provider of intelligent review management and business automation solutions",
    founded: "2020",
    headquarters: "Gurugram, Haryana, India",
    employees: "50-100",
    clients: "500+",
    reviews: 4.8,
    certifications: ["ISO 27001", "SOC 2", "GDPR Compliant"],
    awards: ["Best B2B Software 2024", "Innovation Award 2023"]
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox' && name === 'interests') {
      setDemoForm(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value)
      }));
    } else {
      setDemoForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle demo submission
  const handleSubmitDemo = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/demo/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...demoForm,
          demoDetails: demoTypes.find(d => d.id === demoForm.demoType),
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Failed to book demo');
      }

      const result = await response.json();
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
        setCurrentStep(1);
        setDemoForm({
          contactType: 'company',
          firstName: '', lastName: '', email: '', phone: '', jobTitle: '',
          companyName: '', companySize: '', industry: '', website: '',
          demoType: 'product-overview', preferredDate: '', preferredTime: '',
          timezone: 'IST', duration: '30', interests: [],
          currentChallenges: '', specificQuestions: '',
          hearAboutUs: '', additionalNotes: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Error booking demo:', error);
      alert('Failed to book demo. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get minimum date (tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Get maximum date (30 days from now)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex">
        {/* Left Panel - Company Info */}
        <div className="w-1/3 bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8 overflow-y-auto">
          <div className="space-y-6">
            {/* Company Header */}
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{companyInfo.name}</h2>
              <p className="text-blue-100 text-sm">{companyInfo.description}</p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{companyInfo.clients}</div>
                <div className="text-xs text-blue-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold flex items-center justify-center">
                  {companyInfo.reviews} <Star className="w-4 h-4 ml-1 fill-current" />
                </div>
                <div className="text-xs text-blue-200">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-xs text-blue-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-blue-200">Support</div>
              </div>
            </div>

            {/* Company Details */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <Building2 className="w-4 h-4 mr-2" />
                  Company Information
                </h3>
                <div className="text-sm space-y-1 text-blue-100">
                  <div>Founded: {companyInfo.founded}</div>
                  <div>HQ: {companyInfo.headquarters}</div>
                  <div>Team Size: {companyInfo.employees}</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  Certifications
                </h3>
                <div className="space-y-1">
                  {companyInfo.certifications.map((cert, index) => (
                    <div key={index} className="text-sm text-blue-100 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  Awards & Recognition
                </h3>
                <div className="space-y-1">
                  {companyInfo.awards.map((award, index) => (
                    <div key={index} className="text-sm text-blue-100 flex items-center">
                      <Star className="w-3 h-3 mr-2" />
                      {award}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border-t border-blue-400 pt-4">
              <h3 className="font-semibold mb-3">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 98765 43210
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  demo@code4system.com
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  www.code4system.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Demo Booking Form */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Book Your Demo</h1>
              <p className="text-gray-600 mt-1">
                {currentStep === 1 && "Choose your demo type"}
                {currentStep === 2 && "Tell us about yourself"}
                {currentStep === 3 && "Schedule your session"}
                {currentStep === 4 && "Additional preferences"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-6 py-4 bg-gray-50">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`h-1 w-16 mx-2 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {submitSuccess ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Demo Booked Successfully! 🎉</h3>
                <p className="text-gray-600 mb-4">
                  Thank you for booking a demo with us. You'll receive a confirmation email shortly with:
                </p>
                <div className="bg-green-50 p-4 rounded-lg text-left max-w-md mx-auto">
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Calendar invitation</li>
                    <li>• Meeting link and instructions</li>
                    <li>• Preparation materials</li>
                    <li>• Contact information for your demo specialist</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Demo ID: #DEMO{Date.now().toString().slice(-6)}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitDemo} className="space-y-6">
                {/* Step 1: Demo Type Selection */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Choose Your Demo Type</h3>
                    <div className="grid gap-4">
                      {demoTypes.map((demo) => (
                        <div
                          key={demo.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            demoForm.demoType === demo.id
                              ? demo.color
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          onClick={() => setDemoForm(prev => ({ ...prev, demoType: demo.id }))}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-lg ${demo.color.split(' ')[0]} ${demo.color.split(' ')[1]}`}>
                              {demo.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-gray-900">{demo.title}</h4>
                                <span className="text-sm text-gray-500">{demo.duration}</span>
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{demo.description}</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {demo.features.map((feature, index) => (
                                  <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <input
                              type="radio"
                              name="demoType"
                              value={demo.id}
                              checked={demoForm.demoType === demo.id}
                              onChange={handleInputChange}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                    
                    {/* Contact Type Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">I'm booking this demo as:</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="contactType"
                            value="individual"
                            checked={demoForm.contactType === 'individual'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <User className="w-4 h-4 mr-2" />
                          Individual
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="contactType"
                            value="company"
                            checked={demoForm.contactType === 'company'}
                            onChange={handleInputChange}
                            className="mr-2"
                          />
                          <Building2 className="w-4 h-4 mr-2" />
                          Company Representative
                        </label>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={demoForm.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={demoForm.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={demoForm.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={demoForm.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Company Information (if company selected) */}
                    {demoForm.contactType === 'company' && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                            <input
                              type="text"
                              name="companyName"
                              value={demoForm.companyName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Your company name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                            <input
                              type="text"
                              name="jobTitle"
                              value={demoForm.jobTitle}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Your job title"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                            <select
                              name="companySize"
                              value={demoForm.companySize}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Select company size</option>
                              {companySizes.map((size, index) => (
                                <option key={index} value={size}>{size}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                            <select
                              name="industry"
                              value={demoForm.industry}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Select industry</option>
                              {industries.map((industry, index) => (
                                <option key={index} value={industry}>{industry}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Company Website</label>
                          <input
                            type="url"
                            name="website"
                            value={demoForm.website}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="https://yourcompany.com"
                          />
                        </div>
                      </>
                    )}

                    {/* Individual Job Title */}
                    {demoForm.contactType === 'individual' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Job Title/Role</label>
                        <input
                          type="text"
                          name="jobTitle"
                          value={demoForm.jobTitle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your current role or profession"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Step 3: Scheduling */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Schedule Your Demo</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={demoForm.preferredDate}
                          onChange={handleInputChange}
                          min={getMinDate()}
                          max={getMaxDate()}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <select
                          name="preferredTime"
                          value={demoForm.preferredTime}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                        <select
                          name="timezone"
                          value={demoForm.timezone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="IST">IST (Indian Standard Time)</option>
                          <option value="PST">PST (Pacific Standard Time)</option>
                          <option value="EST">EST (Eastern Standard Time)</option>
                          <option value="GMT">GMT (Greenwich Mean Time)</option>
                          <option value="CET">CET (Central European Time)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expected Duration</label>
                        <select
                          name="duration"
                          value={demoForm.duration}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="30">30 minutes</option>
                          <option value="45">45 minutes</option>
                          <option value="60">60 minutes</option>
                        </select>
                      </div>
                    </div>

                    {/* Areas of Interest */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Areas of Interest (Select all that apply)</label>
                      <div className="grid grid-cols-2 gap-3">
                        {interestAreas.map((interest) => (
                          <label key={interest.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                            <input
                              type="checkbox"
                              name="interests"
                              value={interest.id}
                              checked={demoForm.interests.includes(interest.id)}
                              onChange={handleInputChange}
                              className="mr-3"
                            />
                            <div className="flex items-center">
                              <div className="text-gray-600 mr-2">{interest.icon}</div>
                              <span className="text-sm font-medium">{interest.label}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Additional Information */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Additional Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Business Challenges</label>
                      <textarea
                        name="currentChallenges"
                        value={demoForm.currentChallenges}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Tell us about the challenges you're facing that our platform might help solve..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specific Questions or Requirements</label>
                      <textarea
                        name="specificQuestions"
                        value={demoForm.specificQuestions}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Any specific features you'd like to see or questions you want answered during the demo..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                      <select
                        name="hearAboutUs"
                        value={demoForm.hearAboutUs}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select an option</option>
                        <option value="google-search">Google Search</option>
                        <option value="social-media">Social Media</option>
                        <option value="referral">Referral</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="industry-event">Industry Event</option>
                        <option value="partner">Partner/Reseller</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                      <textarea
                        name="additionalNotes"
                        value={demoForm.additionalNotes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Any other information you'd like us to know before the demo..."
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-6 border-t">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                    className={`px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ${
                      currentStep === 1 ? 'invisible' : ''
                    }`}
                  >
                    Previous
                  </button>
                  
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep(prev => Math.min(4, prev + 1))}
                      disabled={
                        (currentStep === 1 && !demoForm.demoType) ||
                        (currentStep === 2 && (!demoForm.firstName || !demoForm.lastName || !demoForm.email)) ||
                        (currentStep === 3 && (!demoForm.preferredDate || !demoForm.preferredTime))
                      }
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Booking Demo...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          <span>Book Demo</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>

          {/* FAQs Section */}
          {!submitSuccess && (
            <div className="border-t bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Demo FAQs</h3>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {demoFAQs.slice(0, 3).map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 text-sm pr-4">{faq.question}</span>
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-4 pb-4 border-t border-gray-100">
                        <p className="text-gray-600 text-sm leading-relaxed pt-3">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
                <div className="text-center">
                  <button className="text-blue-600 text-sm hover:text-blue-800">
                    View all demo FAQs →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Help Component
const Help = () => {
  // Main Help Component States
  const [activeCategory, setActiveCategory] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Add Book Demo popup state
  const [showDemoPopup, setShowDemoPopup] = useState(false);

  // Customer Support Component (keeping existing implementation)
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
    const [supportTickets, setSupportTickets] = useState([]);

    // Fetch support tickets from database
    useEffect(() => {
      fetchSupportTickets();
    }, []);

    const fetchSupportTickets = async () => {
      try {
        const response = await fetch('/api/support/tickets');
        const data = await response.json();
        setSupportTickets(data);
      } catch (err) {
        console.error('Error fetching support tickets:', err);
      }
    };

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
      setError('');

      try {
        // Create FormData for file uploads
        const formData = new FormData();
        Object.keys(feedbackForm).forEach(key => {
          if (key === 'attachments') {
            feedbackForm.attachments.forEach(file => {
              formData.append('attachments', file);
            });
          } else {
            formData.append(key, feedbackForm[key]);
          }
        });

        // Submit to backend API
        const response = await fetch('/api/support/feedback', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Failed to submit feedback');
        }

        const result = await response.json();
        console.log('Feedback submitted:', result);
        
        setSubmitSuccess(true);
        
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
          fetchSupportTickets(); // Refresh tickets list
        }, 3000);

      } catch (err) {
        setError(err.message);
        console.error('Error submitting feedback:', err);
      } finally {
        setIsSubmitting(false);
      }
    };

    // Rest of CustomerSupport JSX remains the same as in your original code...
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

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-red-700">{error}</span>
            </div>
          </div>
        )}

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
                          {(channel.title === 'Phone Support' || channel.title === 'WhatsApp Support') && (
                            <button 
                              onClick={() => window.open(`tel:${channel.contact}`, '_self')}
                              className="ml-2 text-blue-600 hover:text-blue-800"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                              </svg>
                            </button>
                          )}
                          {channel.title === 'Email Support' && (
                            <button 
                              onClick={() => window.open(`mailto:${channel.contact}`, '_self')}
                              className="ml-2 text-blue-600 hover:text-blue-800"
                            >
                              <Send className="w-4 h-4" />
                            </button>
                          )}
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

  // Help Categories and FAQ Data (keeping existing implementation)
  const helpCategories = [
    { id: 'getting-started', name: 'Getting Started', icon: <Zap className="w-5 h-5" /> },
    { id: 'reviews', name: 'Review Management', icon: <Star className="w-5 h-5" /> },
    { id: 'automation', name: 'Automation', icon: <Bot className="w-5 h-5" /> },
    { id: 'integrations', name: 'Integrations', icon: <Globe className="w-5 h-5" /> },
    { id: 'billing', name: 'Billing & Plans', icon: <FileText className="w-5 h-5" /> },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: <AlertCircle className="w-5 h-5" /> },
  ];

  // FAQ Data with Database Integration (keeping existing implementation)
  const [faqData, setFaqData] = useState({});

  // Fetch FAQ data from database (keeping existing implementation)
  useEffect(() => {
    const fetchFAQData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/help/faqs');
        if (response.ok) {
          const data = await response.json();
          setFaqData(data);
        } else {
          // Fallback to static data if API fails
          setFaqData({
            'getting-started': [
              {
                id: 1,
                question: "How do I get started with Code4 System?",
                answer: "Getting started is easy! First, complete your profile setup, then connect your Google My Business account. Our onboarding wizard will guide you through the process step by step.",
                views: 245,
                helpful: 32
              },
              {
                id: 2,
                question: "What do I need to begin using the platform?",
                answer: "You'll need: 1) A Google My Business account, 2) Admin access to your social media accounts, 3) Your business verification documents. That's it!",
                views: 189,
                helpful: 28
              },
              {
                id: 3,
                question: "How long does the setup process take?",
                answer: "Most users complete the initial setup in 10-15 minutes. Full integration with all platforms typically takes 30-60 minutes.",
                views: 156,
                helpful: 22
              },
              {
                id: 4,
                question: "Is there a mobile app available?",
                answer: "Currently, we offer a responsive web dashboard that works perfectly on mobile devices. A dedicated mobile app is in development and coming soon!",
                views: 134,
                helpful: 19
              }
            ],
            'reviews': [
              {
                id: 5,
                question: "How does automated review management work?",
                answer: "Our AI monitors your Google reviews 24/7, categorizes them by sentiment, and can automatically respond to reviews based on your pre-set templates and preferences.",
                views: 298,
                helpful: 45
              },
              {
                id: 6,
                question: "Can I customize automated responses?",
                answer: "Absolutely! You can create custom response templates for different types of reviews (positive, negative, neutral) and set specific triggers for automated responses.",
                views: 267,
                helpful: 38
              },
              {
                id: 7,
                question: "How do I handle negative reviews?",
                answer: "Our platform flags negative reviews immediately and provides suggested professional responses. You can also set up alerts to manually review before any automated response is sent.",
                views: 223,
                helpful: 34
              },
              {
                id: 8,
                question: "Can I track review analytics?",
                answer: "Yes! You get comprehensive analytics including review volume, sentiment trends, response rates, and customer satisfaction scores over time.",
                views: 201,
                helpful: 29
              }
            ]
          });
        }
      } catch (err) {
        setError('Failed to load FAQ data');
        console.error('Error fetching FAQs:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFAQData();
  }, []);

  // Update FAQ helpfulness (keeping existing implementation)
  const updateFAQHelpfulness = async (faqId, isHelpful) => {
    try {
      const response = await fetch(`/api/help/faqs/${faqId}/helpful`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ helpful: isHelpful })
      });

      if (response.ok) {
        // Update local state
        setFaqData(prev => {
          const updated = { ...prev };
          Object.keys(updated).forEach(category => {
            updated[category] = updated[category].map(faq => 
              faq.id === faqId 
                ? { ...faq, helpful: faq.helpful + (isHelpful ? 1 : 0) }
                : faq
            );
          });
          return updated;
        });
      }
    } catch (err) {
      console.error('Error updating FAQ helpfulness:', err);
    }
  };

  // Updated quickActions to include Book Demo functionality
  const quickActions = [
    {
      title: "Contact Support",
      description: "Get help from our support team",
      icon: <Headphones className="w-6 h-6" />,
      action: () => setActiveCategory('support'),
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step guides",
      icon: <Eye className="w-6 h-6" />,
      action: () => window.open('/tutorials', '_blank'),
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Book Demo",
      description: "Schedule a personal walkthrough",
      icon: <Book className="w-6 h-6" />,
      action: () => setShowDemoPopup(true), // Updated to open demo popup
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Feature Request",
      description: "Suggest new features",
      icon: <Plus className="w-6 h-6" />,
      action: () => setActiveCategory('feedback'),
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  // Search functionality (keeping existing implementation)
  const filteredFAQs = faqData[activeCategory]?.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // Handle search with analytics (keeping existing implementation)
  const handleSearch = async (query) => {
    setSearchQuery(query);
    
    // Log search analytics
    try {
      await fetch('/api/analytics/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          query, 
          timestamp: new Date().toISOString(),
          category: activeCategory 
        })
      });
    } catch (err) {
      console.error('Error logging search:', err);
    }
  };

  // Render Customer Support if category is 'support'
  if (activeCategory === 'support') {
    return <CustomerSupport />;
  }

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

      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6 max-w-2xl mx-auto">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-700">{error}</span>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for help articles, FAQs, or topics..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        {quickActions.map((action, index) => (
          <div 
            key={index} 
            onClick={action.action}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
              {action.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{action.description}</p>
            <div className="text-blue-600 text-sm font-medium hover:text-blue-800">
              Click to access →
            </div>
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
              <button
                onClick={() => setActiveCategory('support')}
                className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                  activeCategory === 'support'
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Headphones className="w-5 h-5" />
                <span className="ml-3 text-sm font-medium">Customer Support</span>
              </button>
            </nav>
          </div>
        </div>

        {/* FAQ Content (keeping existing implementation) */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {helpCategories.find(cat => cat.id === activeCategory)?.name} - Frequently Asked Questions
            </h2>

            {isLoading ? (
              <div className="text-center py-12">
                <RefreshCw className="w-12 h-12 text-gray-300 mx-auto mb-4 animate-spin" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Loading FAQs...</h3>
                <p className="text-gray-500">Please wait while we fetch the latest help articles.</p>
              </div>
            ) : filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-500">Try adjusting your search terms or browse different categories.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={faq.id || index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="font-medium text-gray-900">{faq.question}</h3>
                        {faq.views && (
                          <div className="flex items-center text-xs text-gray-500 mt-1 space-x-4">
                            <span>{faq.views} views</span>
                            <span>{faq.helpful} found helpful</span>
                          </div>
                        )}
                      </div>
                      <div className={`transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    {expandedFAQ === index && (
                      <div className="px-4 pb-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4 mb-4">{faq.answer}</p>
                        
                        {/* Helpfulness buttons */}
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="text-gray-500">Was this helpful?</span>
                          <button
                            onClick={() => updateFAQHelpfulness(faq.id, true)}
                            className="text-green-600 hover:text-green-800 font-medium"
                          >
                            👍 Yes
                          </button>
                          <button
                            onClick={() => updateFAQHelpfulness(faq.id, false)}
                            className="text-red-600 hover:text-red-800 font-medium"
                          >
                            👎 No
                          </button>
                        </div>
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
                <button 
                  onClick={() => setActiveCategory('support')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <MessageCircle className="w-5 h-5 inline mr-2" />
                  Live Chat Support
                </button>
                <button 
                  onClick={() => window.open('mailto:support@code4system.com', '_self')}
                  className="bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium border border-gray-200"
                >
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

      {/* Popular Resources (keeping existing implementation) */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Setup Guide</h3>
            <p className="text-sm text-gray-600 mb-4">Complete step-by-step setup guide for new users</p>
            <div className="text-blue-600 text-sm font-medium hover:text-blue-800">
              Read Guide →
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Automation Best Practices</h3>
            <p className="text-sm text-gray-600 mb-4">Learn how to optimize your automation workflows</p>
            <div className="text-green-600 text-sm font-medium hover:text-green-800">
              Learn More →
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Review Management Tips</h3>
            <p className="text-sm text-gray-600 mb-4">Expert tips for managing online reviews effectively</p>
            <div className="text-purple-600 text-sm font-medium hover:text-purple-800">
              View Tips →
            </div>
          </div>
        </div>
      </div>

      {/* Book Demo Popup */}
      <BookDemoPopup 
        isOpen={showDemoPopup} 
        onClose={() => setShowDemoPopup(false)} 
      />
    </div>
  );
};

export default Help;
