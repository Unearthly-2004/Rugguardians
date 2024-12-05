import React, { useState } from 'react';

// Define the MCQ questions for each module
const learningModulesQuestions = {
  rugPullBasics: [
    {
      question: 'What is a Rug Pull?',
      options: ['A legitimate investment opportunity', 'A type of scam', 'A government regulation', 'A security protocol'],
      answer: 1, // Correct answer is the second option (index 1)
    },
    {
      question: 'What is a common red flag of a Rug Pull?',
      options: ['Clear roadmap', 'No team members listed', 'Transparent code', 'Open-source project'],
      answer: 1, // Correct answer is the second option (index 1)
    },
  ],
  redFlagsDetection: [
    {
      question: 'Which of these is a sign of a potential Rug Pull?',
      options: ['Verified team', 'Anonymous team members', 'Detailed roadmap', 'Open source code'],
      answer: 1, // Correct answer is the second option (index 1)
    },
    {
      question: 'What is the importance of the project’s community in detecting red flags?',
      options: ['High community involvement', 'Low community involvement', 'No community involvement', 'None of the above'],
      answer: 0, // Correct answer is the first option (index 0)
    },
  ],
  advancedProtectionStrategies: [
    {
      question: 'What is a good advanced protection strategy for your crypto investments?',
      options: ['Ignoring market fluctuations', 'Diversifying your investments', 'Investing in single coin only', 'Avoiding new projects'],
      answer: 1, // Correct answer is the second option (index 1)
    },
    {
      question: 'What should you do before investing in a project?',
      options: ['Verify project team and roadmap', 'Invest without research', 'Follow trends blindly', 'Invest only in top coins'],
      answer: 0, // Correct answer is the first option (index 0)
    },
  ],
};

export function Analyze() {
  const [answers, setAnswers] = useState<{ [key: string]: number[] }>({
    rugPullBasics: new Array(learningModulesQuestions.rugPullBasics.length).fill(-1),
    redFlagsDetection: new Array(learningModulesQuestions.redFlagsDetection.length).fill(-1),
    advancedProtectionStrategies: new Array(learningModulesQuestions.advancedProtectionStrategies.length).fill(-1),
  });
  const [submitted, setSubmitted] = useState(false);
  const [report, setReport] = useState('');

  // Handle answer change for each question
  const handleAnswerChange = (module: string, questionIndex: number, answerIndex: number) => {
    const newAnswers = { ...answers };
    newAnswers[module][questionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  // Handle form submission and report generation
  const handleSubmit = () => {
    let score = 0;

    // Calculate score for each module
    Object.keys(learningModulesQuestions).forEach((module) => {
      learningModulesQuestions[module].forEach((q, index) => {
        if (answers[module][index] === q.answer) {
          score++;
        }
      });
    });

    // Generate report based on score
    const totalQuestions = Object.values(learningModulesQuestions).flat().length;
    const percentage = (score / totalQuestions) * 100;
    setReport(`You answered ${score} out of ${totalQuestions} questions correctly. (${percentage}%)`);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">MCQ Test: Analyze Your Knowledge</h1>

        <div className="space-y-8">
          {Object.keys(learningModulesQuestions).map((module) => (
            <div key={module}>
              <h2 className="text-2xl font-semibold mb-6">{module.replace(/([A-Z])/g, ' $1').trim()}</h2>
              {learningModulesQuestions[module].map((q, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
                  <h3 className="text-xl font-semibold mb-4">{q.question}</h3>
                  <div className="space-y-4">
                    {q.options.map((option, i) => (
                      <div key={i} className="flex items-center">
                        <input
                          type="radio"
                          name={`question-${module}-${index}`}
                          id={`question-${module}-${index}-option-${i}`}
                          checked={answers[module][index] === i}
                          onChange={() => handleAnswerChange(module, index, i)}
                          className="mr-2"
                        />
                        <label htmlFor={`question-${module}-${index}-option-${i}`} className="text-lg">{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {!submitted ? (
          <div className="mt-8 text-center">
            <button
              onClick={handleSubmit}
              className="py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
            >
              Submit Answers
            </button>
          </div>
        ) : (
          <div className="mt-8 text-center bg-green-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Test Report</h2>
            <p className="text-lg">{report}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Analyze;
