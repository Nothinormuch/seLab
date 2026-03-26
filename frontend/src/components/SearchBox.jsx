export function SearchBox({ searchQuery, onSearchChange }) {
  const handleClear = () => {
    onSearchChange('');
  };

  return (
    <div className="search-container">
      <span className="search-icon">🔍</span>
      <input
        type="search"
        className="search-box"
        placeholder="Search by hostel name..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchQuery && (
        <button className="search-clear" onClick={handleClear}>
          ✕
        </button>
      )}
    </div>
  );
}