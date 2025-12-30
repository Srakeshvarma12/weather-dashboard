import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import DashboardLayout from "../components/layout/DashboardLayout";

function Dashboard({ theme, setTheme }) {
  const [searchedCity, setSearchedCity] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleCitySearch = (city) => {
    if (!city || !city.trim()) return;
    setSearchedCity(city);
    setHasSearched(true);
  };

  return (
    <div className="dashboard-container" role="main"
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        padding: "16px",
        gap: "16px",
        background: "var(--bg-main)"
      }}
    >
      {hasSearched && (
        <Sidebar onSearch={handleCitySearch} />
      )}

      <DashboardLayout
        searchedCity={searchedCity}
        hasSearched={hasSearched}
        onSearch={handleCitySearch}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default Dashboard;
