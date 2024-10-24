import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./form-daftar.css";
import { db, collection, addDoc, storage } from "../../config/firebaseconfig"; // Pastikan storage juga di-import
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const BeasiswaForm = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [semester, setSemester] = useState("");
  const [ipk, setIpk] = useState("");
  const [beasiswa, setBeasiswa] = useState("");
  const [file, setFile] = useState(null);
  const [statusAjuan, setStatusAjuan] = useState("Belum di verifikasi");
  const [uploadProgress, setUploadProgress] = useState(0); // Untuk melacak progres upload

  // Handle perubahan semester untuk otomatis mengatur IPK
  const handleSemesterChange = (e) => {
    const selectedSemester = e.target.value;
    setSemester(selectedSemester);

    // Set IPK berdasarkan semester yang dipilih
    if (selectedSemester >= 1 && selectedSemester <= 4) {
      setIpk(2.9); // IPK untuk semester 1-4
    } else if (selectedSemester >= 5 && selectedSemester <= 8) {
      setIpk(3.8); // IPK untuk semester 5-8
    } else {
      setIpk(""); // Reset IPK jika tidak ada semester yang dipilih
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (ipk >= 3 && file) {
      const storageRef = ref(storage, `beasiswaFiles/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Monitor progress upload
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("Error uploading file:", error);
        },
        async () => {
          // Setelah file diunggah, dapatkan URL-nya dan simpan ke Firestore
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          try {
            await addDoc(collection(db, "beasiswa"), {
              nama,
              email,
              hp,
              semester,
              ipk,
              beasiswa,
              fileName: file.name, // Simpan nama file
              fileURL: downloadURL, // URL file yang diunggah
              statusAjuan,
            });
            setStatusAjuan("Data berhasil disimpan!");
          } catch (error) {
            console.error("Error saving data:", error);
            setStatusAjuan("Gagal menyimpan data.");
          }
        }
      );
    } else {
      setStatusAjuan("IPK kurang dari 3 atau file tidak tersedia.");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="form-container">
      <h2>Formulir Registrasi Beasiswa</h2>

      <Form.Group className="mb-3 form-group">
        <Form.Label className="form-label">Masukkan Nama</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nama Lengkap Kamu"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group className="mb-3 form-group">
        <Form.Label className="form-label">Masukkan Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="xxxxx@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group className="mb-3 form-group">
        <Form.Label className="form-label">Nomor HP</Form.Label>
        <Form.Control
          type="number"
          placeholder="08xxxxxxxxxx"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          required
          className="form-control"
        />
      </Form.Group>

      <Form.Group className="mb-3 form-group">
        <Form.Label className="form-label">Semester Saat Ini</Form.Label>
        <Form.Select
          value={semester}
          onChange={handleSemesterChange} // Menangani perubahan semester
          required
          className="form-select"
        >
          <option value="">Pilih Semester</option>
          {[...Array(8).keys()].map((i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 form-group">
        <Form.Label className="form-label">IPK Terakhir</Form.Label>
        <Form.Control
          type="text"
          value={ipk}
          placeholder="IPK Kamu"
          readOnly
          className="form-control"
        />
      </Form.Group>

      {/* Field tetap terlihat tetapi dinonaktifkan jika IPK < 3 */}
      <Form.Group className="mb-3 form-group">
        <Form.Label className="form-label">Pilihan Beasiswa</Form.Label>
        <Form.Select
          value={beasiswa}
          onChange={(e) => setBeasiswa(e.target.value)}
          className="form-select"
          disabled={ipk < 3} // Disabled jika IPK < 3
        >
          <option value="">Pilih Beasiswa</option>
          <option value="Akademik">Beasiswa Akademik</option>
          <option value="KIP-Kuliah">Beasiswa KIP-Kuliah</option>
          <option value="ORMAWA">Beasiswa ORMAWA</option>
          <option value="Non Akademik">Beasiswa Non Akademik</option>
          <option value="Raport">Beasiswa Jalur Raport</option>
          <option value="BUMN">Beasiswa BUMN</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3 form-group">
        <Form.Label className="form-label">Upload Berkas Syarat</Form.Label>
        <Form.Control
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="form-control"
          disabled={ipk < 3} // Disabled jika IPK < 3
        />
      </Form.Group>

      {uploadProgress > 0 && (
        <div>Progress pengunggahan: {Math.round(uploadProgress)}%</div>
      )}

      <div className="button-group">
        <Button variant="primary" type="submit" disabled={ipk < 3}>
          Daftar
        </Button>
        <Button variant="secondary" type="button" className="ms-3">
          Batal
        </Button>
      </div>

      {statusAjuan && <p className="status-message">{statusAjuan}</p>}
    </Form>
  );
};

export default BeasiswaForm;
