// src/components/Sidebar.jsx
import React from "react";

// 🔹 10 Male & 10 Female profile images (place them inside /public/images/)
const malePhotos = [
  "/images/Patient11.jpg",
  "/images/Patient12.jpg",
  "/images/Patient13.jpg",
  "/images/Patient14.jpg",
  "/images/Patient15.jpg",
  "/images/Patient16.jpg",
  "/images/Patient17.jpg",
  "/images/Patient18.jpg",
  "/images/Patient19.jpg",
  "/images/Patient20.jpg",
];

const femalePhotos = [
  "/images/Patient1.jpg",
  "/images/Patient2.jpg",
  "/images/Patient3.jpg",
  "/images/Patient4.jpg",
  "/images/Patient5.jpg",
  "/images/Patient6.jpg",
  "/images/Patient7.jpg",
  "/images/Patient8.jpg",
  "/images/Patient9.jpg",
  "/images/Patient10.jpg",
];

// 🔹 Helper: assign a gender-based photo based on index (stable per patient)
const getProfilePhoto = (gender, index) => {
  const list =
    gender?.toLowerCase() === "female" ? femalePhotos : malePhotos;
  return list[index % list.length]; // ensures stable matching
};

const Sidebar = ({ patients, selected, onSelect }) => (
  <div
    className="sidebar"
    style={{
      width: "320px",
      backgroundColor: "#FFFFFF",
      boxShadow: "2px 0 10px rgba(0,0,0,0.05)",
      padding: "26px 18px",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
      borderRight: "1px solid #E5E7EB",
    }}
  >
    <div
      className="logo"
      style={{
        fontSize: "1.9rem",
        fontWeight: "700",
        color: "#4F46E5",
        marginBottom: "26px",
        textAlign: "center",
      }}
    >
      Tech.Care
    </div>

    <div
      className="patient-list"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {patients.map((p, idx) => (
        <div
          key={p.id || p.name}
          className={`patient-item${
            selected?.id === p?.id ? " selected" : ""
          }`}
          onClick={() => onSelect(p)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "12px 14px",
            borderRadius: "14px",
            cursor: "pointer",
            backgroundColor: selected?.id === p?.id ? "#EEF2FF" : "#FFFFFF",
            boxShadow:
              selected?.id === p?.id
                ? "0 2px 8px rgba(79,70,229,0.15)"
                : "0 1px 4px rgba(0,0,0,0.05)",
            transition: "all 0.25s ease",
          }}
        >
          <img
            src={p?.profile_image || getProfilePhoto(p?.gender, idx)}
            alt={p?.name || "Patient"}
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #E5E7EB",
            }}
          />
          <div>
            <strong style={{ color: "#111827", fontSize: "15px" }}>
              {p?.name || "N/A"}
            </strong>
            <div style={{ fontSize: "13px", color: "#6B7280" }}>
              {p?.gender || ""},{" "}
              {p?.date_of_birth ? getAge(p.date_of_birth) : ""}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

function getAge(dob) {
  if (!dob) return "";
  const birth = new Date(dob);
  return new Date().getFullYear() - birth.getFullYear();
}

export default Sidebar;
