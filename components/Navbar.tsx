import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* BRAND */}
        <Link href="/" className="brand">
          <img
            src="/images/logo.png"
            alt="Novoz Infinity Logo"
            className="logo-img"
          />
          <span className="brand-text">Novoz Infinity</span>
        </Link>

        {/* NAV LINKS */}
        <nav className="nav-links">
          <Link href="/" className="nav-link active">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

      </div>
    </header>
  );
}
