"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add your authentication logic here
    // For now, it just redirects to dashboard
    router.push("/admin/dashboard");
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
