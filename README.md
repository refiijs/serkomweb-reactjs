# Beasiswa Web Application

## Deskripsi

Aplikasi web ini dirancang untuk mengelola dan memfasilitasi pendaftaran beasiswa, menampilkan grafik statistik, serta memberikan informasi terkait syarat dan ketentuan beasiswa. Aplikasi dibangun menggunakan **React** dan menggunakan **Firebase** sebagai backend untuk menyimpan data pendaftaran beasiswa.

## Struktur Proyek

Berikut adalah struktur folder dari proyek ini:

```
src/
├── assets/
│   └── img/                       # Folder untuk menyimpan gambar yang digunakan dalam aplikasi
├── components/
│   ├── card-beasiswa/
│   │   ├── card-beasiswa.css       # Styling untuk komponen kartu beasiswa
│   │   └── card-beasiswa.jsx       # Komponen kartu beasiswa
│   ├── footer/
│   │   ├── footer.css              # Styling untuk komponen footer
│   │   └── footer.jsx              # Komponen footer
│   ├── grafik/
│   │   ├── grafik.css              # Styling untuk grafik
│   │   └── grafik.jsx              # Komponen untuk menampilkan grafik
│   ├── hero-section/
│   │   ├── hero-section.css        # Styling untuk hero section
│   │   └── hero-section.jsx        # Komponen hero section
│   ├── navbar/
│   │   ├── navbar.css              # Styling untuk navbar
│   │   └── navbar.jsx              # Komponen navbar
├── config/
│   └── firebaseconfig.js           # Konfigurasi Firebase
├── pages/
│   ├── daftar-beasiswa/
│   │   ├── form-daftar.css         # Styling untuk formulir pendaftaran beasiswa
│   │   └── form-daftar.jsx         # Formulir pendaftaran beasiswa
│   ├── dashboard/
│   │   └── beasiswa.jsx            # Halaman dashboard untuk melihat informasi beasiswa
│   ├── syarat-ketentuan/
│   │   ├── syarat-ketentuan.css    # Styling untuk halaman syarat dan ketentuan beasiswa
│   │   └── syarat-ketentuan.jsx    # Halaman syarat dan ketentuan
│   ├── hasil-daftar/
│   │   ├── hasil-daftar.css        # Styling untuk hasil pendaftaran
│   │   └── hasil-daftar.jsx        # Halaman hasil pendaftaran
│   ├── hasil-grafik/
│   │   ├── hasil-grafik.css        # Styling untuk grafik hasil
│   │   └── hasil-grafik.jsx        # Halaman yang menampilkan grafik hasil
```

## Instalasi

1. Clone repository ini.
   git clone https://github.com/username/beasiswa-web.git

2. Instal dependencies.
   npm install

3. Konfigurasi Firebase:
   Masukkan konfigurasi Firebase di file `src/config/firebaseconfig.js`.

4. Jalankan aplikasi.
   npm start

## Fitur

- **Form Pendaftaran Beasiswa**: Pengguna dapat mendaftar beasiswa melalui halaman formulir.
- **Dashboard Beasiswa**: Menampilkan informasi terkait beasiswa yang tersedia.
- **Grafik Statistik**: Menampilkan data statistik terkait beasiswa dalam bentuk grafik.
- **Halaman Syarat dan Ketentuan**: Informasi terkait syarat dan ketentuan pendaftaran beasiswa.

## Dependencies

- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **Firebase**: Backend sebagai layanan untuk autentikasi dan penyimpanan data.
- **React Bootstrap**: Untuk komponen UI yang responsif.
- **React Router**: Untuk navigasi di dalam aplikasi.
- **Chart.js**: Untuk menampilkan grafik statistik.

## Kontributor

- [Refi Junitasari](https://github.com/refiijs)

## Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Silakan lihat file `LICENSE` untuk informasi lebih lanjut.

---

Jika ada perubahan atau tambahan fitur di masa depan, README ini bisa diperbarui untuk mencerminkan modifikasi terbaru.
