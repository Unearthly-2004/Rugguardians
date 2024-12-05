import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RedFlagsList } from './components/RedFlagsList';
import { GuardianLevels } from './components/GuardianLevels';
import { Learn } from './components/Learn';
import { Analyze } from './components/Analyze';
import Leaderboard from './components/LeaderboardScreen';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <RedFlagsList />
            <GuardianLevels />
          </>} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
