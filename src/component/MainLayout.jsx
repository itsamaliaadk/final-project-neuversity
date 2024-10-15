import { Link } from "react";

export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        <h1>Main Header</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      <main>{children}</main>
      <footer>Footer Main Website</footer>
    </div>
  );
}

// MainLayout berisi struktur umum seperti header, navigasi, dan footer yang akan digunakan di halaman utama. 
// {children} adalah tempat konten halaman akan muncul.

// kenapa namanya children