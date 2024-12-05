export interface RedFlag {
  id: string;
  title: string;
  description: string;
  category: 'token' | 'smart-contract' | 'project';
  severity: 'high' | 'medium' | 'low';
}

export interface GuardianLevel {
  name: string;
  points: number;
  badge: string;
  benefits: string[];
}