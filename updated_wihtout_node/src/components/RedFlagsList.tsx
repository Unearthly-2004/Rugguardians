import React from 'react';
import { redFlags } from '../data/redFlags';
import { AlertTriangle } from 'lucide-react';

export function RedFlagsList() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Common Red Flags</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {redFlags.map((flag) => (
            <div 
              key={flag.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <AlertTriangle 
                  className={`w-6 h-6 mr-2 ${
                    flag.severity === 'high' ? 'text-red-500' :
                    flag.severity === 'medium' ? 'text-yellow-500' :
                    'text-blue-500'
                  }`}
                />
                <h3 className="text-lg font-semibold">{flag.title}</h3>
              </div>
              <p className="text-gray-600">{flag.description}</p>
              <div className="mt-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  flag.category === 'token' ? 'bg-purple-100 text-purple-800' :
                  flag.category === 'smart-contract' ? 'bg-blue-100 text-blue-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {flag.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}