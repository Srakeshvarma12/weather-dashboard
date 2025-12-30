import { FaSun, FaMoon } from "react-icons/fa";

function ForecastHeader({ unit, setUnit, theme, setTheme }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        marginBottom: "24px"
      }}
    >
      <h2 style={{ fontSize: "22px", fontWeight: 600 }}>
        Forecast
      </h2>

      <div style={{ textAlign: "center" }}>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 600,
            borderBottom: "2px solid var(--accent-blue)",
            paddingBottom: "6px"
          }}
        >
          24 Hours
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "flex-end",
          alignItems: "center"
        }}
      >
        <button
          onClick={() =>
            setUnit(unit === "metric" ? "imperial" : "metric")
          }
          aria-label="Toggle temperature unit"
          style={{
            padding: "6px 12px",
            borderRadius: "999px",
            border: "1px solid var(--border-subtle)",
            background: "transparent",
            color: "var(--text-primary)"
          }}
        >
          {unit === "metric" ? "°C" : "°F"}
        </button>

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          aria-label="Toggle theme"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid var(--border-subtle)",
            background: "transparent",
            color: "var(--text-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
}

export default ForecastHeader;
