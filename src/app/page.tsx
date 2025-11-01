"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 px-6 relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute -z-10 top-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

      {/* Content */}
      <div className="max-w-3xl text-center space-y-8">
        
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
          Welcome to <span className="text-indigo-600">Product Dashboard</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          A modern way to manage, explore, and visualize your product data — all in one place.
        </p>

        {/* Action buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/login"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all"
          >
            Login
          </Link>
          <Link
            href="/products"
            className="px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-all"
          >
            View Products
          </Link>
        </div>
      </div>
    </main>
  );
}
