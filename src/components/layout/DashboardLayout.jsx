import { useState, useEffect } from "react";

import ForecastHeader from "../forecast/ForecastHeader";
import ForecastList from "../forecast/ForecastList";
import DailyForecastList from "../forecast/DailyForecastList";
import CurrentWeatherGrid from "../current/CurrentWeatherGrid";

import ForecastSkeleton from "../skeletons/ForecastSkeleton";
import CurrentWeatherSkeleton from "../skeletons/CurrentWeatherSkeleton";

import {
  fetchCurrentWeather,
  fetchForecast,
  fetchAirQuality
} from "../../services/weatherApi";

function DashboardLayout({
  searchedCity,
  hasSearched,
  onSearch,
  theme,
  setTheme
}) {

  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric");
  // const [theme, setTheme] = useState("dark"); // ✅ FIX
  const [isLoading, setIsLoading] = useState(false);

  const [forecastData, setForecastData] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  const fetchWeatherByCity = async (targetCity) => {
    if (!targetCity || !targetCity.trim()) return;

    try {
      setIsLoading(true);

      const [current, forecast] = await Promise.all([
        fetchCurrentWeather(targetCity),
        fetchForecast(targetCity)
      ]);

      const air = await fetchAirQuality(
        current.coord.lat,
        current.coord.lon
      );

      setForecastData(forecast.list.slice(0, 6));

      const grouped = {};
      forecast.list.forEach((item) => {
        const key = new Date(item.dt * 1000).toDateString();
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(item.main.temp);
      });

      const daily = Object.entries(grouped)
        .slice(0, 5)
        .map(([date, temps]) => ({
          date,
          min: Math.min(...temps),
          max: Math.max(...temps)
        }));

      setDailyForecast(daily);
      setCurrentWeather(current);
      setAirQuality(air.list[0].main.aqi);
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchedCity) fetchWeatherByCity(searchedCity);
  }, [searchedCity]);

  return (
    <main
      style={{
        flex: 1,
        background: "var(--bg-panel)",
        borderRadius: "20px",
        padding: "32px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        overflowX: "hidden",
        justifyContent: hasSearched ? "flex-start" : "center",
        alignItems: hasSearched ? "stretch" : "center"
      }}
    >
      {!hasSearched && (
        <div
          style={{
            background: "#3a4a5f",
            padding: "28px",
            borderRadius: "16px",
            width: "340px",
            maxWidth: "90%"
          }}
        >
          <h3 style={{ marginBottom: "14px" }}>Enter a location:</h3>

          <label
            htmlFor="city-search"
            style={{
              fontSize: "14px",
              marginBottom: "6px",
              display: "block",
              color: "var(--text-secondary)"
            }}
          >
            Search city
          </label>

          <input
            id="city-search"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch(city)}
            placeholder="Type a city..."
            aria-label="Search city weather"
            autoComplete="off"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "2px solid var(--accent-blue)",
              marginBottom: "14px",
              background: "var(--input-bg)",
              color: "var(--input-text)"
            }}
          />



          <button
            onClick={() => onSearch(city)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "999px",
              border: "none",
              background: "var(--accent-blue)",
              color: "#fff",
              fontWeight: "600"
            }}
          >
            Search
          </button>
        </div>
      )}

      {hasSearched && (
        <>
          <ForecastHeader
            unit={unit}
            setUnit={setUnit}
            theme={theme}
            setTheme={setTheme}
          />

          {isLoading ? (
            <ForecastSkeleton />
          ) : (
            <ForecastList data={forecastData} unit={unit} />
          )}

          <DailyForecastList data={dailyForecast} unit={unit} />

          {isLoading ? (
            <CurrentWeatherSkeleton />
          ) : (
            <CurrentWeatherGrid
              data={currentWeather}
              aqi={airQuality}
              unit={unit}
            />
          )}
        </>
      )}
    </main>
  );
}

export default DashboardLayout;
