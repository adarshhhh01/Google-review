import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReviewManagement from "./pages/reviewManagement";
import AutoReply from "./pages/Autoreply";
import SEO from "./pages/SEO";
import News from "./components/News";
import AdminLogin from "./pages/AdminLogin"; // Import AdminLogin component
import Pricing from "./components/Pricing";
import TestimonialsPage from "./pages/Testimonials";
import Inbox from "./pages/Inbox"; // Assuming you have an Index component
import UserDashboard from "./pages/UserDashboard"; // Import UserDashboard component
import AdminDashboard from "./pages/adminDashboard";
import ProtectedRoutes from "../ProtectedRoutes";
import Support from "./pages/UserSupport";
import About from "./pages/About";
import Help from "./pages/GeneralHelp";
import Resources from "./pages/Resources";

const App = () => {
  // Example: Replace with your actual authentication logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* Conditionally render Navbar and Footer */}
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/support" element={<Support />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-Signup" element={<UserSignup />} />
        <Route path="/review-management" element={<ReviewManagement />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/news"
          element={<News />}
        />
          {/* Admin Login Route */}
        <Route
          path="/admin-login"
          element={
            <ProtectedRoutes>
              <AdminLogin />
            </ProtectedRoutes>
          }
        />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />{" "}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/auto-reply" element={<ProtectedRoutes><AutoReply /></ProtectedRoutes>} />
        <Route path="/help" element={<Help />} />
        <Route path="/resources" element={<Resources />} />
       

      </Routes>
      {isLoggedIn && <Footer />}
    </div>
  );
};

export default App;
