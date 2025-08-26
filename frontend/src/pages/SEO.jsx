import React, { useState } from "react";

export default function SEO() {
  const [title, setTitle] = useState("");
  const [metaDesc, setMetaDesc] = useState("");
  const [keywords, setKeywords] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          SEO Helper
        </h1>

        {/* Title Input */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">
            Page Title (50-60 characters)
          </label>
          <input
            type="text"
            maxLength={60}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your page's SEO title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p
            className={`mt-1 ${
              title.length < 50 || title.length > 60
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            {title.length} characters
          </p>
        </div>

        {/* Meta Description Input */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">
            Meta Description (150-160 characters)
          </label>
          <textarea
            maxLength={160}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your meta description"
            value={metaDesc}
            onChange={(e) => setMetaDesc(e.target.value)}
          />
          <p
            className={`mt-1 ${
              metaDesc.length < 150 || metaDesc.length > 160
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            {metaDesc.length} characters
          </p>
        </div>

        {/* Keywords Input */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold text-gray-700">
            Keywords (comma-separated)
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="example: SEO, digital marketing, keyword research"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>

        {/* Content Input */}
        <div className="mb-8">
          <label className="block mb-2 font-semibold text-gray-700">
            Content Preview
          </label>
          <textarea
            rows={6}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your main page content. This helps assess keyword usage."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Analysis Panel */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-bold mb-4 text-blue-700">
            SEO Analysis Summary
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-800">
            <li>
              Title length is{" "}
              <span
                className={`font-semibold ${
                  title.length >= 50 && title.length <= 60
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {title.length >= 50 && title.length <= 60 ? "good" : "not ideal"}
              </span>
              .
            </li>
            <li>
              Meta description length is{" "}
              <span
                className={`font-semibold ${
                  metaDesc.length >= 150 && metaDesc.length <= 160
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {metaDesc.length >= 150 && metaDesc.length <= 160
                  ? "good"
                  : "not ideal"}
              </span>
              .
            </li>
            <li>
              Keywords count:{" "}
              <span className="font-semibold text-blue-700">
                {keywords ? keywords.split(",").length : 0}
              </span>
            </li>
            <li>
              Content length:{" "}
              <span className="font-semibold text-blue-700">{content.length} characters</span>
            </li>
            <li>
              Keyword density (approx):{" "}
              <span className="font-semibold text-blue-700">
                {keywords && content
                  ? (
                      keywords
                        .split(",")
                        .map((kw) => {
                          const trimmed = kw.trim().toLowerCase();
                          const regex = new RegExp(`\\b${trimmed}\\b`, "gi");
                          const matches = content.match(regex);
                          return matches ? matches.length : 0;
                        })
                        .reduce((a, b) => a + b, 0) /
                    content.split(/\s+/).length) *
                    100
                  : 0}%
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
