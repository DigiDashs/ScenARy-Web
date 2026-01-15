import Link from "next/link";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-content animate-fade-in">
        <h1>
          Bringing History to Life <br />
          <span>Together</span>
        </h1>
        <p>
          Experience the past like never before with our augmented reality
          platform. Build, explore, and learn from historical sites in immersive
          detail.
        </p>
        <Link href="/auth/login" className="btn btn-primary">
          Start Building
        </Link>
      </div>
    </header>
  );
}
