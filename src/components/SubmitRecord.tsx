import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import { categories } from '../data';

export default function SubmitRecord() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [record, setRecord] = useState('');
  const [value, setValue] = useState('');
  const [holder, setHolder] = useState('');
  const [proof, setProof] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    console.log('Submitted:', { category, record, value, holder, proof });
    alert('Record submitted for review!');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Submit New Record</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.title} value={cat.title}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Record Title
          </label>
          <select
            value={record}
            onChange={(e) => setRecord(e.target.value)}
            required
            disabled={!category}
            className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50"
          >
            <option value="">Select a record</option>
            {category &&
              categories
                .find((cat) => cat.title === category)
                ?.scores.map((score) => (
                  <option key={score.title} value={score.title}>
                    {score.title}
                  </option>
                ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            New Value
          </label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
            placeholder="e.g., 1:30.5"
            className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Holder Name
          </label>
          <input
            type="text"
            value={holder}
            onChange={(e) => setHolder(e.target.value)}
            required
            placeholder="Your name"
            className="w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Proof (Screenshot/Photo)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <Camera className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600 dark:text-gray-400">
                <label className="relative cursor-pointer bg-white dark:bg-transparent rounded-md font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setProof(e.target.files?.[0] || null)}
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-gray-800"
          >
            Submit Record
          </button>
        </div>
      </form>
    </div>
  );
}