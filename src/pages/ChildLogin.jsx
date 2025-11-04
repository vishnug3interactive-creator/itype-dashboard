import React, { useState } from "react";
import parentlogo from "../assets/images/student-wombat.png";
import logo from "../assets/images/itype4home.png";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from "lucide-react";

function ChildLogin() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex h-screen ">
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8 overflow-auto ">
        <div className="w-full max-w-sm">
          <div className="text-left mb-6 mt-5">
            <img src={logo} width={100} height={40}></img>
            <h2 className="text-xl font-semibold mb-2 mt-5">Child Login</h2>
            <p className="text-gray-600 mb-3 text-sm">
              Login with your parent Code, Child Username, and Child Password
            </p>
            <p className="text-gray-600 text-sm">
              All details can be accessed from the Parent Portal.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Parent Code(From Parent Portal)
              </label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="From Parent Portal"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9c27b0]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Child Username(eg.johnsmith-not yor email)
              </label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />

                <input
                  type="email"
                  placeholder="Child Username"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9c27b0]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Child Password(from Parent Portal)
              </label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Child Password"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#9c27b0]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-[#9c27b0]"
                >
                  {showPassword ? (
                    <EyeOffIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 mt-2">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-[#9c27b0] border-gray-300 rounded focus:ring-[#9c27b0]"
              />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-[#9c27b0] text-white py-2 rounded-lg hover:bg-[#7b1fa2] transition duration-200"
            >
              Sign in
            </button>
            <div>
              <p className="text-[#9c27b0] text-sm">Forget Password?</p>
            </div>
            <div className="text-center mt-4">
              <p className="text-gray-700 text-sm">
                Logging as a Child?{" "}
                <a
                  href="/"
                  className="text-[#9c27b0] font-medium hover:underline text-sm"
                >
                  Click Here
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full border-2 border-[#9c27b0] text-[#9c27b0] py-2 rounded-lg hover:bg-[#9c27b0] hover:text-white transition duration-200 mt-4"
            >
              Don't have an account? Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <img
          src={parentlogo}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ChildLogin;
