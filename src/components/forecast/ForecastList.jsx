import ForecastCard from "./ForecastCard";

function ForecastList({ data, unit }) {
  if (!data || data.length === 0) return null;

  return (
    <section style={{ marginBottom: "32px" }}>
      <div
        className="forecast-scroll"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "16px"
        }}
      >
        {data.map((item) => {
          const date = new Date(item.dt * 1000);
          const time = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          });

          return (
            <ForecastCard
              key={item.dt}
              time={time}
              temp={item.main.temp}
              label={item.weather[0].description}
              unit={unit}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ForecastList;
