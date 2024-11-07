// app/login/page.js
"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-gray-600 mb-6">Please sign in to continue</p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="flex items-center justify-center bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 w-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5 mr-2"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.49 0 6.58 1.34 9 3.52l6.64-6.64C35.18 2.83 29.86.5 24 .5 14.36.5 6.5 6.66 3.44 14.5h.02l7.5 5.86C13.02 13.92 17.91 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.9 24.5c0-1.64-.17-3.24-.49-4.77H24v9.02h13.29c-.77 3.88-3.05 6.93-6.19 8.98v.01l7.5 5.85h.02C42.9 38.53 46.9 31.96 46.9 24.5z"
            />
            <path
              fill="#4A90E2"
              d="M10.94 26.71A13.07 13.07 0 019 24.5c0-1.34.23-2.65.64-3.86L3.06 14.5C1.18 18.34.5 22.47.5 26.5c0 4.03.68 8.16 2.56 11.99l7.5-5.86a12.92 12.92 0 01.38-5.92z"
            />
            <path
              fill="#FBBC05"
              d="M24 47.5c6.4 0 11.77-2.17 15.7-5.88l-7.5-5.86a12.9 12.9 0 01-8.2 2.89c-6.07 0-11.26-4.31-13.12-10.18l-7.5 5.86C6.53 41.63 14.88 47.5 24 47.5z"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
