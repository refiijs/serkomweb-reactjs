import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarTop from "./components/navbar/navbar";
import BeasiswaPage from "./pages/dashboard/beasiswa";
import Footer from "./components/footer/footer";
import BeasiswaForm from "./pages/daftar-beasiswa/form-daftar";
import HasilDaftar from "./pages/hasil-daftar/hasil-daftar";
import GrafikBeasiswa from "./pages/hasil-grafik/hasil-grafik";

function App() {
  return (
    <Router>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<BeasiswaPage />} />
        <Route path="/daftar-smb" element={<BeasiswaForm />} />
        <Route path="/hasil" element={<HasilDaftar />} />
        <Route path="/grafik" element={<GrafikBeasiswa />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
