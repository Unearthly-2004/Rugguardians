// src/components/MemecoinPage.tsx
import React, { useState, useEffect } from 'react';

interface Memecoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

const MemecoinPage: React.FC = () => {
  const [memecoins, setMemecoins] = useState<Memecoin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemecoins = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=meme-token&order=market_cap_desc&per_page=100&page=1&sparkline=false'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch memecoins.');
        }
        const data: Memecoin[] = await response.json();
        setMemecoins(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMemecoins();
  }, []);

  if (loading) return <p className="text-center py-8">Loading memecoins...</p>;
  if (error) return <p className="text-center py-8 text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold text-center text-gradient mb-8">
        Memecoins
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {memecoins.map((coin) => (
          <div
            key={coin.id}
            className="border rounded-xl p-6 bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <img src={coin.image} alt={coin.name} className="h-16 mb-4" />
              <h2 className="text-xl font-semibold text-center mb-2">{coin.name}</h2>
              <p className="text-sm text-gray-600">{coin.symbol.toUpperCase()}</p>
              <p className="text-lg font-bold text-indigo-600 mt-2">${coin.current_price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 mt-2">Market Cap: ${coin.market_cap.toLocaleString()}</p>
              <p className="text-sm text-green-500 mt-2">
                24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemecoinPage;
