export function ViewToggle({ viewMode, onViewChange }) {
  return (
    <div className="view-toggle">
      <button
        className={viewMode === 'card' ? 'active' : ''}
        onClick={() => onViewChange('card')}
        title="Card View"
      >
        ☷
      </button>
      <button
        className={viewMode === 'table' ? 'active' : ''}
        onClick={() => onViewChange('table')}
        title="Table View"
      >
        ☰
      </button>
    </div>
  );
}