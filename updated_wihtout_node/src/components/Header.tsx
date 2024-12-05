// src/components/Header.tsx
import React from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8" />
            <span className="text-xl font-bold">Rug Guardian</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/learn" className="hover:text-purple-200 transition">
              Learn
            </Link>
            <Link to="/analyze" className="hover:text-purple-200 transition">
              Analyze
            </Link>
            <Link to="/leaderboard" className="hover:text-purple-200 transition">
              Leaderboard
            </Link>
            <Link to="/memecoin" className="hover:text-purple-200 transition">
              Memecoin
            </Link>
            <Link to="/crypto-dashboard" className="hover:text-purple-200 transition">
              Crypto Dashboard
            </Link> {/* New link */}
          </div>
          <Link to="/connect-wallet">
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
              Connect Wallet
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
