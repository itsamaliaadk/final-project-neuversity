import Footer from "./blocks/Footer";
import Navbar from "./blocks/Navbar";

// Mendefinisikan fungsi komponen utama bernama MainLayout yang menerima properti 'children' sebagai argumen
export default function MainLayout({ children }) {
  // Mengembalikan JSX untuk merender layout utama yang mencakup Navbar, main, dan Footer
  return (
    <div>
      <Navbar /> {/* Merender komponen Navbar di bagian atas halaman */}
      <main>{children}</main>{" "}
      {/* Menampilkan konten anak di dalam elemen <main> untuk konten utama */}
      <Footer /> {/* Merender komponen Footer di bagian bawah halaman */}
    </div>
  );
}

// {children} adalah properti khusus yang digunakan untuk mengakses elemen yang diletakkan di antara tag komponen saat komponen tersebut dirender.
