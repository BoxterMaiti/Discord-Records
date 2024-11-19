import React from 'react';
import { Check, X } from 'lucide-react';
import { RecordSubmission } from '../types';

interface Props {
  submissions: RecordSubmission[];
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}

export default function PendingSubmissions({ submissions, onApprove, onReject }: Props) {
  if (submissions.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        No pending submissions
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {submissions.map((submission) => (
        <div
          key={submission.id}
          className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between"
        >
          <div>
            <h3 className="font-medium">{submission.recordTitle}</h3>
            <p className="text-sm text-gray-600">
              {submission.category} - New value: {submission.newValue} by{' '}
              {submission.holder}
            </p>
            {submission.proof && (
              <a
                href={submission.proof}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:text-indigo-800"
              >
                View Proof
              </a>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onApprove(submission.id)}
              className="p-2 text-green-600 hover:bg-green-50 rounded-full"
            >
              <Check size={20} />
            </button>
            <button
              onClick={() => onReject(submission.id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-full"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}