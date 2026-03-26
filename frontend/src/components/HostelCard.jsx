export function HostelCard({ hostel, isFavorite, onToggleFavorite }) {
  return (
    <div className="hostel-card">
      <div className="hostel-card-header">
        <h3 className="hostel-name">{hostel.name}</h3>
        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(hostel.name)}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <p className="hostel-location">📍 {hostel.location}</p>

      <div className="hostel-meta">
        <div className="hostel-badge distance">
          <span>📍</span>
          {hostel.distance.toFixed(1)} km
        </div>
        <div className="hostel-badge price">
          <span>💵</span>
          ₹{hostel.price.toLocaleString('en-IN')}
        </div>
      </div>

      <div className="hostel-actions">
        <button className="secondary">View Details</button>
      </div>
    </div>
  );
}