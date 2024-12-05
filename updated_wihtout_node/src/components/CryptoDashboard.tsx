import React, { useState, useEffect } from 'react';

interface CryptoItem {
  id: string;
  symbol: string;
  name: string;
  current_price?: number;
  market_cap?: number;
  total_volume?: number;
}

const CryptoDashboard: React.FC = () => {
  const [coins, setCoins] = useState<CryptoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCoins = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      const data = await response.json();
      setCoins(data);
    } catch (error) {
      setError('Error fetching coin data');
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-8">Top Cryptocurrencies</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Cryptocurrency Data</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {coins.map((item) => (
            <div key={item.id} className="p-4 border rounded shadow">
              <p className="font-bold">{item.name} ({item.symbol.toUpperCase()})</p>
              <p>Price: ${item.current_price?.toFixed(2)}</p>
              <p>Market Cap: ${item.market_cap?.toLocaleString()}</p>
              <p>Volume: ${item.total_volume?.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDashboard;
