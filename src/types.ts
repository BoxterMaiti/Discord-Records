export interface Score {
  title: string;
  value: string;
  holder: string;
  link?: string;
}

export interface Category {
  title: string;
  scores: Score[];
  description?: string;
}

export interface AdminContextType {
  isAdmin: boolean;
  login: (password: string) => void;
  logout: () => void;
}

export interface RecordSubmission {
  id: string;
  category: string;
  recordTitle: string;
  newValue: string;
  holder: string;
  proof?: string;
  status: 'pending' | 'approved' | 'rejected';
  timestamp: number;
}