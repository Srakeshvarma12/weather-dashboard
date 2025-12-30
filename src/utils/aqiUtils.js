export function getAqiMeta(aqi) {
  switch (aqi) {
    case 1:
      return { label: "Good", color: "#22c55e" };
    case 2:
      return { label: "Fair", color: "#eab308" };
    case 3:
      return { label: "Moderate", color: "#f97316" };
    case 4:
      return { label: "Poor", color: "#ef4444" };
    case 5:
      return { label: "Very Poor", color: "#a855f7" };
    default:
      return { label: "Unknown", color: "#94a3b8" };
  }
}
