import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RedFlagsList } from './components/RedFlagsList';
import { GuardianLevels } from './components/GuardianLevels';
import { Learn } from './components/Learn';
import { Analyze } from './components/Analyze';
import Leaderboard from './components/LeaderboardScreen';
import Wallet from './components/Wallet'; // Assuming you created a Wallet component

function App() {
  const [walletId, setWalletId] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const checkMetaMask = (): boolean => {
    return typeof window.ethereum !== 'undefined';
  };

  const connectWallet = async () => {
    if (!checkMetaMask()) {
      alert('MetaMask is not installed');
      return;
    }

    try {
      const accounts: string[] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setWalletId(accounts[0]);
      setIsConnected(true);
    } catch (err) {
      console.error(err);
      alert('Failed to connect wallet');
    }
  };

  const disconnectWallet = () => {
    setWalletId(null);
    setIsConnected(false);
  };

  useEffect(() => {
    if (checkMetaMask()) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setWalletId(accounts[0] || null);
        setIsConnected(!!accounts[0]);
      });
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header
          isConnected={isConnected}
          walletId={walletId}
          connectWallet={connectWallet}
        />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <RedFlagsList />
            <GuardianLevels />
          </>} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/wallet" element={<Wallet walletId={walletId} />} /> {/* Add Wallet Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
