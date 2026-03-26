export function SortBar({ sortBy, onSortChange }) {
  const sortOptions = [
    { value: 'distance', label: '📍 Distance' },
    { value: 'price-low', label: '💵 Price (Low)' },
    { value: 'price-high', label: '💸 Price (High)' },
    { value: 'name', label: '📝 Name (A-Z)' },
  ];

  return (
    <div className="sort-bar">
      <p className="sort-label">Sort By:</p>
      <div className="sort-options">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            className={`chip ${sortBy === option.value ? 'active' : ''}`}
            onClick={() => onSortChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}