function DailyForecastList({ data, unit }) {
  if (!data || data.length === 0) return null;

  return (
    <section style={{ marginTop: "32px" }}>
      {/* SECTION TITLE */}
      <h3
        style={{
          marginBottom: "16px",
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--text-primary)"
        }}
      >
        5-Day Forecast
      </h3>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px"
        }}
      >
        {data.map((day, index) => {
          const min =
            unit === "imperial"
              ? Math.round((day.min * 9) / 5 + 32)
              : Math.round(day.min);

          const max =
            unit === "imperial"
              ? Math.round((day.max * 9) / 5 + 32)
              : Math.round(day.max);

          return (
            <div
              key={index}
              className="daily-card"
              style={{
                background: "var(--bg-card)", // 🔥 FIXED
                color: "var(--text-primary)", // 🔥 FIXED
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              {/* DATE */}
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)"
                }}
              >
                {day.date}
              </span>

              {/* MIN / MAX */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "16px",
                  fontWeight: 600
                }}
              >
                <span>{min}°</span>
                <span>{max}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DailyForecastList;
