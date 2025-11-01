"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const { user, login } = useAuth();
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (user) router.replace("/products");
  }, [user, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    login(username.trim());
    router.push("/products");
  };

  if (user) return null;

  return (
    <div className=" flex items-center justify-center  p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-md p-8 border border-white/20">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800">Product Dashboard</h1>
          <p className="text-gray-500 mt-2">Login to explore the latest products </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>
            New here?{" "}
            <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">Sign up coming soon</span>
          </p>
        </div>
      </div>
    </div>
  );
}
