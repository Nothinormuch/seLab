export function HostelTable({ hostels }) {
  return (
    <section className="results">
      <table>
        <thead>
          <tr>
            <th>Hostel Name</th>
            <th>Location</th>
            <th>Distance from Campus</th>
            <th>Yearly Price</th>
          </tr>
        </thead>
        <tbody>
          {hostels.length > 0 ? (
            hostels.map((hostel, index) => (
              <tr key={index}>
                <td>{hostel.name}</td>
                <td>{hostel.location}</td>
                <td>{hostel.distance.toFixed(1)} km</td>
                <td>₹{hostel.price.toLocaleString('en-IN')}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hostels match the filters.</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
