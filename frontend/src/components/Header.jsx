export function Header() {
  return (
    <header>
      <div className="header-inner">
          <img src="/logo.png" alt="Waulkeen's Rest logo" className="site-logo" />
          <div>
            <h1>Waulkeen's Rest</h1>
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.9, fontWeight: 300 }}>
              Find your perfect hostel near UPES
            </p>
          </div>
      </div>
    </header>
  );
}
