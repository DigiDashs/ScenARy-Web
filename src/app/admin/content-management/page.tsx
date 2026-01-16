"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContentManagement() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    router.push("/admin/login");
  };

  const handleAddNewTour = () => {
    // Add logic to open modal or navigate to add tour page
    console.log("Add new tour clicked");
  };

  const handleDelete = (title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      // Add delete logic here
      console.log(`Deleting ${title}`);
    }
  };

  const tours = [
    {
      title: "Basilica Sto. Niño de Cebu",
      institute: "The Augustinian Province...",
      location: "Pilgrim's Center, Osmeña Blvd...",
    },
    {
      title: "Fort San Pedro",
      institute: "The Augustinian Province...",
      location: "A. Pigafetta Street, Pier Area...",
    },
    {
      title: "Magellan's Cross Pavilion",
      institute: "Archdiocese of Cebu",
      location: "P. Burgos Street, Imus...",
    },
    {
      title: "Casa Gorordo Museum",
      institute: "Ramon Aboitiz Foundation...",
      location: "35 Lopez Jaena Street...",
    },
  ];

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
          <h2>Content Management</h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <input
            type="text"
            placeholder="Search content..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginBottom: 0 }}
          />
          <button
            className="btn-primary"
            onClick={handleAddNewTour}
            style={{
              backgroundColor: "var(--color-accent-gold)",
              color: "#000",
              fontWeight: "700",
            }}
          >
            ADD NEW TOUR
          </button>
        </div>

        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Institute</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tours
                .filter(
                  (tour) =>
                    tour.title
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                    tour.institute
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                    tour.location
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                )
                .map((tour, index) => (
                  <tr key={index}>
                    <td>{tour.title}</td>
                    <td>{tour.institute}</td>
                    <td>{tour.location}</td>
                    <td>
                      <button
                        className="btn-table-action"
                        onClick={() => router.push("/admin/content-details")}
                      >
                        View
                      </button>
                      <button
                        className="btn-table-action"
                        onClick={() => router.push("/admin/content-analytics")}
                      >
                        Metrics
                      </button>
                      <button
                        className="btn-table-action"
                        onClick={() => handleDelete(tour.title)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
