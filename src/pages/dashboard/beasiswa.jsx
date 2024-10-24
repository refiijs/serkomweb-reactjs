import React, { useState } from "react";
import HeroSection from "../../components/hero-section/hero-section"; // Import Hero Section
import CardBeasiswa from "../../components/card-beasiswa/card-beasiswa"; // Import Card Beasiswa
import SyaratPage from "./syarat-ketentuan";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../../assets/img/akademik.png";
import img2 from "../../assets/img/kip-k.png";
import img3 from "../../assets/img/ormawa.png";
import img4 from "../../assets/img/non-akademik.png";
import img5 from "../../assets/img/raport.png";
import img6 from "../../assets/img/bumn.png";

const BeasiswaPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Section for Card Options */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Pilih Program Beasiswa</h2>
        <div className="row">
          {/* Example of 6 Card Components for Beasiswa */}
          <div className="col-md-4 mb-4">
            <CardBeasiswa
              title="Beasiswa Akademik"
              description="Beasiswa ini untuk mahasiswa berprestasi di bidang akademik"
              imgSrc={img1}
            />
          </div>
          <div className="col-md-4 mb-4">
            <CardBeasiswa
              title="Beasiswa KIP-Kuliah"
              description="Beasiswa untuk mahasiswa dari keluarga kurang mampu."
              imgSrc={img2}
            />
          </div>
          <div className="col-md-4 mb-4">
            <CardBeasiswa
              title="Beasiswa ORMAWA"
              description="Beasiswa untuk mahasiswa aktif dalam ORMAWA kampus."
              imgSrc={img3}
            />
          </div>

          <div className="col-md-4 mb-4">
            <CardBeasiswa
              title="Beasiswa Jalur Raport"
              description="Beasiswa untuk mahasiswa program sarjana hanya dengan nilai raport."
              imgSrc={img5}
            />
          </div>
          <div className="col-md-4 mb-4">
            <CardBeasiswa
              title="Beasiswa Non Akademik"
              description="Beasiswa bagi mahasiswa yang berprestasi di bidang non-akademik."
              imgSrc={img4}
            />
          </div>
          <div className="col-md-4 mb-4">
            <CardBeasiswa
              title="Beasiswa BUMN"
              description="Beasiswa BUMN dimiliki oleh aliansi perguruan tinggi yang ada di bawah naungan BUMN."
              imgSrc={img6}
            />
          </div>
        </div>
      </div>
      <SyaratPage />
    </div>
  );
};

export default BeasiswaPage;
