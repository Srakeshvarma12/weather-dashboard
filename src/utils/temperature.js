export function convertTemp(temp, unit) {
  if (temp == null) return "--";

  return unit === "metric"
    ? Math.round(temp)
    : Math.round((temp * 9) / 5 + 32);
}
