const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function fetchCurrentWeather(city) {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  return res.json();
}

export async function fetchForecast(city) {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Forecast not available");
  }

  return res.json();
}

/* 🔴 ADD THIS BELOW — DO NOT PUT IT IN A NEW FILE */
export async function fetchAirQuality(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Air quality data not available");
  }

  return res.json();
}
