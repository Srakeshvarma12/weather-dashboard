import { convertTemp } from "../../utils/temperature";

function DailyForecastCard({ date, min, max, label, unit, isToday }) {
    const day = new Date(date).toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short"
    });

    return (
        <div
            style={{
                background: isToday ? "#1b2a44" : "#111b2e",
                borderRadius: "16px",
                padding: "18px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                alignItems: "center",
                minWidth: "140px",
                boxShadow: isToday
                    ? "0 12px 30px rgba(59,130,246,0.45)"
                    : "0 8px 20px rgba(0,0,0,0.35)",
                border: isToday ? "1px solid #3b82f6" : "none",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                scrollSnapAlign: "start"
            }}

            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(0,0,0,0.45)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.35)";
            }}
        >

            <span style={{ fontSize: "14px", fontWeight: 600 }}>
                {day}
            </span>

            <div style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                {label}
            </div>

            <div style={{ display: "flex", gap: "10px", fontSize: "15px" }}>
                <span>
                    🔴 {convertTemp(max, unit)}°
                    {unit === "metric" ? "C" : "F"}
                </span>
                <span>
                    🔵 {convertTemp(min, unit)}°
                    {unit === "metric" ? "C" : "F"}
                </span>
            </div>
        </div>
    );
}

export default DailyForecastCard;
