import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophie L.",
    text: "The review workflow made it so easy to manage my feedback. I love the sleek interface!",
    stars: 5,
  },
  {
    name: "Dan T.",
    text: "Integrations with Slack and Teams help our support team react faster. Super useful!",
    stars: 5,
  },
  {
    name: "Priya J.",
    text: "The AI replies were spot-on and totally matched our brand's tone.",
    stars: 5,
  },
  {
    name: "Gabriel R.",
    text: "Beautiful widgets and easy setup. Highly recommend for any SaaS business.",
    stars: 5,
  },
];

// Gradient for accent color background, but keep main background white
const gradientStyle = {
  background: "linear-gradient(90deg, #4F8AC9 0%, #845EC2 70%, #F7F8FC 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
};

const TestimonialCard = ({ name, text, stars, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay }}
    viewport={{ once: true }}
    className="bg-white shadow-lg rounded-xl p-6 mx-auto my-6 max-w-md border border-gray-100"
  >
    <div className="flex items-center mb-2">
      <span className="mr-2 text-xl" style={gradientStyle}>{name}</span>
      <span>
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-md">&#9733;</span>
        ))}
      </span>
    </div>
    <p className="text-gray-600 italic">{text}</p>
  </motion.div>
);

const TestimonialsPage = () => (
  <div className="min-h-screen bg-white flex flex-col items-center py-14 px-4">
    {/* Add logo or theme accent */}
    <h1
      className="text-4xl md:text-5xl font-bold mb-4 text-center"
      style={gradientStyle}
    >
      What Our Users Say
    </h1>
    <p className="text-gray-500 mb-12 text-center max-w-xl">
      Genuine reviews from real users. Get inspired by their experience with our platform!
    </p>
    {/* Testimonials with animation on scroll */}
    <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} {...t} delay={i * 0.2} />
      ))}
    </div>
  </div>
);

export default TestimonialsPage;
