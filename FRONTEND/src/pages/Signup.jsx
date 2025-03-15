import React, { useState } from 'react';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';
import { IoColorFill } from 'react-icons/io5';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center">
      <div className="bg-white bg-opacity-75 p-10 rounded-lg shadow-lg max-w-md w-full" style={{ backgroundImage: "url('https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/ooty-1658377980_e8b569cbd5d3506c3e17.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className="text-2xl font-bold mb-6 text-center">Join our community</h2>
        <form>
          <div className="mb-4">
            <label className="text-white">Email</label>
            <input type="email" className="mt-1 p-2 w-full border rounded-md text-white" />
          </div>
          <div className="mb-4 relative">
            <label className="text-white">Password</label>
            <div className="flex items-center mt-1">
              <input type={showPassword ? "text" : "password"} className="p-2 w-full border rounded-md text-white" />
              <div onClick={togglePasswordVisibility} className="absolute right-3 cursor-pointer" style={{ color: 'white' }}>
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </div>
            </div>
          </div>
          <div className="mb-6 relative">
            <label className="text-white">Confirm Password</label>
            <div className="flex items-center mt-1">
              <input type={showConfirmPassword ? "text" : "password"} className="p-2 w-full border rounded-md text-white" />
              <div onClick={toggleConfirmPasswordVisibility} className="absolute right-3 cursor-pointer" style={{ color: 'white' }}>
                {showConfirmPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
