import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { UserDataContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/logo.png'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  // const [ userData, setUserData ] = useState({})

  const { setUser } = useState()
  const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setPassword('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-red-300 to-blue-300">
      <div className="bg-white bg-opacity-5 rounded-2xl p-10 shadow-lg w-full max-w-sm">
        <div className="flex  justify-center mb-6  ">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-45 rounded-full object-cover"
          />
        </div>
        <form onSubmit={(e) => submitHandler(e)}>
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
          <p className="mt-4 text-md text-center text-black">
            Don't have an account?{" "}
            <Link to="/user-signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserLogin