export function FilterPanel({
  distance,
  priceRange,
  onDistanceChange,
  onPriceRangeChange,
  showFavoritesOnly,
  onShowFavoritesChange,
  favoritesCount,
}) {
  const handleMinPriceChange = (newMin) => {
    if (newMin <= priceRange[1]) {
      onPriceRangeChange([newMin, priceRange[1]]);
    }
  };

  const handleMaxPriceChange = (newMax) => {
    if (newMax >= priceRange[0]) {
      onPriceRangeChange([priceRange[0], newMax]);
    }
  };

  return (
    <div className="filter-panel">
      <h3 className="filter-title">🔍 Filter Hostels</h3>

      {/* Distance Filter */}
      <div className="filter-group">
        <label className="filter-label">Distance from Campus</label>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[0, 1, 2, 3].map((d) => (
            <button
              key={d}
              className={`chip ${distance === d ? 'active' : ''}`}
              onClick={() => onDistanceChange(d)}
            >
              {d === 0 ? '🎯 On Campus' : `${d} km`}
            </button>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="filter-group">
        <label className="filter-label">Budget Range (₹)</label>
        <div style={{ marginBottom: '12px' }}>
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginBottom: '12px',
              fontSize: '13px',
            }}
          >
            <span style={{ flex: 1 }}>
              Min: <strong>₹{priceRange[0].toLocaleString('en-IN')}</strong>
            </span>
            <span style={{ flex: 1, textAlign: 'right' }}>
              Max: <strong>₹{priceRange[1].toLocaleString('en-IN')}</strong>
            </span>
          </div>
          <input
            type="range"
            min="100000"
            max="160000"
            step="1000"
            value={priceRange[0]}
            onChange={(e) => handleMinPriceChange(parseInt(e.target.value))}
            style={{ width: '100%' }}
          />
          <input
            type="range"
            min="100000"
            max="160000"
            step="1000"
            value={priceRange[1]}
            onChange={(e) => handleMaxPriceChange(parseInt(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      {/* Favorites Filter */}
      {favoritesCount > 0 && (
        <div className="filter-group">
          <label
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: '14px',
            }}
          >
            <input
              type="checkbox"
              checked={showFavoritesOnly}
              onChange={(e) => onShowFavoritesChange(e.target.checked)}
              style={{ width: '18px', height: '18px', cursor: 'pointer' }}
            />
            Show only favorites{' '}
            <span className="badge" style={{ marginLeft: 'auto' }}>
              {favoritesCount}
            </span>
          </label>
        </div>
      )}
    </div>
  );
}