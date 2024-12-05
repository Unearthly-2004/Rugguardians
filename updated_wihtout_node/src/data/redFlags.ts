import { RedFlag } from '../types';

export const redFlags: RedFlag[] = [
  {
    id: '1',
    title: 'Centralized Token Ownership',
    description: 'Large percentage of tokens held by a single wallet or small group of wallets.',
    category: 'token',
    severity: 'high',
  },
  {
    id: '2',
    title: 'Non-audited Smart Contracts',
    description: 'Project launched without professional smart contract audit.',
    category: 'smart-contract',
    severity: 'high',
  },
  {
    id: '3',
    title: 'Anonymous Team',
    description: 'Development team remains anonymous without verifiable background.',
    category: 'project',
    severity: 'medium',
  },
  // Add more red flags...
];