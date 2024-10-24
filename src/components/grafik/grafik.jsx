import React from "react";
import "./grafik.css"; // Assuming you have styles defined here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const GrafikBeasiswa = ({ dataBeasiswa }) => {
  const totalApplicants = dataBeasiswa.length;

  // Initialize semester list from 1 to 8
  const allSemesters = Array.from({ length: 8 }, (_, i) => `SMT ${i + 1}`);

  // Group applicants by semester, include 0 for missing semesters
  const semesterCount = dataBeasiswa.reduce((acc, item) => {
    acc[item.semester] = (acc[item.semester] || 0) + 1;
    return acc;
  }, {});

  // Preparing data for Semester Bar Chart (ensure all semesters are included)
  const semesterBarData = allSemesters.map((semester, index) => ({
    name: semester,
    count: semesterCount[index + 1] || 0, // Default to 0 if there is no data for a semester
  }));

  // Define all scholarship options (replace these with your actual scholarship types)
  const allScholarships = [
    "Akademik",
    "KIP-Kuliah",
    "ORMAWA",
    "Raport",
    "Non-Akademik",
    "BUMN",
  ];

  // Group applicants by scholarship type, include 0 for missing scholarship types
  const scholarshipCount = dataBeasiswa.reduce((acc, item) => {
    acc[item.beasiswa] = (acc[item.beasiswa] || 0) + 1;
    return acc;
  }, {});

  // Preparing data for Scholarship Line Chart (ensure all scholarship types are included)
  const scholarshipBarData = allScholarships.map((beasiswa) => ({
    name: beasiswa,
    count: scholarshipCount[beasiswa] || 0, // Default to 0 if there is no data for a scholarship type
  }));

  return (
    <div className="charts-container">
      <h3 className="total-applicants">Total Pendaftar: {totalApplicants}</h3>

      {/* Semester Distribution Chart */}
      <h4 className="chart-subtitle">Penyebaran Tiap Semester</h4>
      <BarChart
        width={800}
        height={300}
        data={semesterBarData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="count" fill="#c9302c" barSize={40} />
      </BarChart>

      {/* Scholarship Type Distribution Chart */}
      <h4 className="chart-subtitle">Penyebaran Beasiswa</h4>
      <LineChart
        width={800}
        height={300}
        data={scholarshipBarData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#c9302c"
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
};

export default GrafikBeasiswa;
