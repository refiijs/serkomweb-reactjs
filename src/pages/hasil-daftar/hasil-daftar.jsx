import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../config/firebaseconfig";
import { Table } from "react-bootstrap";
import "./hasil-daftar.css";

const ListBeasiswa = () => {
  const [dataBeasiswa, setDataBeasiswa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "beasiswa"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDataBeasiswa(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-container">
      <h2 className="table-title">Daftar Pengajuan Beasiswa</h2>
      {dataBeasiswa.length > 0 ? (
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Nomor HP</th>
              <th>Semester</th>
              <th>IPK</th>
              <th>Beasiswa</th>
              <th>Berkas</th>
              <th>Status Ajuan</th>
            </tr>
          </thead>
          <tbody>
            {dataBeasiswa.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.nama}</td>
                <td>{item.email}</td>
                <td>{item.hp}</td>
                <td>{item.semester}</td>
                <td>{item.ipk}</td>
                <td>{item.beasiswa}</td>
                <td>
                  {item.fileURL ? (
                    <a
                      href={item.fileURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf-icon"
                    >
                      <i className="bi bi-file-earmark-pdf-fill"></i>
                    </a>
                  ) : (
                    <span className="no-file">Tidak ada berkas</span>
                  )}
                </td>

                <td>{item.statusAjuan}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="no-data">Tidak ada data pengajuan beasiswa.</div>
      )}
    </div>
  );
};

export default ListBeasiswa;
