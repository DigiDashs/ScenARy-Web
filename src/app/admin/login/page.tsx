"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // Add your authentication logic here
    // Example: Check credentials
    const validEmail = "admin@scenary.com";
    const validPassword = "admin123";

    if (email === validEmail && password === validPassword) {
      // Success - redirect to dashboard
      router.push("/admin/dashboard");
    } else {
      // Show error message
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-view glass-card active">
          <div className="logo-area">
            <div className="logo-icon">
              <i className="fa-solid fa-user-shield"></i>
            </div>
            <h3>Admin Login</h3>
            <p>ScenARy Administration Portal</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Error Message */}
            {error && (
              <div
                style={{
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  borderRadius: "6px",
                  padding: "0.75rem 1rem",
                  marginBottom: "1.5rem",
                  color: "#ef4444",
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <i className="fa-solid fa-circle-exclamation"></i>
                <span>{error}</span>
              </div>
            )}

            <div className="form-group">
              <label>ADMIN EMAIL</label>
              <input
                type="email"
                className="form-control"
                placeholder="admin@scenary.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>PASSWORD</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{
                width: "100%",
                marginTop: "2rem",
              }}
            >
              LOGIN
            </button>

            <div className="auth-footer">
              <Link href="/institute/login">Back to Institute Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
