import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-md mx-auto p-5 border rounded-md mt-40" style={{ backgroundImage: "url('https://www.tamilnadutourism.tn.gov.in/img/pages/vertical/ooty-1658377980_e8b569cbd5d3506c3e17.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h2 className="text-2xl font-semibold mb-4" >Login to your account</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-white">Name</label>
          <input 
            type="text"
            id="Name"
            className="w-full p-2 border rounded text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className=" mb-2 text-white">Email address</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded  text-white"
            required
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className=" mb-2 text-white">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full p-2 border rounded pr-10 text-white"
              required
            />
            <button
              type="button"
              onClick={handlePasswordToggle}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </button>
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 text-white"
          />
          <label htmlFor="rememberMe" className="text-white">Remember me</label>
        </div>
        <div className="mb-4">
          <a href="/forgot-password" className="text-blue-500">Forgot your password?</a>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <p className="mt-4">
        Don't have an account? <Link to="/signup" className="text-blue-500"> Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
