import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RedFlagsList } from './components/RedFlagsList';
import { GuardianLevels } from './components/GuardianLevels';
import { Learn } from './components/Learn';
import { RugPullBasics } from './components/RugPullBasics';
import { RedFlagsDetection } from './components/RedFlagsDetection';
import { AdvancedProtectionStrategies } from './components/AdvancedProtectionStrategies';


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
          <Route path="/learn/rug-pull-basics" element={<RugPullBasics />} />
          <Route path="/learn/red-flags-detection" element={<RedFlagsDetection />} />
          <Route path="/learn/advanced-protection-strategies" element={<AdvancedProtectionStrategies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
