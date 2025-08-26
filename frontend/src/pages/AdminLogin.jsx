import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-red-900 to-blue-900">
      <div className="bg-white bg-opacity-5 rounded-2xl p-10 shadow-lg w-full max-w-sm">
        <div className="flex  justify-center mb-6  ">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-45 rounded-full object-cover"
          />
        </div>
        <form>
            <h1 className='text-2xl font-bold  mb-4  text-center '>Admin Login</h1>
          <div className="mb-4">
            <label className="block text-black mb-2 text-lg" htmlFor="email">
              Email ID
            </label>
            <input
              className="w-full px-3 py-2 bg-transparent border-b border-black text-[#eeefff] focus:outline-none"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2 text-lg" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 bg-transparent border-b border-black text-[#eeefff] focus:outline-none"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm text-black">
              <input type="checkbox" className="mr-2 " />
              Remember me
            </label>
            <button
              type="button"
              className="text-sm text-black hover:underline focus:outline-none"
            >
              Forgot Password?
            </button>

          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-700 to-blue-700 text-white py-2 rounded-lg font-semibold tracking-wide"
          >
            LOGIN
          </button>
            
        </form>
      </div>
    </div>
  );
}
