import { Link } from 'react'

export default function AdminLayout( {children}) {
  return (
    <div>
      <header>
        <h1>Admin Panel</h1>
        <nav>
            <Link to="/admin">Dashboard</Link>
            <Link to="/">Main Site</Link>
        </nav>
      </header>

      <main>{children}</main>
      <footer>Footer Admin Panel</footer>
    </div>
  )
}

// AdminLayout mirip dengan MainLayout, namun dengan navigasi dan struktur yang sesuai untuk halaman admin.

// footernya isi apa?