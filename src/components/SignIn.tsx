"use client";

import { ChangeEvent, useState } from "react";
import useAuth from "../hooks/useAuth";
import GoogleLogo from "../svgs/GoogleLogo";
import Spinner from "./Spinner";

interface FormState {
  username: string;
  password: string;
}

const SignIn = () => {
  const auth = useAuth();

  const [form, setForm] = useState<FormState>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignIn = () => {
    auth.signIn(form.username, form.password);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-gray-200 shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex flex-col items-center">
            <div className="w-full flex-1">
              <div className="w-full flex justify-center items-center mb-6 flex-col text-center">
                <img
                  src="AuthflowLogo.png"
                  alt="AuthFlow Logo"
                  className="h-44 w-auto"
                />
                <h2 className="text-2xl font-semibold text-gray-700">
                  Sign In to Continue
                </h2>
                <p className="text-gray-500 text-sm mt-1 font-bold">
                  Welcome back! Ready to dive in?
                </p>
              </div>

              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="User Name"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
                <button
                  disabled={auth.isLoading}
                  onClick={() => handleSignIn()}
                  className={`mt-5 tracking-wide font-semibold w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none
                    ${
                      auth.isLoading
                        ? "bg-gray-800 text-gray-200 cursor-not-allowed"
                        : "bg-gray-900 text-gray-100 hover:bg-gray-700"
                    }`}
                >
                  {auth.isLoading ? (
                    <Spinner />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  )}

                  <span className="ml-3">Sign In</span>
                </button>
              </div>

              <div className="text-center mt-6">
                <p className="text-gray-600 text-sm">
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    className="text-gray-900 font-semibold hover:text-blue-700"
                  >
                    &nbsp;Sign up
                  </a>
                </p>
              </div>

              <div className="my-12 border-b border-gray-800 text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-800 tracking-wide font-medium bg-gray-200 transform translate-y-1/2">
                  Or sign up with Google
                </div>
              </div>

              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-gray-900 text-gray-300 flex items-center justify-center hover:bg-gray-700 transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-all duration-300 ease-in-out">
                    <GoogleLogo />
                  </div>
                  <span className="ml-4">Sign In with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
