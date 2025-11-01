// src/components/BPChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Title,
  PointElement
);

const BPChart = () => {
  // Smooth, wave-like but realistic data
  const bpReadings = [
    { month: "Jan", systolic: 140, diastolic: 98 },
    { month: "Feb", systolic: 130, diastolic: 100 },
    { month: "Mar", systolic: 150, diastolic: 76 },
    { month: "Apr", systolic: 100, diastolic: 90 },
    { month: "May", systolic: 120, diastolic: 82 },
    { month: "Jun", systolic: 95, diastolic: 86 },
    { month: "Jul", systolic: 110, diastolic: 80 },
    { month: "Aug", systolic: 95, diastolic: 88 },
    { month: "Sep", systolic: 125, diastolic: 84 },
    { month: "Oct", systolic: 110, diastolic: 90 },
  ];

  const months = bpReadings.map((r) => r.month);
  const systolic = bpReadings.map((r) => r.systolic);
  const diastolic = bpReadings.map((r) => r.diastolic);

  const data = {
    labels: months,
    datasets: [
      {
        label: "Systolic",
        data: systolic,
        borderColor: "#FF6C8D",
        backgroundColor: "rgba(255,108,141,0.08)",
        borderWidth: 3,
        tension: 0.45, // keeps wave feel
        fill: true,
        pointRadius: 0, // removes circular dots
        pointHoverRadius: 0,
      },
      {
        label: "Diastolic",
        data: diastolic,
        borderColor: "#7286D3",
        backgroundColor: "rgba(114,134,211,0.08)",
        borderWidth: 3,
        tension: 0.45,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: { color: "#4B5563", font: { size: 13 } },
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#111827",
        bodyColor: "#4B5563",
        borderColor: "rgba(0,0,0,0.08)",
        borderWidth: 1,
        boxPadding: 6,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#9CA3AF", font: { size: 12 } },
      },
      y: {
        grid: { color: "rgba(240,240,245,0.8)" },
        ticks: { color: "#9CA3AF", font: { size: 12 } },
        min: 60,
        max: 160,
      },
    },
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FCFCFE 0%, #FFFFFF 100%)",
        borderRadius: "20px",
        padding: "24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default BPChart;
