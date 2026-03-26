import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { FilterPanel } from './components/FilterPanel';
import { SearchBox } from './components/SearchBox';
import { SortBar } from './components/SortBar';
import { ViewToggle } from './components/ViewToggle';
import { ResultsSection } from './components/ResultsSection';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { useFavorites } from './hooks/useFavorites';
import './index.css';

function App() {
  // Filter state
  const [distance, setDistance] = useState(3);
  const [priceRange, setPriceRange] = useState([100000, 160000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('distance');
  const [viewMode, setViewMode] = useState('card');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // API state
  const [allHostels, setAllHostels] = useState([]);
  const [filteredHostels, setFilteredHostels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Favorites
  const { favorites, toggleFavorite } = useFavorites();

  // Debounce timer for auto-apply
  const debounceTimer = useRef(null);

  // Fetch from API based on distance and price filters
  const fetchHostels = async (dist, price) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/hostels?distance=${dist}&price=${price[1]}`
      );
      if (!response.ok) throw new Error('Failed to fetch hostels');
      const data = await response.json();
      setAllHostels(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch hostels');
      setAllHostels([]);
    } finally {
      setLoading(false);
    }
  };

  // Auto-apply filters (debounced) when distance or price changes
  useEffect(() => {
    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set new timer to debounce API calls
    debounceTimer.current = setTimeout(() => {
      fetchHostels(distance, priceRange);
    }, 300);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [distance, priceRange]);

  // Client-side filtering and sorting
  useEffect(() => {
    let results = allHostels;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (h) =>
          h.name.toLowerCase().includes(query) ||
          h.location.toLowerCase().includes(query)
      );
    }

    // Filter by favorites if enabled
    if (showFavoritesOnly) {
      results = results.filter((h) => favorites.includes(h.name));
    }

    // Sort results
    const sortFunctions = {
      distance: (a, b) => a.distance - b.distance,
      'price-low': (a, b) => a.price - b.price,
      'price-high': (a, b) => b.price - a.price,
      name: (a, b) => a.name.localeCompare(b.name),
    };

    if (sortFunctions[sortBy]) {
      results.sort(sortFunctions[sortBy]);
    }

    setFilteredHostels(results);
  }, [allHostels, searchQuery, showFavoritesOnly, sortBy, favorites]);

  // Initial load
  useEffect(() => {
    fetchHostels(distance, priceRange);
  }, []);

  return (
    <div>
      <Header />
      <main>
        {/* Filter Panel */}
        <FilterPanel
          distance={distance}
          priceRange={priceRange}
          onDistanceChange={setDistance}
          onPriceRangeChange={setPriceRange}
          showFavoritesOnly={showFavoritesOnly}
          onShowFavoritesChange={setShowFavoritesOnly}
          favoritesCount={favorites.length}
        />

        {/* Search Box */}
        <SearchBox searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* Results Header */}
        <div className="results-header">
          <div className="results-count">
            Showing <strong>{filteredHostels.length}</strong> hostel
            {filteredHostels.length !== 1 ? 's' : ''}
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <SortBar sortBy={sortBy} onSortChange={setSortBy} />
            <ViewToggle viewMode={viewMode} onViewChange={setViewMode} />
          </div>
        </div>

        {/* Map */}
        <MapSection />

        {/* Results */}
        {error && (
          <div className="error">
            <span>⚠️</span> {error}
          </div>
        )}

        {loading && <div className="loading">Loading hostels...</div>}

        {!loading && !error && (
          <ResultsSection
            hostels={filteredHostels}
            viewMode={viewMode}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;