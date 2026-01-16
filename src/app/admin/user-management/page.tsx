"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserManagement() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"users" | "institutions">("users");

  const handleLogout = () => {
    router.push("/admin/login");
  };

  const handleDelete = (name: string) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      console.log(`Deleting ${name}`);
    }
  };

  const users = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      role: "User",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@museum.org",
      role: "Institute",
    },
  ];

  const institutions = [
    {
      name: "The Augustinian Province",
      email: "contact@augustinian.org",
      location: "Cebu City",
      status: "Active",
    },
    {
      name: "Ramon Aboitiz Foundation",
      email: "info@rafmuseum.org",
      location: "Cebu City",
      status: "Active",
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredInstitutions = institutions.filter(
    (inst) =>
      inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inst.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <a href="/admin/content-management" className="nav-item">
            <i className="fa-solid fa-layer-group"></i> Content Management
          </a>
          <a href="/admin/user-management" className="nav-item active">
            <i className="fa-solid fa-users"></i> User Management
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="admin-header">
          <h2>User Management</h2>
        </div>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <button
            className={`tab-btn ${activeTab === "users" ? "active" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            MANAGE USER
          </button>
          <button
            className={`tab-btn ${
              activeTab === "institutions" ? "active" : ""
            }`}
            onClick={() => setActiveTab("institutions")}
          >
            MANAGE INSTITUTION
          </button>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <input
            type="text"
            placeholder={
              activeTab === "users"
                ? "Search users..."
                : "Search institutions..."
            }
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="admin-table-container">
          {activeTab === "users" ? (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <button
                        className="btn-table-action"
                        onClick={() => router.push("/admin/user-details")}
                      >
                        View
                      </button>
                      <button
                        className="btn-table-action"
                        onClick={() =>
                          handleDelete(`${user.firstName} ${user.lastName}`)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Institution Name</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredInstitutions.map((inst, index) => (
                  <tr key={index}>
                    <td>{inst.name}</td>
                    <td>{inst.email}</td>
                    <td>{inst.location}</td>
                    <td>{inst.status}</td>
                    <td>
                      <button
                        className="btn-table-action"
                        onClick={() =>
                          router.push("/admin/institution-details")
                        }
                      >
                        View
                      </button>
                      <button
                        className="btn-table-action"
                        onClick={() => handleDelete(inst.name)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
