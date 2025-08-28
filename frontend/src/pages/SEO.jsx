import React, { useState, useEffect, useMemo } from "react";
import { 
  Search, 
  FileText, 
  BarChart3, 
  Target, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  TrendingUp,
  Eye,
  Globe,
  Lightbulb,
  Copy,
  Download,
  RefreshCw,
  Zap
} from "lucide-react";

export default function SEO() {
  const [title, setTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // Advanced SEO Analysis
  const seoAnalysis = useMemo(() => {
    const analysis = {
      score: 0,
      issues: [],
      warnings: [],
      good: [],
      suggestions: []
    };

    // Title Analysis
    if (title.length === 0) {
      analysis.issues.push("Title is missing");
    } else if (title.length < 30) {
      analysis.warnings.push("Title is too short (less than 30 characters)");
    } else if (title.length > 60) {
      analysis.warnings.push("Title is too long (more than 60 characters)");
    } else {
      analysis.good.push("Title length is optimal");
      analysis.score += 20;
    }

    // Meta Description Analysis
    if (metaDesc.length === 0) {
      analysis.issues.push("Meta description is missing");
    } else if (metaDesc.length < 120) {
      analysis.warnings.push("Meta description is too short");
    } else if (metaDesc.length > 160) {
      analysis.warnings.push("Meta description is too long");
    } else {
      analysis.good.push("Meta description length is optimal");
      analysis.score += 20;
    }

    // Keywords Analysis
    const keywordList = keywords.split(",").map(k => k.trim()).filter(k => k);
    if (keywordList.length === 0) {
      analysis.issues.push("No keywords specified");
    } else if (keywordList.length > 10) {
      analysis.warnings.push("Too many keywords (keep it under 10)");
    } else {
      analysis.good.push(`${keywordList.length} keywords specified`);
      analysis.score += 15;
    }

    // Content Analysis
    if (content.length === 0) {
      analysis.issues.push("No content provided");
    } else if (content.length < 300) {
      analysis.warnings.push("Content is too short (less than 300 characters)");
    } else {
      analysis.good.push("Content length is good");
      analysis.score += 15;
    }

    // Focus Keyword Analysis
    if (focusKeyword) {
      const titleHasKeyword = title.toLowerCase().includes(focusKeyword.toLowerCase());
      const metaHasKeyword = metaDesc.toLowerCase().includes(focusKeyword.toLowerCase());
      const contentHasKeyword = content.toLowerCase().includes(focusKeyword.toLowerCase());

      if (titleHasKeyword) {
        analysis.good.push("Focus keyword found in title");
        analysis.score += 10;
      } else {
        analysis.warnings.push("Focus keyword not found in title");
      }

      if (metaHasKeyword) {
        analysis.good.push("Focus keyword found in meta description");
        analysis.score += 10;
      } else {
        analysis.warnings.push("Focus keyword not found in meta description");
      }

      if (contentHasKeyword) {
        analysis.good.push("Focus keyword found in content");
        analysis.score += 10;
      } else {
        analysis.warnings.push("Focus keyword not found in content");
      }
    }

    // URL Analysis
    if (url) {
      if (url.includes(focusKeyword.toLowerCase().replace(/\s+/g, '-'))) {
        analysis.good.push("Focus keyword found in URL");
        analysis.score += 10;
      } else {
        analysis.suggestions.push("Consider including focus keyword in URL slug");
      }
    }

    return analysis;
  }, [title, metaDesc, keywords, content, focusKeyword, url]);

  // Keyword Density Calculation
  const keywordDensity = useMemo(() => {
    if (!keywords || !content) return 0;
    
    const keywordList = keywords.split(",").map(k => k.trim().toLowerCase());
    const contentWords = content.toLowerCase().split(/\s+/);
    
    let totalMatches = 0;
    keywordList.forEach(keyword => {
      const matches = contentWords.filter(word => word.includes(keyword)).length;
      totalMatches += matches;
    });
    
    return contentWords.length > 0 ? ((totalMatches / contentWords.length) * 100).toFixed(2) : 0;
  }, [keywords, content]);

  // Generate Suggestions
  useEffect(() => {
    const newSuggestions = [];
    
    if (title.length < 50) {
      newSuggestions.push("Consider making your title longer to include more descriptive keywords");
    }
    
    if (keywordDensity > 3) {
      newSuggestions.push("Keyword density is high. Consider using synonyms and related terms");
    } else if (keywordDensity < 0.5 && keywords) {
      newSuggestions.push("Keyword density is low. Try to naturally include more target keywords");
    }
    
    if (!title.includes("?") && !title.includes("!")) {
      newSuggestions.push("Consider adding a question or exclamation to make your title more engaging");
    }
    
    setSuggestions(newSuggestions);
  }, [title, keywordDensity, keywords]);

  // Simulate SEO Analysis
  const runAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsAnalyzing(false);
  };

  // Copy meta tags to clipboard
  const copyMetaTags = () => {
    const metaTags = `<title>${title}</title>
<meta name="description" content="${metaDesc}">
<meta name="keywords" content="${keywords}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:url" content="${url}">`;
    
    navigator.clipboard.writeText(metaTags);
    alert('Meta tags copied to clipboard!');
  };

  // Get score color
  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  // Get score background
  const getScoreBg = (score) => {
    if (score >= 80) return "bg-green-100 border-green-200";
    if (score >= 60) return "bg-yellow-100 border-yellow-200";
    return "bg-red-100 border-red-200";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-4 shadow-lg">
            <Search className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            SEO Optimization Helper
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Optimize your content for search engines with real-time analysis and actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Input Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* SEO Score Card */}
            <div className={`p-6 rounded-xl border-2 ${getScoreBg(seoAnalysis.score)} shadow-lg`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">SEO Score</h2>
                  <p className="text-gray-600">Overall optimization score</p>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${getScoreColor(seoAnalysis.score)}`}>
                    {seoAnalysis.score}%
                  </div>
                  <div className="flex items-center mt-2">
                    {seoAnalysis.score >= 80 ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mr-1" />
                    ) : seoAnalysis.score >= 60 ? (
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-1" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mr-1" />
                    )}
                    <span className="text-sm text-gray-600">
                      {seoAnalysis.score >= 80 ? "Excellent" : 
                       seoAnalysis.score >= 60 ? "Good" : "Needs Work"}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className={`h-3 rounded-full transition-all duration-500 ${
                    seoAnalysis.score >= 80 ? "bg-green-500" :
                    seoAnalysis.score >= 60 ? "bg-yellow-500" : "bg-red-500"
                  }`}
                  style={{ width: `${seoAnalysis.score}%` }}
                ></div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">0%</span>
                <span className="text-gray-600">100%</span>
              </div>
            </div>

            {/* Input Forms */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* URL Input */}
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 flex items-center">
                    <Globe className="w-4 h-4 mr-2" />
                    Page URL
                  </label>
                  <input
                    type="url"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="https://example.com/page"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>

                {/* Focus Keyword */}
                <div>
                  <label className="block mb-2 font-semibold text-gray-700 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Focus Keyword
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="main target keyword"
                    value={focusKeyword}
                    onChange={(e) => setFocusKeyword(e.target.value)}
                  />
                </div>
              </div>

              {/* Title Input */}
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Page Title (30-60 characters)
                </label>
                <input
                  type="text"
                  maxLength={70}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your compelling page title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <div className="flex justify-between mt-2">
                  <p className={`text-sm ${
                    title.length < 30 ? "text-red-500" :
                    title.length > 60 ? "text-orange-500" : "text-green-600"
                  }`}>
                    {title.length} characters
                  </p>
                  <div className="flex space-x-2">
                    {title.toLowerCase().includes(focusKeyword.toLowerCase()) && focusKeyword ? (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        ✓ Contains focus keyword
                      </span>
                    ) : focusKeyword ? (
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        ✗ Missing focus keyword
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Meta Description Input */}
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Meta Description (120-160 characters)
                </label>
                <textarea
                  maxLength={170}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Write a compelling description that encourages clicks"
                  value={metaDesc}
                  onChange={(e) => setMetaDesc(e.target.value)}
                />
                <div className="flex justify-between mt-2">
                  <p className={`text-sm ${
                    metaDesc.length < 120 ? "text-red-500" :
                    metaDesc.length > 160 ? "text-orange-500" : "text-green-600"
                  }`}>
                    {metaDesc.length} characters
                  </p>
                  <div className="flex space-x-2">
                    {metaDesc.toLowerCase().includes(focusKeyword.toLowerCase()) && focusKeyword ? (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        ✓ Contains focus keyword
                      </span>
                    ) : focusKeyword ? (
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        ✗ Missing focus keyword
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Keywords Input */}
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  Target Keywords (comma-separated)
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="SEO optimization, digital marketing, keyword research"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                />
                <p className="text-sm text-gray-600 mt-2">
                  {keywords ? keywords.split(",").filter(k => k.trim()).length : 0} keywords
                  {keywords.split(",").filter(k => k.trim()).length > 5 && (
                    <span className="text-orange-600 ml-2">• Consider focusing on fewer keywords</span>
                  )}
                </p>
              </div>

              {/* Content Input */}
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-700 flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Content Preview
                </label>
                <textarea
                  rows={8}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Paste your main page content here for keyword density analysis..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>{content.length} characters • {content.split(/\s+/).filter(w => w).length} words</span>
                  <span>Keyword density: {keywordDensity}%</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={runAnalysis}
                  disabled={isAnalyzing}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Zap className="w-4 h-4 mr-2" />
                  )}
                  {isAnalyzing ? "Analyzing..." : "Run Deep Analysis"}
                </button>
                
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors flex items-center"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {showPreview ? "Hide" : "Show"} Preview
                </button>

                <button
                  onClick={copyMetaTags}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Meta Tags
                </button>
              </div>
            </div>

            {/* Search Preview */}
            {showPreview && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  Search Result Preview
                </h3>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="text-blue-600 text-lg hover:underline cursor-pointer">
                    {title || "Your Page Title Here"}
                  </div>
                  <div className="text-green-700 text-sm mt-1">
                    {url || "https://example.com/your-page"}
                  </div>
                  <div className="text-gray-700 text-sm mt-2">
                    {metaDesc || "Your meta description will appear here. Make it compelling to encourage clicks from search results."}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Analysis */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Keyword Density</span>
                  <span className={`font-semibold ${
                    keywordDensity > 3 ? "text-red-600" :
                    keywordDensity < 0.5 ? "text-orange-600" : "text-green-600"
                  }`}>
                    {keywordDensity}%
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Reading Time</span>
                  <span className="font-semibold text-blue-600">
                    {Math.ceil(content.split(/\s+/).filter(w => w).length / 200)} min
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Word Count</span>
                  <span className="font-semibold text-purple-600">
                    {content.split(/\s+/).filter(w => w).length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Focus Keyword Usage</span>
                  <span className="font-semibold text-indigo-600">
                    {focusKeyword && content ? 
                      content.toLowerCase().split(focusKeyword.toLowerCase()).length - 1 : 0} times
                  </span>
                </div>
              </div>
            </div>

            {/* SEO Issues */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">SEO Analysis</h3>
              
              {/* Good Items */}
              {seoAnalysis.good.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-green-700 mb-2 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Good ({seoAnalysis.good.length})
                  </h4>
                  <ul className="space-y-1">
                    {seoAnalysis.good.map((item, index) => (
                      <li key={index} className="text-sm text-green-600 flex items-start">
                        <CheckCircle className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Warnings */}
              {seoAnalysis.warnings.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-yellow-700 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Warnings ({seoAnalysis.warnings.length})
                  </h4>
                  <ul className="space-y-1">
                    {seoAnalysis.warnings.map((item, index) => (
                      <li key={index} className="text-sm text-yellow-600 flex items-start">
                        <AlertTriangle className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Issues */}
              {seoAnalysis.issues.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-red-700 mb-2 flex items-center">
                    <XCircle className="w-4 h-4 mr-2" />
                    Issues ({seoAnalysis.issues.length})
                  </h4>
                  <ul className="space-y-1">
                    {seoAnalysis.issues.map((item, index) => (
                      <li key={index} className="text-sm text-red-600 flex items-start">
                        <XCircle className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  AI Suggestions
                </h3>
                <ul className="space-y-3">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <Lightbulb className="w-4 h-4 mr-2 mt-0.5 text-yellow-500 flex-shrink-0" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Keyword Analysis */}
            {keywords && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Keyword Analysis</h3>
                <div className="space-y-3">
                  {keywords.split(",").map((keyword, index) => {
                    const trimmed = keyword.trim();
                    const occurrences = content.toLowerCase().split(trimmed.toLowerCase()).length - 1;
                    return (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-sm font-medium text-gray-700">{trimmed}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{occurrences} times</span>
                          <div className={`w-2 h-2 rounded-full ${
                            occurrences === 0 ? "bg-red-400" :
                            occurrences <= 2 ? "bg-yellow-400" : "bg-green-400"
                          }`}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
