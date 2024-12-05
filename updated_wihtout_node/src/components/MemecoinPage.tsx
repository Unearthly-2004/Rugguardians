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

const MemecoinList: React.FC = () => {
  const [memecoins, setMemecoins] = useState<Memecoin[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<Memecoin | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the list of memecoins
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

  const handleCoinClick = (coin: Memecoin) => {
    setSelectedCoin(coin);
  };

  const closeDetails = () => {
    setSelectedCoin(null);
  };

  if (loading) return <p>Loading memecoins...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Memecoins</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Display the list of memecoins in containers */}
        {memecoins.map((coin) => (
          <div
            key={coin.id}
            className="border rounded-lg p-4 bg-white shadow cursor-pointer hover:bg-gray-100"
            onClick={() => handleCoinClick(coin)}
          >
            <img src={coin.image} alt={coin.name} className="h-16 mx-auto" />
            <h2 className="text-lg font-bold mt-4">{coin.name} ({coin.symbol.toUpperCase()})</h2>
            <p className="text-sm">Price: ${coin.current_price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Display detailed info if a coin is selected */}
      {selectedCoin && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedCoin.name} ({selectedCoin.symbol.toUpperCase()})</h2>
            <img src={selectedCoin.image} alt={selectedCoin.name} className="h-24 mx-auto mb-4" />
            <p><strong>Price:</strong> ${selectedCoin.current_price.toFixed(2)}</p>
            <p><strong>Market Cap:</strong> ${selectedCoin.market_cap.toLocaleString()}</p>
            <p><strong>Total Volume:</strong> ${selectedCoin.total_volume.toLocaleString()}</p>
            <p><strong>24h Change:</strong> {selectedCoin.price_change_percentage_24h.toFixed(2)}%</p>
            <button
              className="mt-4 text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg"
              onClick={closeDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemecoinList;
