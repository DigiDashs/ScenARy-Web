"use client";

import { useRouter } from "next/navigation";

export default function ContentDetails() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/admin/login");
  };

  const handleBack = () => {
    router.push("/admin/content-management");
  };

  const handleEditTour = () => {
    // Add edit tour logic or navigate to edit page
    console.log("Edit tour clicked");
  };

  const handleQuiz = () => {
    // Navigate to quiz management
    console.log("Quiz clicked");
  };

  const handleHistory = () => {
    // Navigate to history management
    console.log("History clicked");
  };

  const handleFacts = () => {
    // Navigate to facts management
    console.log("Facts clicked");
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
          <a href="/admin/dashboard" className="nav-item">
            <i className="fa-solid fa-chart-pie"></i> Dashboard
          </a>
          <a href="/admin/content-management" className="nav-item active">
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
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              onClick={handleBack}
              style={{
                color: "var(--color-accent-gold)",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </a>
            <h2>Tour Details</h2>
          </div>
        </div>

        <div
          className="glass-card"
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "2rem",
          }}
        >
          {/* Left Column: Image & Actions */}
          <div>
            <div
              style={{
                width: "100%",
                height: "200px",
                background: "#222",
                borderRadius: "8px",
                border: "1px solid var(--color-glass-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
              }}
            >
              <i
                className="fa-regular fa-image"
                style={{ fontSize: "3rem", color: "#666" }}
              ></i>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              <button
                className="btn-gold"
                onClick={handleEditTour}
                style={{ width: "100%", textAlign: "center" }}
              >
                <i
                  className="fa-solid fa-pen"
                  style={{ marginRight: "0.5rem" }}
                ></i>{" "}
                Edit Tour
              </button>
              <button
                className="btn-outline"
                onClick={handleQuiz}
                style={{ width: "100%", textAlign: "center" }}
              >
                <i
                  className="fa-solid fa-clipboard-question"
                  style={{ marginRight: "0.5rem" }}
                ></i>{" "}
                Quiz
              </button>
              <button
                className="btn-outline"
                onClick={handleHistory}
                style={{ width: "100%", textAlign: "center" }}
              >
                <i
                  className="fa-solid fa-landmark"
                  style={{ marginRight: "0.5rem" }}
                ></i>{" "}
                History
              </button>
              <button
                className="btn-outline"
                onClick={handleFacts}
                style={{ width: "100%", textAlign: "center" }}
              >
                <i
                  className="fa-regular fa-lightbulb"
                  style={{ marginRight: "0.5rem" }}
                ></i>{" "}
                Facts
              </button>
            </div>
          </div>

          {/* Right Column: Info */}
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <label
                  style={{
                    color: "#888",
                    fontSize: "0.8rem",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  Title
                </label>
                <div style={{ color: "#fff", fontWeight: "600" }}>
                  Basilica Sto. Niño de Cebu
                </div>
              </div>
              <div>
                <label
                  style={{
                    color: "#888",
                    fontSize: "0.8rem",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  Location
                </label>
                <div style={{ color: "#fff", fontWeight: "600" }}>
                  Pilgrim&apos;s Center, Osmeña Blvd, Cebu City
                </div>
              </div>
              <div>
                <label
                  style={{
                    color: "#888",
                    fontSize: "0.8rem",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  Institute
                </label>
                <div style={{ color: "#fff", fontWeight: "600" }}>
                  The Augustinian Province of Sto. Niño
                </div>
              </div>
              <div>
                <label
                  style={{
                    color: "#888",
                    fontSize: "0.8rem",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  Status
                </label>
                <div style={{ color: "#4ade80", fontWeight: "600" }}>
                  <i className="fa-solid fa-check"></i> Published
                </div>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  color: "#888",
                  fontSize: "0.8rem",
                  display: "block",
                  marginBottom: "0.3rem",
                }}
              >
                Description
              </label>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "1rem",
                  borderRadius: "8px",
                  color: "#ccc",
                  lineHeight: "1.6",
                  fontSize: "0.95rem",
                }}
              >
                The Basilica Sto. Niño de Cebu Virtual Tour offers an
                interactive 3D experience of Cebu&apos;s oldest church. Explore
                its sacred halls, museum artifacts, and historic chapels while
                learning about the miraculous Sto. Niño image and the
                site&apos;s deep cultural significance.
              </div>
            </div>

            <div>
              <label
                style={{
                  color: "#888",
                  fontSize: "0.8rem",
                  display: "block",
                  marginBottom: "0.3rem",
                }}
              >
                Asset
              </label>
              <div
                style={{
                  background: "rgba(230, 184, 0, 0.1)",
                  padding: "0.8rem",
                  borderRadius: "8px",
                  color: "var(--color-accent-gold)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1px solid rgba(230, 184, 0, 0.3)",
                }}
              >
                <i className="fa-solid fa-paperclip"></i>{" "}
                basilica_sto_nino_model.glb
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
