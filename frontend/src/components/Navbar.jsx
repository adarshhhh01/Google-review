import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path as necessary




export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md py-4 opacity-100 flex items-center justify-between sticky top-0 bg-gradient-to-r from-white  to-purple-300">
      <div id="logo" className="flex items-center mx-6 bg-opacity-100">
        <img src={logo} alt="Logo" className="w-40" />
      </div>
      {/* Desktop Links */}
      <div className="hidden md:flex items-center mx-6 gap-4 text-shadow-lg text-md">
        <Link className="hover:bg-white border-white rounded-3xl bg-opacity-100 transition-0.2 duration-90 text-black font-semibold p-2 px-4 " to="/">Home</Link>
        <Link className="hover:bg-white border-white rounded-3xl bg-opacity-100 transition-0.2 duration-90 text-black font-semibold p-2 px-4" to="/about">About</Link>       
        <Link className="hover:bg-white border-white rounded-3xl bg-opacity-100 transition-0.2 duration-90 text-black font-semibold px-4 p-2" to="/pricing">Pricing</Link>
        {/* <Link className="hover:bg-white border-white rounded-3xl bg-opacity-100  duration-90 text-black font-semibold p-2 px-4" to="/review-management">Services</Link> */}
        <Link className="hover:bg-white border-white rounded-3xl bg-opacity-100 transition-0.2 duration-90 text-black font-semibold p-2 px-4" to="/resources">Resources</Link>
        <Link className="hover:bg-white border-white rounded-3xl bg-opacity-100 transition-0.2 duration-90 text-black font-semibold px-4 p-2" to="/help">Help</Link>
        <Link className="hover:bg-white border-white rounded-3xl bg-opacity-100 transition-0.2 duration-90 text-black font-semibold px-4 p-2" to="/user-login">Login</Link>
        

      </div>
      {/* Mobile Menu Icon */}
        {/* <form className="d-flex" role="search">
        <input className="form-control me-2 border-2 border-blue-900 rounded-2xl text-center" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success border-2 border-green-500 hover:bg-green-500 rounded-2xl px-10 opecity-700 " type="submit">Search</button>
      </form> */}
      <button
        className="md:hidden mx-6 text-black focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        {/* Hamburger Icon */}
        <svg width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
      {/* Mobile Popup Menu */}
      {menuOpen && (
        <div
        className={`fixed top-0 right-0 w-2/3 max-w-xs border-lg h-full border-black border bg-white shadow-lg z-50 flex flex-col p-6 gap-4
          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        style={{ willChange: "transform" }}
      >
        <button
          className="self-end mb-4 text-black"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          {/* Close Icon */}
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <Link className="text-black border-black drop-shadow-lg font-semibold px-2 py-2 rounded hover:bg-gray-100" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className="text-black border-black drop-shadow-lg font-semibold px-2 py-2 rounded hover:bg-gray-100" to="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link className="text-black border-black drop-shadow-lg font-semibold px-2 py-2 rounded hover:bg-gray-100" to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link className="text-black border-black drop-shadow-lg font-semibold px-2 py-2 rounded hover:bg-gray-100" to="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>
        <Link className="text-black border-black drop-shadow-lg font-semibold px-2 py-2 rounded hover:bg-gray-100" to="/help" onClick={() => setMenuOpen(false)}>Help</Link>
        <button className="border-green-300 hover:bg-green-300 border-2 rounded-xl bg-gradient-to-br from-white-900 via-grey-900 to-green-300"><Link className="text-black border-black drop-shadow-lg font-semibold px-2 py-2 rounded" to="/help" onClick={() => setMenuOpen(false)}> Request a call for Meeting</Link></button>
      </div>
      )}
    </nav>
  );
}