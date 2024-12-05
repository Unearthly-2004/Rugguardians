import React, { useState } from 'react';
import { AlertTriangle, BookOpen, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Import the actual components for each module
import { RugPullBasics } from './RugPullBasics';
import { RedFlagsDetection } from './RedFlagsDetection';
import { AdvancedProtectionStrategies } from './AdvancedProtectionStrategies';

const learningModules = [
  {
    title: 'Rug Pull Basics',
    description: 'Understand what rug pulls are and how they work in the crypto ecosystem.',
    icon: <BookOpen className="w-12 h-12 text-purple-300" />,
    difficulty: 'Beginner',
    content: <RugPullBasics />, // Use the actual component here
  },
  {
    title: 'Red Flags Detection',
    description: 'Learn to identify warning signs of potential rug pulls before they happen.',
    icon: <AlertTriangle className="w-12 h-12 text-orange-300" />,
    difficulty: 'Intermediate',
    content: <RedFlagsDetection />, // Use the actual component here
  },
  {
    title: 'Advanced Protection Strategies',
    description: 'Master advanced techniques to safeguard your crypto investments.',
    icon: <CheckCircle className="w-12 h-12 text-green-300" />,
    difficulty: 'Advanced',
    content: <AdvancedProtectionStrategies />, // Use the actual component here
  },
];

export function Learn() {
  const [selectedModule, setSelectedModule] = useState<JSX.Element | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12">
            Learn to Protect Your Crypto Investments
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {learningModules.map((module) => (
              <motion.div
                key={module.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-lg border-2 border-transparent hover:border-purple-500"
              >
                <div className="flex justify-between items-center mb-4">
                  {module.icon}
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      module.difficulty === 'Beginner'
                        ? 'bg-green-500/20 text-green-300'
                        : module.difficulty === 'Intermediate'
                        ? 'bg-orange-500/20 text-orange-300'
                        : 'bg-red-500/20 text-red-300'
                    }`}
                  >
                    {module.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-purple-200 mb-4">{module.description}</p>
                <button
                  onClick={() => setSelectedModule(module.content)} // Set the selected module content
                  className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>

          {/* Display the selected module's content */}
          <div className="mt-8">
            {selectedModule ? (
              selectedModule
            ) : (
              <p className="text-lg text-gray-300">Please select a module to learn more.</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Learn;
