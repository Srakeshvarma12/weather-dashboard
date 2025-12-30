import WeatherStatCard from "./WeatherStatCard";
import { getAqiMeta } from "../../utils/aqiUtils";
import { convertTemp } from "../../utils/temperature";

/* -------------------- */
/* Helpers */
/* -------------------- */
function formatTime(unix) {
  return new Date(unix * 1000).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function CurrentWeatherGrid({ data, aqi, unit }) {
  if (!data) return null;

  const aqiMeta = aqi ? getAqiMeta(aqi) : null;

  return (
    <section style={{ marginTop: "32px" }}>
      {/* SECTION TITLE */}
      <h3
        style={{
          marginBottom: "16px",
          fontSize: "20px",
          fontWeight: 600,
          color: "var(--text-primary)"
        }}
      >
        Current Weather
      </h3>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "16px"
        }}
      >

        {/* 🌅 Sunrise / Sunset */}
        <WeatherStatCard title="Sunrise / Sunset">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "var(--text-primary)"
            }}
          >
            <span>🌅 {formatTime(data.sys.sunrise)}</span>
            <span>🌇 {formatTime(data.sys.sunset)}</span>
          </div>
        </WeatherStatCard>

        {/* 🌡 Temperature */}
        <WeatherStatCard title="Temperature">
          <div style={{ fontSize: "24px", fontWeight: 700 }}>
            {convertTemp(data.main.temp, unit)}°
            {unit === "metric" ? "C" : "F"}
          </div>

          <span
            style={{
              fontSize: "13px",
              color: "var(--text-secondary)"
            }}
          >
            Feels like {convertTemp(data.main.feels_like, unit)}°
            {unit === "metric" ? "C" : "F"}
          </span>
        </WeatherStatCard>

        {/* 🌫 Air Quality */}
        {aqiMeta && (
          <WeatherStatCard title="Air Quality">
            <div
              style={{
                fontSize: "26px",
                fontWeight: 600,
                color: "var(--text-primary)"
              }}
            >
              AQI {aqi}
            </div>

            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: aqiMeta.color
              }}
            >
              {aqiMeta.label}
            </span>
          </WeatherStatCard>
        )}

        {/* 💧 Humidity */}
        <WeatherStatCard title="Humidity">
          <div
            style={{
              fontSize: "26px",
              fontWeight: 600,
              color: "var(--text-primary)"
            }}
          >
            {data.main.humidity}%
          </div>
        </WeatherStatCard>

        {/* 🔥 Max / Min Temp */}
        <WeatherStatCard title="Max / Min Temp">
          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "14px",
              color: "var(--text-primary)"
            }}
          >
            <span>
              🔴 {convertTemp(data.main.temp_max, unit)}°
              {unit === "metric" ? "C" : "F"}
            </span>

            <span>
              🔵 {convertTemp(data.main.temp_min, unit)}°
              {unit === "metric" ? "C" : "F"}
            </span>
          </div>
        </WeatherStatCard>

        {/* 🌬 Wind */}
        <WeatherStatCard title="Wind Status">
          <div
            style={{
              fontSize: "22px",
              color: "var(--text-primary)"
            }}
          >
            🌬 {data.wind.speed} m/s
          </div>
        </WeatherStatCard>

        {/* 👁 Visibility */}
        <WeatherStatCard title="Visibility">
          <div
            style={{
              fontSize: "22px",
              color: "var(--text-primary)"
            }}
          >
            👁 {Math.round(data.visibility / 1000)} km
          </div>
        </WeatherStatCard>
      </div>
    </section>
  );
}

export default CurrentWeatherGrid;
