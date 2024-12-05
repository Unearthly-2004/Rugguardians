import { GuardianLevel } from '../types';

export const guardianLevels: GuardianLevel[] = [
  {
    name: 'Beginner Guardian',
    points: 0,
    badge: '🛡️',
    benefits: ['Basic risk assessment access', 'Community participation'],
  },
  {
    name: 'Advanced Investigator',
    points: 100,
    badge: '🔍',
    benefits: ['Advanced analytics tools', 'Voting power x2'],
  },
  {
    name: 'Master Analyst',
    points: 500,
    badge: '⭐',
    benefits: ['Premium features access', 'Community leadership roles'],
  },
  {
    name: 'Elite Defender',
    points: 1000,
    badge: '👑',
    benefits: ['Governance voting rights', 'Expert badge visibility'],
  },
];