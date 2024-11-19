import React, { useState } from 'react';
import { LogIn, LogOut } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const { isAdmin, login, logout } = useAdmin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(password);
    setPassword('');
  };

  if (isAdmin) {
    return (
      <button
        onClick={logout}
        className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
      >
        <LogOut size={16} />
        Logout
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Admin password"
        className="px-3 py-1 text-sm border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
      >
        <LogIn size={16} />
        Login
      </button>
    </form>
  );
}