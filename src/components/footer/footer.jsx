import React from "react";
import "./footer.css"; // File CSS terpisah
import img from "../../assets/img/Logo-utama.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container-fluid py-5">
        <div className="row">
          {/* Alamat Section */}
          <div className="col-md-3">
            <img src={img} alt="Telkom University" className="logo" />
            <h5>Alamat</h5>
            <p>
              Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kidul, Kec.
              Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53147
            </p>
          </div>

          {/* FAQ Section */}
          <div className="col-md-3">
            <h5>FAQ</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Beasiswa</a>
              </li>
              <li>
                <a href="/persyaratan-pendaftaran">Persyaratan Pendaftaran</a>
              </li>
              <li>
                <a href="/hasil">Hasil</a>
              </li>
              <li>
                <a href="/daftar-smb">Registrasi</a>
              </li>
            </ul>
          </div>

          {/* Kontak Section */}
          <div className="col-md-3">
            <h5 className="text-primary">Ada Pertanyaan?</h5>
            <p>Hubungi kami sekarang, jika ada pertanyaan lebih lanjut.</p>
            <button className="btn btn-danger">Kontak Kami</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
