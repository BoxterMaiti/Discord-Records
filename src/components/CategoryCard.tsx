import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Trophy, Link as LinkIcon, Edit2 } from 'lucide-react';
import { Category } from '../types';
import { useAdmin } from '../contexts/AdminContext';
import EditScoreModal from './EditScoreModal';

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [editingScore, setEditingScore] = useState<{ index: number; score: any } | null>(null);
  const { isAdmin } = useAdmin();

  const handleEdit = (scoreIndex: number) => {
    setEditingScore({
      index: scoreIndex,
      score: category.scores[scoreIndex]
    });
  };

  const handleSave = (newValue: string, newHolder: string) => {
    // In a real app, this would update the backend
    console.log('Saving changes:', {
      category: category.title,
      scoreIndex: editingScore?.index,
      newValue,
      newHolder
    });
  };

  return (
    <>
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        >
          <h2 className="text-xl font-bold">{category.title}</h2>
          {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-[2000px]' : 'max-h-0'
          }`}
        >
          {category.description && (
            <div className="px-6 py-2 bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600 text-sm text-gray-600 dark:text-gray-300">
              <a href={category.description} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400">
                <LinkIcon size={16} />
                {category.description}
              </a>
            </div>
          )}
          
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {category.scores.map((score, index) => (
              <div key={index} className="px-6 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">{score.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Trophy size={16} className="text-yellow-500" />
                    <span>{score.holder}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-lg dark:text-gray-200">{score.value}</span>
                  {isAdmin && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(index);
                      }}
                      className="p-1 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <Edit2 size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {editingScore && (
        <EditScoreModal
          isOpen={true}
          onClose={() => setEditingScore(null)}
          score={editingScore.score}
          onSave={handleSave}
        />
      )}
    </>
  );
}