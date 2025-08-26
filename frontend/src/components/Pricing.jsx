import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Plus, CheckCircle,

 } from "lucide-react";
 import Faqs from "../pages/Faqs";
 

const Pricing = () => {
  const [plans] = useState([
    {
      id: 1,
      name: "Free",
      price: 0,
      features: ["5 Reviews", "Basic Analytics"],
      users: 450,
      status: "active",
    },
    {
      id: 2,
      name: "Basic",
      price: 19,
      features: ["50 Reviews", "Advanced Analytics", "Email Support"],
      users: 350,
      status: "active",
    },
    {
      id: 3,
      name: "Pro",
      price: 49,
      features: ["Unlimited Reviews", "Custom Branding", "Priority Support"],
      users: 150,
      status: "active",
    },
    {
      id: 4,
      name: "Enterprise",
      price: 99,
      features: ["Everything in Pro", "API Access", "Dedicated Manager"],
      users: 50,
      status: "active",
    },
  ]);

  const features = [
    {
      title: "Reviews in every country & language",
      icon: "🌍",
      description:
        "No catch. No add-on. We track reviews from every country and in every language. You can access the original review, or its translated version.",
    },
    {
      title: "Update & Deletion tracking",
      icon: "🔄",
      description:
        "Reviews are messy. They get updated, deleted, moved around. Our AI based monitoring solutions keep track of every review, and track updates & deletions.",
    },
    {
      title: "Unlimited review exports",
      icon: "⬇️",
      description:
        "Your review data is yours. No limit, no catch. Download your reviews to CSV (excel), or sync your reviews with a Google Spreadsheet.",
    },
    {
      title: "Filter review notifications",
      icon: "🎚️",
      description:
        "Easily filter review notifications by star-rating, source, keywords, language, or tags to reduce the noise.",
    },
    {
      title: "Built-in reporting",
      icon: "📊",
      description:
        "Leverage our built-in reporting and analytics to track your progress and focus your efforts on what impacts your KPIs.",
    },
    {
      title: "Automated review tagging",
      icon: "🏷️",
      description:
        "Define review tags and let our AI assistant take care of tagging past and new reviews as they come in.",
    },
  ];

  return (
    <div>
      <section className="min-h-screen">
        <div>
          <Navbar />
        </div>
        <div className="max-w-3xl mx-auto my-10 border-s-green-500-300 rounded-2xl flex flex-col text-center p-10  ">
          <h1 className="text-7xl font-bold mb-4  text-center ">
            Start A 5-Day Free Trial
          </h1>
          <p className="text-xl font-medium">
            Get access to all features for 5 days, no credit card required.
          </p>
          <p className="text-xl font-medium">Upgrade or cancel at any time.</p>
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            {/* <h2 className="text-2xl font-bold text-gray-800">Plan Management</h2> */}
            {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Plan</span>
        </button> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-15">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-lg shadow-md p-6 border hover:border-blue-500 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {plan.name}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      plan.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {plan.status}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Features:</p>
                  <ul className="space-y-1">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 flex items-center space-x-2"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600">
                    Active Users:{" "}
                    <span className="font-semibold">{plan.users}</span>
                  </p>
                </div>

                
              </div>
            ))}
          </div>

          
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto my-10 border-s-green-500-300 rounded-2xl flex flex-col text-center p-10  ">
          <h1 className="text-7xl font-bold mb-4  text-center ">
            Included in Every Plan
          </h1>
        </div>

        <div className="feature-list text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4  pt-10 pb-20 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card  p-6  hover:shadow-lg rounded-lg transition-all duration-300"
            >
              {/* <div className="feature-icon">{feature.icon}</div> */}
              <div className="feature-content flex flex-col space-y-2">
                <h3 className="text-xl font-semibold mb-2 text-purple-800 bg-clip-text">{feature.title}</h3>
                <p className="text-lg text-gray-800">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Faqs/>
      </section>
      <Footer />
    </div>
  );
};

// // export default Pricing;
//       <Footer />
//     </div>
//   );
// };

export default Pricing;
