import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

function Sidebar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        if (!city.trim()) return;
        onSearch(city);
        setCity("");
    };

    return (
        <aside
            style={{
                width: "280px",
                maxWidth: "280px",
                background: "var(--bg-panel)",
                borderRadius: "20px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
            }}
        >
            {/* 🔍 Search Input */}
            <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for places..."
                style={{
                    padding: "14px 16px",
                    borderRadius: "999px",
                    border: "1px solid var(--border-subtle)",
                    background: "var(--input-bg)",          // ✅ theme aware
                    color: "var(--input-text)",              // ✅ visible text
                    fontSize: "14px",
                    outline: "none"
                }}
            />


            {/* 🔎 Search Button */}
            <button
                onClick={handleSearch}
                style={{
                    padding: "12px",
                    borderRadius: "999px",
                    border: "none",
                    background: "var(--accent-blue)",
                    color: "#fff",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "opacity 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
                Search
            </button>

            {/* ⬇️ Spacer */}
            <div style={{ flexGrow: 1 }} />

            {/* 🔗 Footer */}
            <div
                style={{
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }}
            >
                <span
                    style={{
                        fontSize: "12px",
                        color: "var(--text-secondary)"
                    }}
                >
                    Connect with me on:
                </span>

                <a
                    href="https://www.linkedin.com/in/sangaraju-rakesh-varma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "#1c2a44",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#0a66c2",
                        textDecoration: "none",
                        transition: "transform 0.2s ease, background 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.background = "#23345c";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.background = "#1c2a44";
                    }}
                >
                    <FaLinkedinIn size={18} />
                </a>
            </div>
        </aside>
    );
}

export default Sidebar;
