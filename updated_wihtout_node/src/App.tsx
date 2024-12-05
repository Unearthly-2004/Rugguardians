// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RedFlagsList } from './components/RedFlagsList';
import { GuardianLevels } from './components/GuardianLevels';
import { Learn } from './components/Learn';
import { Analyze } from './components/Analyze';
import Leaderboard from './components/LeaderboardScreen';
import ConnectWalletPage from './components/ConnectWalletPage';
import MemecoinPage from './components/MemecoinPage';
import CryptoDashboard from './components/CryptoDashboard';  // Import new page

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
          <Route path="/connect-wallet" element={<ConnectWalletPage />} />
          <Route path="/memecoin" element={<MemecoinPage />} />
          <Route path="/crypto-dashboard" element={<CryptoDashboard />} /> {/* New route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
