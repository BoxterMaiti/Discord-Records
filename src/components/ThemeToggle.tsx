import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun size={20} className="text-gray-200" />
      ) : (
        <Moon size={20} className="text-gray-600" />
      )}
    </button>
  );
}