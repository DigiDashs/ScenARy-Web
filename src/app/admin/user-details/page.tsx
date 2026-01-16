"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserDetails() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"info" | "stats">("info");
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("************");

  const handleLogout = () => {
    router.push("/admin/login");
  };

  const handleBack = () => {
    router.push("/admin/user-management");
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ marginBottom: "3rem", padding: "0 1rem" }}>
          <h3 style={{ color: "var(--color-text-light)" }}>Admin Panel</h3>
        </div>
        <nav>
          <a href="/admin/dashboard" className="nav-item">
            <i className="fa-solid fa-chart-pie"></i> Dashboard
          </a>
          <a href="/admin/content-management" className="nav-item">
            <i className="fa-solid fa-layer-group"></i> Content Management
          </a>
          <a href="/admin/user-management" className="nav-item active">
            <i className="fa-solid fa-users"></i> User Management
          </a>
        </nav>
        <div style={{ marginTop: "auto" }}>
          <a
            className="nav-item"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="admin-header">
          <span>ScenARy</span>
          <i
            className="fa-solid fa-arrow-right-from-bracket"
            style={{ cursor: "pointer" }}
            onClick={handleLogout}
          ></i>
        </div>

        <div className="sub-header">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              onClick={handleBack}
              style={{ color: "var(--color-accent-gold)", cursor: "pointer" }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </a>
            <span>User Management</span>
          </div>
        </div>

        <div className="tab-buttons">
          <button
            className={`tab-btn ${
              activeTab === "info" ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab("info")}
          >
            Basic Information
          </button>
          <button
            className={`tab-btn ${
              activeTab === "stats" ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab("stats")}
          >
            Statistics
          </button>
        </div>

        {/* VIEW: BASIC INFO */}
        {activeTab === "info" && (
          <div className="details-grid">
            <div className="profile-image-placeholder">
              <i className="fa-regular fa-image"></i>
            </div>
            <div className="user-form">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* VIEW: STATISTICS */}
        {activeTab === "stats" && (
          <div className="stats-grid">
            <div className="stat-box">
              <h4>Achievements unlocked</h4>
              <ul className="stat-list">
                <li>Welcome!</li>
                <li>Academician</li>
                <li>Explorer</li>
              </ul>
            </div>
            <div className="stat-box">
              <h4>Sites viewed</h4>
              <ul className="stat-list">
                <li>Fort San Pedro</li>
                <li>Magellan&apos;s Cross</li>
              </ul>
            </div>
            <div className="stat-box">
              <h4>Quizzes Answered</h4>
              <ul className="stat-list">
                <li>Fort San Pedro</li>
                <li>Magellan&apos;s Cross</li>
              </ul>
            </div>
            <div className="stat-box">
              <h4>Favorite Sites</h4>
              <ul className="stat-list">
                <li>Fort San Pedro</li>
                <li>Magellan&apos;s Cross</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
