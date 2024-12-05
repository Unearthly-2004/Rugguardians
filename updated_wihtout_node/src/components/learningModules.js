import { BookOpen, AlertTriangle, CheckCircle } from 'lucide-react';

export const learningModules = [
  {
    id: 'rug-pull-basics',
    title: 'Rug Pull Basics',
    difficulty: 'Beginner',
    description: 'Understand what rug pulls are and how they work in the crypto ecosystem.',
    icon: <BookOpen className="w-12 h-12 text-purple-300" />,
    content: {
      overview: 'A rug pull is a malicious maneuver in the cryptocurrency world where project developers abandon a project and run away with investors\' funds.',
      keyPoints: [
        'Definition of a Rug Pull',
        'Types of Rug Pulls',
        'How Scammers Operate',
        'Red Flags to Watch'
      ],
      learningObjectives: [
        'Understand the basic concept of a rug pull',
        'Identify different types of rug pulls',
        'Recognize initial warning signs'
      ]
    }
  },
  {
    id: 'red-flags-detection',
    title: 'Red Flags Detection',
    difficulty: 'Intermediate',
    description: 'Learn to identify warning signs of potential rug pulls before they happen.',
    icon: <AlertTriangle className="w-12 h-12 text-orange-300" />,
    content: {
      overview: 'Detecting potential rug pulls requires a keen eye and understanding of various warning signals in crypto projects.',
      keyPoints: [
        'Suspicious Tokenomics',
        'Anonymous Team Members',
        'Unrealistic Promises',
        'Liquidity and Trading Patterns'
      ],
      learningObjectives: [
        'Analyze project whitepapers critically',
        'Investigate team backgrounds',
        'Understand smart contract vulnerabilities'
      ]
    }
  },
  {
    id: 'advanced-protection-strategies',
    title: 'Advanced Protection Strategies',
    difficulty: 'Advanced',
    description: 'Master advanced techniques to safeguard your crypto investments.',
    icon: <CheckCircle className="w-12 h-12 text-green-300" />,
    content: {
      overview: 'Advanced strategies to protect your investments and minimize risks in the volatile crypto landscape.',
      keyPoints: [
        'Risk Management',
        'Due Diligence Techniques',
        'Portfolio Diversification',
        'Security Best Practices'
      ],
      learningObjectives: [
        'Develop comprehensive investment strategies',
        'Use advanced research techniques',
        'Implement multi-layered security approaches'
      ]
    }
  }
];
