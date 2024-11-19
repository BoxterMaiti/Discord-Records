import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data';
import { useAdmin } from '../contexts/AdminContext';
import PendingSubmissions from '../components/PendingSubmissions';

export default function HomePage() {
  const { isAdmin } = useAdmin();
  const pendingSubmissions = [];

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome to Discord Records</h2>
        <p className="text-gray-600 dark:text-gray-400">Here you can find all the most current records and submit new ones if you've beaten one!</p>
      </div>

      {isAdmin && pendingSubmissions.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Pending Submissions</h2>
          <PendingSubmissions
            submissions={pendingSubmissions}
            onApprove={(id) => console.log('Approved:', id)}
            onReject={(id) => console.log('Rejected:', id)}
          />
        </div>
      )}

      <div className="flex flex-col items-center space-y-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/submit"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus size={20} />
          Submit New Record
        </Link>
      </div>
    </div>
  );
}