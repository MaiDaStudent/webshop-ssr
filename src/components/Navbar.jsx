import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 mb-5 shadow-sm">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand fw-bold">
          Skincare Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                href="/"
                className={`nav-link ${router.pathname === '/' ? 'active fw-semibold text-primary' : ''}`}
              >
                Webshop
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/cart"
                className={`nav-link ${router.pathname === '/cart' ? 'active fw-semibold text-primary' : ''}`}
              >
                Kurv 🛒
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
