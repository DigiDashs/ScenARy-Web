import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container footer-content">
        <div className="footer-info">
          <div
            className="logo"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              marginBottom: "1rem",
            }}
          >
            <i
              className="fa-solid fa-landmark"
              style={{ color: "var(--color-accent-gold)" }}
            ></i>{" "}
            ScenARy
          </div>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
              maxWidth: "300px",
            }}
          >
            An Augmented Reality replica model of historical sites. Contact us
            for more information.
          </p>
        </div>
        <div className="footer-links">
          <Link href="#">Collab</Link>
          <Link href="#">Create for Institute</Link>
          <Link href="/admin/login">Admin</Link>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 ScenARy, Inc. All rights reserved.
      </div>
    </footer>
  );
}
