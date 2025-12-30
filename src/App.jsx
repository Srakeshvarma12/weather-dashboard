import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // 🔥 APPLY THEME TO BODY (THIS WAS MISSING)
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Dashboard theme={theme} setTheme={setTheme} />
  );
}

export default App;
