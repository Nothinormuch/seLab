export function MapSection() {
  return (
    <section className="map-section">
      <h2>📍 UPES Campus Location</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps?q=UPES+Bidholi&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen=""
        />
      </div>
    </section>
  );
}
