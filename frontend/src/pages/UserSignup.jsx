import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path as necessary

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-red-900 to-blue-900">
      <div className="bg-white bg-opacity-5 rounded-2xl p-10 shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-6 ">
          {/* Update src to your logo file path */}
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-45 rounded-full object-cover"
          />
        </div>
        <form>
          
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2 ">
              <label
                className="block text-lg text-black mb-2"
                htmlFor="firstname"
              >
                First Name
              </label>
              <input
                className="w-full px-3 py-2 bg-transparent border-b text-lg border-black text-black focus:outline-none"
                type="text"
                id="firstname"
                name="firstname"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                className="block text-lg text-black mb-2"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <input
                className="w-full px-3 py-2 bg-transparent border-b text-lg border-black text-black focus:outline-none"
                type="text"
                id="lastname"
                name="lastname"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lg text-black mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full text-lg px-3 py-2 bg-transparent border-b border-black text-black focus:outline-none"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg text-black mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 bg-transparent border-b border-black text-black focus:outline-none"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-700 to-blue-700 text-black py-2 rounded-lg font-semibold tracking-wide"
          >
            REGISTER
          </button>
          <p className="mt-4 text-md text-center text-black">
                          Already have an account?{' '}
                          <Link to="/user-login" className="text-blue-500 hover:underline">
                          Login 
                          </Link>
                      </p>
        </form>
      </div>
    </div>
  );
}
