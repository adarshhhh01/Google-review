import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import ReviewManagement from "./reviewManagement";
import TestimonialsPage from "./Testimonials";
import Footer from "../components/Footer";
import Faqs from "../pages/Faqs";

const Home = () => {
  return (
    <div>
      <nav>
        
        <Navbar />
      </nav>
      <section id="Hero">
       <ReviewManagement />
       <TestimonialsPage />
       <Faqs />
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
