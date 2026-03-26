export function FilterForm({ distance, price, onDistanceChange, onPriceChange, onSubmit }) {
  return (
    <section className="filter">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <label>
          Max Distance:
          <select value={distance} onChange={(e) => onDistanceChange(parseFloat(e.target.value))}>
            {[0, 1, 2, 3].map((d) => (
              <option key={d} value={d}>
                {d} km
              </option>
            ))}
          </select>
        </label>

        <label>
          Budget Range (₹):
          <input type="text" value="100000" readOnly />
          <input
            type="range"
            min="100000"
            max="160000"
            step="1000"
            value={price}
            onChange={(e) => onPriceChange(parseInt(e.target.value))}
          />
          <input type="text" value={price} readOnly />
        </label>

        <button type="submit">Apply Filters</button>
      </form>
    </section>
  );
}
