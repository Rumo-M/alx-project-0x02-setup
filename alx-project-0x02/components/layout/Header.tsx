// components/layout/Header.tsx

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">
        <Link href="/">ALX Listing</Link>
      </div>
      <nav className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">
          About
        </Link>
        <Link href="/posts" className="text-gray-700 hover:text-blue-500">
          Posts
        </Link>
        <Link href="/users" className="text-gray-700 hover:text-blue-500">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
