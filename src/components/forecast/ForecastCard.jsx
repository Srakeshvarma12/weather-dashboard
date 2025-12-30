import {
  WiSnow,
  WiCloudy,
  WiDaySunny,
  WiRain,
  WiFog
} from "react-icons/wi";

/* ============================= */
/* WEATHER ICON LOGIC */
/* ============================= */
const getWeatherIcon = (label) => {
  const text = label.toLowerCase();

  if (text.includes("snow")) return <WiSnow size={26} />;
  if (text.includes("rain")) return <WiRain size={26} />;
  if (text.includes("cloud")) return <WiCloudy size={26} />;
  if (text.includes("fog") || text.includes("mist"))
    return <WiFog size={26} />;

  return <WiDaySunny size={26} />;
};

/* ============================= */
/* FORECAST CARD */
/* ============================= */
function ForecastCard({ time, temp, label, unit }) {
  const displayTemp =
    unit === "imperial"
      ? Math.round((temp * 9) / 5 + 32)
      : Math.round(temp);

  return (
    <div
      className="forecast-card"
      style={{
        background: "var(--bg-card)",
        color: "var(--text-primary)",
        borderRadius: "16px",
        padding: "16px",
        minHeight: "160px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center"
      }}
    >
      {/* TIME */}
      <div
        style={{
          fontSize: "12px",
          color: "var(--text-secondary)"
        }}
      >
        {time}
      </div>

      {/* TEMPERATURE */}
      <div
        style={{
          fontSize: "26px",
          fontWeight: 700,
          lineHeight: 1
        }}
      >
        {displayTemp}°
      </div>

      {/* ICON */}
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "var(--icon-bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {getWeatherIcon(label)}
      </div>

      {/* LABEL */}
      <div
        style={{
          fontSize: "12px",
          color: "var(--text-secondary)",
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100%"
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default ForecastCard;
