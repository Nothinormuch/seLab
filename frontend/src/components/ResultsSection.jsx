import { HostelCard } from './HostelCard';

export function ResultsSection({ hostels, viewMode, favorites, onToggleFavorite }) {
  if (hostels.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🏨</div>
        <h3 className="empty-state-title">No hostels found</h3>
        <p className="empty-state-text">
          Try adjusting your filters to see more hostels
        </p>
      </div>
    );
  }

  if (viewMode === 'card') {
    return (
      <div className="hostels-grid">
        {hostels.map((hostel, index) => (
          <HostelCard
            key={index}
            hostel={hostel}
            isFavorite={favorites.includes(hostel.name)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    );
  }

  // Table view
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Hostel Name</th>
          <th>Location</th>
          <th>Distance</th>
          <th>Yearly Price</th>
        </tr>
      </thead>
      <tbody>
        {hostels.map((hostel, index) => (
          <tr key={index}>
            <td style={{ width: '40px', textAlign: 'center' }}>
              <button
                className="favorite-btn"
                onClick={() => onToggleFavorite(hostel.name)}
                style={{
                  minWidth: '32px',
                  color: favorites.includes(hostel.name) ? '#f44336' : '#6b7280',
                }}
              >
                {favorites.includes(hostel.name) ? '❤️' : '🤍'}
              </button>
            </td>
            <td>
              <span className="table-name">{hostel.name}</span>
            </td>
            <td>{hostel.location}</td>
            <td>{hostel.distance.toFixed(1)} km</td>
            <td>
              <strong>₹{hostel.price.toLocaleString('en-IN')}</strong>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}