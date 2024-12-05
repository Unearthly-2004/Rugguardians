import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RedFlagsList } from './components/RedFlagsList';
import { GuardianLevels } from './components/GuardianLevels';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <RedFlagsList />
        <GuardianLevels />
      </div>
    </Router>
  );
}

export default App;