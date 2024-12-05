import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const Wallet = () => {
  const [walletId, setWalletId] = useState<string | null>(null); // Store the wallet address
  const [isConnected, setIsConnected] = useState<boolean>(false); // Track connection status
  const [error, setError] = useState<string | null>(null); // Store any error messages

  // Check if MetaMask is installed
  const checkMetaMask = (): boolean => {
    return typeof window.ethereum !== 'undefined';
  };

  // Connect to MetaMask and fetch wallet address
  const connectWallet = async () => {
    if (!checkMetaMask()) {
      setError('MetaMask is not installed');
      return;
    }

    try {
      // Request account access
      const accounts: string[] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      // Set the wallet address
      const walletAddress = accounts[0];
      setWalletId(walletAddress);
      setIsConnected(true);
    } catch (err) {
      setError('Failed to connect to MetaMask');
      console.error(err);
    }
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    setWalletId(null);
    setIsConnected(false);
  };

  // Listen for account change in MetaMask
  useEffect(() => {
    if (checkMetaMask()) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        setWalletId(accounts[0] || null);
        setIsConnected(!!accounts[0]);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">MetaMask Wallet</h1>

        <div className="text-center">
          {!isConnected ? (
            <button
              onClick={connectWallet}
              className="py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg mb-4"
            >
              Connect Wallet
            </button>
          ) : (
            <div>
              <p className="text-lg mb-4">Connected to: {walletId}</p>
              <button
                onClick={disconnectWallet}
                className="py-2 px-6 bg-red-600 hover:bg-red-700 text-white rounded-lg"
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-8 text-center bg-red-800 p-6 rounded-xl">
            <p className="text-lg">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wallet;
