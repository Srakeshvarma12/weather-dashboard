function WeatherStatCard({ title, children }) {
  return (
    <div className="app-card">
      {/* TITLE */}
      <span
        style={{
          fontSize: "14px",
          fontWeight: 500,
          color: "var(--text-secondary)"
        }}
      >
        {title}
      </span>

      {/* CONTENT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          color: "var(--text-primary)"
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default WeatherStatCard;
