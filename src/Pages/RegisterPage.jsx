import React from "react";
import logo from "../Images/Spandan_logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const RegisterPage = () => {
  return (
    <div className="h-screen sm:flex sm:justify-center sm:mt-20 ">
      <div className="sm:flex h-fit">
        <div className="bg-[#163e6c] text-center px-4 py-4 sm:py-16 sm:px-8 text-white">
          <h2 className="text-4xl font-bold">Hello Friend!</h2>
          <p className="mt-2">To Register Yourself in Various Events,</p>
          <p>Please Signup With Your Info</p>
          <div className="flex justify-center">
            <img src={logo} />
          </div>
        </div>
        <div className="px-4 py-4 text-center bg-white sm:px-10">
          <h2 className="text-4xl font-bold">Sign-up</h2>
          <div className="flex justify-center mt-3">
            <div className="flex space-x-10">
              <div className="p-2 border-2 rounded-full">
                <a href="www.facebook.com">
                  <FaFacebookF />
                </a>
              </div>
              <div className="p-2 border-2 rounded-full">
                <a href="www.google.com">
                  <FaGoogle />
                </a>
              </div>
              <div className="p-2 border-2 rounded-full">
                <a href="www.linkedin.com">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <p className="my-2">or use your email for Sign-up</p>
          <div>
            <form>
              <div class="mb-4">
                <input
                  type="text"
                  id="fullName"
                  class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 bg-slate-200"
                  required
                  placeholder="Name"
                />
              </div>
              <div class="mb-4">
                <input
                  type="number"
                  id="fullName"
                  class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 bg-slate-200"
                  required
                  placeholder="Student ID"
                />
              </div>
              <div class="mb-4">
                <input
                  type="email"
                  id="email"
                  class="form-input w-full px-4 py-2 border rounded-lg text-gray-900 focus:ring-blue-500 bg-slate-200"
                  required
                  placeholder="Email"
                />
              </div>
              <button
                type="submit"
                class="w-fit bg-yellow-500 text-white px-10 py-2 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
