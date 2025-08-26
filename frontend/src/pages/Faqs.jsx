import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { question: "What is a review profile?", answer: "A review profile is a unique listing or location on a review platform (such as Google, Yelp, or TripAdvisor) where customers can leave feedback about your business." },
  { question: "Are there any overage charges?", answer: "No, there are no overage charges. Your subscription covers everything included in your plan without unexpected fees." },
  { question: "I want to track all reviews for a brand, but I don't have a list of locations. Can you help?", answer: "Yes, our team can help you gather and manage all reviews for your brand even if you don’t have a complete list of locations. Just reach out to us for support." },
  { question: "Is there any limit to the number of reviews we can collect and  or track?", answer: "No, there is no limit to the number of reviews you can collect or track. You’ll be able to monitor all feedback across platforms." },
  { question: "If I purchase a plan, how can I upgrade or downgrade?", answer: "You can easily upgrade or downgrade your plan anytime from your account settings. The changes will be applied in your next billing cycle." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#faf8f6] min-h-screen flex items-center justify-center p-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-4">FAQs</h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our team.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 cursor-pointer border border-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center text-lg ">
                <p className="font-medium text-gray-900">{faq.question}</p>
                <Plus
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 text-md transition-all duration-500 ease-in-out ">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
