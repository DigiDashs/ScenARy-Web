"use client";

import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // Add your logout logic here
    router.push("/admin/login");
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ marginBottom: "3rem", paddingLeft: "0.5rem" }}>
          <div
            style={{
              background: "#C19A4B",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <i
              className="fa-solid fa-user-shield"
              style={{ color: "#000" }}
            ></i>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h3 style={{ fontSize: "1.2rem" }}>Admin</h3>
            <i
              className="fa-solid fa-arrow-right-from-bracket"
              style={{ fontSize: "0.8rem", color: "#666", cursor: "pointer" }}
              onClick={handleLogout}
            ></i>
          </div>
        </div>
        <nav>
          <a href="/admin/dashboard" className="nav-item active">
            <i className="fa-solid fa-chart-pie"></i> Dashboard
          </a>
          <a href="/admin/content-management" className="nav-item">
            <i className="fa-solid fa-layer-group"></i> Content Management
          </a>
          <a href="/admin/user-management" className="nav-item">
            <i className="fa-solid fa-users"></i> User Management
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="admin-header">
          <h2>Admin Dashboard</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#C19A4B",
            }}
          >
            <i className="fa-solid fa-landmark"></i>
            <span style={{ fontWeight: "700", letterSpacing: "1px" }}>
              ScenARy
            </span>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="stat-info">
              <h3>Total Users</h3>
              <div className="value">1000</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="stat-info">
              <h3>Active Sites</h3>
              <div className="value">5</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="stat-info">
              <h3>Interactions</h3>
              <div className="value">21,230</div>
            </div>
          </div>
        </div>

        <div className="recent-history-container">
          <h3 className="history-title">Recent History</h3>

          <div className="history-item">
            <div className="history-icon-small">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="history-content">
              <h4
                style={{
                  color: "#fff",
                  fontSize: "0.95rem",
                  marginBottom: "0.2rem",
                }}
              >
                New User: Joseph Rodrigo
              </h4>
              <p style={{ color: "#888", fontSize: "0.8rem" }}>
                21 minutes ago
              </p>
            </div>
          </div>

          <div className="history-item">
            <div className="history-icon-small">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div className="history-content">
              <h4
                style={{
                  color: "#fff",
                  fontSize: "0.95rem",
                  marginBottom: "0.2rem",
                }}
              >
                New Site: Magellan&apos;s Cross
              </h4>
              <p style={{ color: "#888", fontSize: "0.8rem" }}>2 hours ago</p>
            </div>
          </div>

          <div className="history-item">
            <div className="history-icon-small">
              <i className="fa-solid fa-pen-to-square"></i>
            </div>
            <div className="history-content">
              <h4
                style={{
                  color: "#fff",
                  fontSize: "0.95rem",
                  marginBottom: "0.2rem",
                }}
              >
                Content Update: Fort San Pedro
              </h4>
              <p style={{ color: "#888", fontSize: "0.8rem" }}>5 hours ago</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
