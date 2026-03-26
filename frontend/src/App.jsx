import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FilterForm } from './components/FilterForm';
import { MapSection } from './components/MapSection';
import { HostelTable } from './components/HostelTable';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  const [distance, setDistance] = useState(3);
  const [price, setPrice] = useState(160000);
  const [hostels, setHostels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHostels = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/hostels?distance=${distance}&price=${price}`
      );
      if (!response.ok) throw new Error('Failed to fetch hostels');
      const data = await response.json();
      setHostels(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch hostels');
      setHostels([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHostels();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <FilterForm
          distance={distance}
          price={price}
          onDistanceChange={setDistance}
          onPriceChange={setPrice}
          onSubmit={fetchHostels}
        />
        <MapSection />
        {loading && <div className="loading">Loading hostels...</div>}
        {error && <div className="error">Error: {error}</div>}
        {!loading && !error && <HostelTable hostels={hostels} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
