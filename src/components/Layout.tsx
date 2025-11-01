"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between">
        <div className="font-bold">Product Dashboard</div>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          {user ? (
            <>
              <span>Hi, {user.username}</span>
              <button onClick={logout} className="ml-2 underline">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </nav>
      </header>

      <main className="flex-1 p-6">{children}</main>

      <footer className="p-4 text-center text-sm bg-gray-100">© {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Layout;
