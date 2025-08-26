// HeroSection.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import review from "../assets/review.png"; // Adjust the path as necessary

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Chart data
const data = [
  { date: "2025-08-14", reviews: 10, avgRating: 4.2 },
  { date: "2025-08-15", reviews: 12, avgRating: 4.5 },
  { date: "2025-08-16", reviews: 8, avgRating: 4.0 },
  { date: "2025-08-17", reviews: 15, avgRating: 4.7 },
  { date: "2025-08-18", reviews: 9, avgRating: 4.6 },
];

const ReviewGraph = () => (
  <div className="w-full md:w-[370px] bg-white rounded-2xl shadow-lg p-4">
    <h3 className="text-lg font-semibold mb-4 text-center text-neutral-900">
      Reviews & Avg. Rating Over Time
    </h3>
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
          <Tooltip />
          <Legend verticalAlign="top" height={32} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="reviews"
            stroke="#8884d8"
            name="Reviews"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="avgRating"
            stroke="#82ca9d"
            name="Average Rating"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export { ReviewGraph };

const HeroSection = () => (
  <div className=" bg-[#FFFCFA]">
    
    <section className=" min-h-screen flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-14">
      {/* Left side: Headline, text, buttons */}
      <div className="md:w-1/2 w-full flex flex-col gap-5 mb-10 md:mb-0">
        <h1 className="text-5xl md:text-5xl  text-neutral-900 leading-snug font-extrabold">
          AI-first Review<br />Automation Software
        </h1>
        <p className="text-lg text-neutral-700 ">
          Get more reviews on autopilot. <br />
          Reply and engage with your customers automatically. <br />
          Monitor your reputation and performance with AI. <br />
          <br />
          No credit card required. Instant value.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#ff5621] hover:bg-[#e64c1d] text-white rounded-full px-7 py-3 font-medium shadow transition">
            Get started now
          </button>
          <button className="text-neutral-900 underline decoration-neutral-500 hover:text-[#ff5621] px-4 py-3 font-medium">
            <a href="/pricing"> View pricing</a>
          </button>
        </div>
      </div>
      {/* Right side: Chart & panel */}
      <div className="md:w-1/3 w-80 flex justify-center">
        <img src={review} alt="" />
      </div>
      
    </section>
    <section className="hero-section text-black dark:bg-[#ffffff] py-16 px-6 text-center max-w-full mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900  mb-6">
        Google Review Management Software you'll love
      </h1>
      <p className="text-lg md:text-xl bg-gradient-to-r from-[#4F8AC9] via-[#845EC2] to-[#F7F8FC] bg-clip-text text-transparent 0 mb-8 max-w-3xl mx-auto">
        No bells, No whistles. Just genuinely powerful google review management software
      </p>
      <a
        href="#"
        className="inline-block bg-orange-400 hover:bg-orange-500 text-black font-semibold px-8 py-3 rounded-xl transition"
      >
        Start a Free Trial - 14 days, no credit card
      </a>

      <div className="mt-10 text-left max-w-5xl mx-auto space-y-4 text-black">
        <h2 className="text-lg font-semibold  mb-4 ">Get more reviews, on your own terms</h2>
        <ul className=" list-inside space-y-5 text-lg  text-neutral-700 ">
          <li>
            Ask for NPS or Star Ratings before asking for public reviews, and have complete control over the entire form
          </li>
          <li>
            Balance review asks between different locations and review platforms to get more reviews where they matter most
          </li>
          <li>
            Use our Magic Link feature to connect this with any of the tools you already use, including analog!
          </li>
          <li>
            Leverage AI-generated &amp; AI-assisted replies with customizable AI Reply Agents to match your brand's tone
          </li>
          <li>
            Automatically show your best reviews with beautifully designed review widgets. Easy to install with just 2 lines of code.
          </li>
          <li>
            Connect with daily tools like Slack, MS Teams, Email, or Zapier to get notified and send reports
          </li>
          <li>
            Filter and analyze reviews using semantic &amp; sentiment analysis to understand customer feedback deeply
          </li>
        </ul>
      </div>

      <p className="mt-12 text-center text-md text-black max-w-2cl mx-auto font-sans-sarif">
        Join hundreds of companies turning Google reviews into more customers. Get started now or view pricing.
      </p>
    </section>
       <div className="w-full md:w-[420px] bg-[#ffffff] rounded-2xl shadow-lg p-10 mb-20  mx-auto">
    <h3 className="text-lg font-semibold mb-4 text-center text-neutral-900">
      Reviews & Avg. Rating Over Time
    </h3>
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
          <Tooltip />
          <Legend verticalAlign="top" height={32} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="reviews"
            stroke="#8884d8"
            name="Reviews"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="avgRating"
            stroke="#82ca9d"
            name="Average Rating"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
  </div>
);

export default HeroSection;
