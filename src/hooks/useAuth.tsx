"use client";

import { useReducer, useEffect } from "react";
import Cookies from "js-cookie";

const signinUrl = "http://127.0.0.1:8000/api/auth/signin/";
const signupUrl = "http://127.0.0.1:8000/api/auth/signup/";
const refreshUrl = "http://127.0.0.1:8000/api/token/refresh/";

type AuthAction =
  | { type: "SIGNIN_SUCCESS" }
  | { type: "SIGNUP_SUCCESS" }
  | { type: "SIGNOUT" }
  | { type: "SET_LOADING"; payload: boolean };

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SIGNIN_SUCCESS":
    case "SIGNUP_SUCCESS":
      return { ...state, isAuthenticated: true, isLoading: false };

    case "SIGNOUT":
      return { ...state, isAuthenticated: false, isLoading: false };

    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    default:
      return state;
  }
};

const useAuth = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 🔹 Auto-refresh tokens every 15 minutes
  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await fetch(refreshUrl, {
          method: "POST",
          credentials: "include", // 🔹 Send cookies
        });

        if (!response.ok) throw new Error("Token refresh failed");

        dispatch({ type: "SIGNIN_SUCCESS" }); // 🔹 Assume valid session
      } catch (error) {
        console.error("Auto-refresh failed:", error);
        dispatch({ type: "SIGNOUT" });
      }
    };

    const interval = setInterval(refreshToken, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const signIn = async (username: string, password: string) => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response = await fetch(signinUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include", // 🔹 Store tokens in HttpOnly cookies
      });

      if (!response.ok) throw new Error("Sign-in failed");

      const data = await response.json();

      dispatch({ type: "SIGNIN_SUCCESS" });

      Cookies.set("access_token", data.access_token, { expires: 7 });
      Cookies.set("refresh_token", data.refresh_token, { expires: 7 });

      window.location.href = "/";
    } catch (error) {
      console.error("Sign-in error:", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const signUp = async (username: string, email: string, password: string) => {
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const response = await fetch(signupUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
        credentials: "include", // 🔹 Store tokens in HttpOnly cookies
      });

      if (!response.ok) throw new Error("Sign-up failed");

      dispatch({ type: "SIGNUP_SUCCESS" });

      window.location.href = "/signin";
    } catch (error) {
      console.error("Sign-up error:", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const signOut = async () => {
    dispatch({ type: "SET_LOADING", payload: true });

    Cookies.remove("access_token");
    Cookies.remove("refresh_token");

    dispatch({ type: "SET_LOADING", payload: false });
  };

  return { ...state, signIn, signUp, signOut };
};

export default useAuth;
