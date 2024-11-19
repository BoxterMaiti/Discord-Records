import React from 'react';
import { Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdminLogin from './AdminLogin';
import ThemeToggle from './ThemeToggle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Trophy size={24} className="text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Discord Records</h1>
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <AdminLogin />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}