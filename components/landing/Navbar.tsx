import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <Link href="/" className="nav-logo">
        <i className="fa-solid fa-landmark"></i>
        ScenARy
      </Link>
      <div className="nav-links">
        <Link href="/auth/login" className="btn btn-outline">
          Institute Login
        </Link>
      </div>
    </nav>
  );
}
