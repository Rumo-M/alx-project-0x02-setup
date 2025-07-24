// components/layout/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">🏡 MyListing</div>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Rooms</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Mansion</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Countryside</a>
        </nav>
        <div className="space-x-4">
          <button className="text-sm text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition">
            Sign In
          </button>
          <button className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
