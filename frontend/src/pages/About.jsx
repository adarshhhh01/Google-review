import React, { useState } from "react";
import { Zap, TrendingUp, Eye, CheckCircle, User, Bot, Star, MessageCircle, Globe, Headphones } from "lucide-react";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo.png";
const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const teamMembers = [
    {
      name: "Ashish Kumar",
      role: "CEO ",
      image: "/api/placeholder/150/150",
      description: "Visionary leader with 2+ years in tech automation and business development."
    },
    {
      name: "Adarsh Namdeo",
      role: "CTO",
      image: "/api/placeholder/150/150", 
      description: "Tech expert specializing in AI-driven automation and review management systems."
    },
    {
      name: "Shivam kumar",
      role: "Head of Operations",
      image: "/api/placeholder/150/150",
      description: "Operations specialist focused on streamlining business processes and client success."
    }
  ];

  const milestones = [
    { year: "2025 ", month: "july", event: "Company Founded", description: "Started Code4 System with a vision to revolutionize digital automation" },
    // { year: "2024",month: "Augest", event: "First 100 Clients", description: "Reached our first major milestone serving businesses across India" },
    { year: "2025",month: "Jan", event: "AI Integration", description: "Launched AI-powered review management and social media automation" },
    // { year: "2025",month: "june", event: "Series A Funding", description: "Secured funding to expand our automation platform globally" }
  ];

  const services = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Google Review Management",
      description: "Automated review monitoring, response generation, and reputation management across all Google platforms.",
      features: ["Real-time monitoring", "AI-powered responses", "Sentiment analysis", "Performance analytics"]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "WhatsApp Automation",
      description: "Streamline customer communication with automated WhatsApp messaging, chatbots, and broadcast campaigns.",
      features: ["Bulk messaging", "Chatbot integration", "Auto-replies", "Customer segmentation"]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "Social Media Automation",
      description: "Complete automation for Facebook, Instagram, LinkedIn, and Twitter marketing campaigns.",
      features: ["Content scheduling", "Engagement automation", "Analytics dashboard", "Multi-platform management"]
    },
    {
      icon: <Bot className="w-8 h-8 text-purple-500" />,
      title: "AI-Powered Analytics",
      description: "Advanced analytics and insights to optimize your digital presence and customer engagement.",
      features: ["Predictive analytics", "ROI tracking", "Custom reports", "Real-time insights"]
    }
  ];

  return (
    <div className="">
      <Navbar />
      {/* Header Section */}
      <div className="text-center mb-12 p-8 animate-fadeIn">
        <div className="inline-flex items-center justify-center w-50 h-50  rounded-full mb-6">
          <img src={Logo} alt="Logo" className="w-50 object-cover" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Code4 System Pvt Ltd
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Revolutionizing business automation through cutting-edge technology
          and AI-driven solutions. We help businesses scale their digital
          presence and streamline operations.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex space-x-1">
          {["overview", "services", "team", "journey"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md font-medium transition-all capitalize ${
                activeTab === tab
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="animate-slideUp space-y-12">
            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Getting
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  Upcoming
                </div>
                <div className="text-gray-600">Reviews Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with intelligent automation solutions
                  that enhance customer engagement, streamline operations, and
                  drive sustainable growth in the digital age.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading global provider of AI-driven business
                  automation solutions, making advanced technology accessible to
                  businesses of all sizes.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Why Choose Code4 System?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Lightning Fast
                  </h4>
                  <p className="text-sm text-gray-600">
                    Quick setup and instant results with our optimized
                    automation systems
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Bot className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    AI-Powered
                  </h4>
                  <p className="text-sm text-gray-600">
                    Advanced AI algorithms that learn and adapt to your business
                    needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Headphones className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    24/7 Support
                  </h4>
                  <p className="text-sm text-gray-600">
                    Round-the-clock customer support from our expert team
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="animate-slideUp">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="animate-slideUp">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Journey Tab */}
        {activeTab === "journey" && (
          <div className="animate-slideUp">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Our Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {milestone.event}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>

                    <div className="w-2/12 flex justify-center">
                      <div className="w-12 h-12 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-sm font-bold text-blue-600">
                          {milestone.year}
                        </span>
                      </div>
                    </div>

                    <div className="w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl text-white">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join hundreds of businesses that trust Code4 System for their
          automation needs. Let's discuss how we can help you grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;