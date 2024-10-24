import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./syarat-ketentuan.css";

const SyaratPage = () => {
  const [openCardIndex, setOpenCardIndex] = useState(null);

  const toggleCard = (index) => {
    if (openCardIndex === index) {
      setOpenCardIndex(null); // Close the card if it's already open
    } else {
      setOpenCardIndex(index); // Open the clicked card
    }
  };

  const scholarships = [
    {
      title: "Beasiswa Akademik",
      description:
        "Program beasiswa yang ditujukan untuk mahasiswa dengan prestasi akademik tinggi yang membutuhkan dukungan finansial untuk melanjutkan pendidikan.",
      criteria: [
        "IPK minimal 3.5.",
        "Aktif dalam organisasi kampus.",
        "Melampirkan sertifikat prestasi akademik.",
        "Tidak sedang menerima beasiswa lain.",
      ],
    },
    {
      title: "Beasiswa KIP-Kuliah",
      description:
        "Beasiswa ini ditujukan untuk mahasiswa dari keluarga kurang mampu secara ekonomi, guna membantu biaya pendidikan dan mendukung studi mereka.",
      criteria: [
        "IPK minimal 3.0.",
        "Terdaftar sebagai penerima KIP.",
        "Melampirkan bukti pendapatan orang tua/wali.",
        "Menyertakan surat keterangan tidak mampu dari kelurahan.",
      ],
    },
    {
      title: "Beasiswa ORMAWA",
      description:
        "Beasiswa yang diberikan kepada mahasiswa aktif yang terlibat dalam organisasi kemahasiswaan (ORMAWA) dan menunjukkan dedikasi dalam kegiatan organisasi.",
      criteria: [
        "IPK minimal 3.0.",
        "Menyertakan surat rekomendasi dari ketua organisasi.",
        "Aktif dalam minimal satu kegiatan organisasi.",
        "Melampirkan sertifikat kegiatan organisasi.",
      ],
    },
    {
      title: "Beasiswa Non-Akademik",
      description:
        "Program beasiswa untuk mahasiswa yang menunjukkan prestasi luar biasa dalam bidang non-akademik, seperti seni, olahraga, atau kegiatan sosial.",
      criteria: [
        "Memiliki prestasi yang diakui di bidang non-akademik.",
        "Melampirkan sertifikat prestasi non-akademik.",
        "Menyediakan rekomendasi dari pelatih atau pembimbing.",
        "IPK minimal 2.5.",
      ],
    },
    {
      title: "Beasiswa Jalur Raport",
      description:
        "Beasiswa ini ditujukan untuk siswa yang memiliki prestasi baik di sekolah menengah berdasarkan nilai raport dan prestasi di bidang lainnya.",
      criteria: [
        "Rata-rata nilai raport minimal 80.",
        "Melampirkan fotokopi raport terakhir.",
        "Menyertakan surat rekomendasi dari guru.",
        "Aktif dalam kegiatan ekstrakurikuler.",
      ],
    },
    {
      title: "Beasiswa BUMN",
      description:
        "Beasiswa yang disediakan oleh Badan Usaha Milik Negara (BUMN) untuk mahasiswa yang memiliki potensi dan keinginan untuk berkontribusi dalam pembangunan bangsa.",
      criteria: [
        "IPK minimal 3.0.",
        "Mengikuti wawancara dan seleksi dari BUMN.",
        "Melampirkan CV dan surat motivasi.",
        "Terlibat dalam kegiatan sosial atau pengabdian masyarakat.",
      ],
    },
  ];

  return (
    <div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Syarat dan Ketentuan Umum</h2>
        <ul className="list-group">
          <li className="list-group-item">Mahasiswa aktif semester 1-8.</li>
          <li className="list-group-item">IPK minimal 3.0.</li>
          <li className="list-group-item">
            Terdaftar di program studi yang diakui.
          </li>
          <li className="list-group-item">
            Memiliki prestasi di bidang akademik atau non-akademik.
          </li>
        </ul>
      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-4">Syarat per Jenis Beasiswa</h2>
        <div className="row">
          {scholarships.map((scholarship, index) => (
            <div className="col-md-12 mb-4" key={index}>
              <div className="card border-danger">
                {/* Card Header */}
                <div
                  className="card-header d-flex justify-content-between align-items-center toggle-header"
                  onClick={() => toggleCard(index)}
                >
                  {scholarship.title}
                  <span>{openCardIndex === index ? "-" : "+"}</span>{" "}
                  {/* Tanda untuk buka-tutup */}
                </div>

                {/* Card Body */}
                {openCardIndex === index && (
                  <div className="card-body">
                    <p>{scholarship.description}</p>
                    <ul>
                      {scholarship.criteria.map((criterion, i) => (
                        <li key={i}>{criterion}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyaratPage;
