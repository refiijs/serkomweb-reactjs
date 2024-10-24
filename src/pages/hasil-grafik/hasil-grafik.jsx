import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../config/firebaseconfig";
import GrafikBeasiswa from "../../components/grafik/grafik"; // Import the chart component
import "./hasil-grafik.css";

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
    <div className="container mt-5">
      {" "}
      {/* Bootstrap container with top margin */}
      <div className="chart-container">
        <h2 className="chart-title">Statistik Pengajuan Beasiswa</h2>
        {dataBeasiswa.length > 0 ? (
          // Render the GrafikBeasiswa component
          <GrafikBeasiswa dataBeasiswa={dataBeasiswa} />
        ) : (
          <div className="no-data">Tidak ada data pengajuan beasiswa.</div>
        )}
      </div>
    </div>
  );
};

export default ListBeasiswa;
