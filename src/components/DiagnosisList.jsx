// src/components/DiagnosisList.jsx
import React from "react";

const DiagnosisList = ({ diagnostics }) => {
  const sampleDiagnostics = [
    {
      problem: "Hypertension",
      description: "Elevated blood pressure observed during multiple checkups.",
      status: "Under Observation",
    },
    {
      problem: "Type 2 Diabetes",
      description: "High blood glucose managed through medication and diet.",
      status: "Stable",
    },
    {
      problem: "Asthma",
      description: "Occasional shortness of breath triggered by dust and smoke.",
      status: "Normal",
    },
    {
      problem: "Vitamin D Deficiency",
      description: "Low vitamin D levels observed in last report.",
      status: "Improving",
    },
  ];

  const data = Array.isArray(diagnostics) && diagnostics.length > 0
    ? diagnostics
    : sampleDiagnostics;

  const getStatusColor = (status) => {
    if (!status) return "#6B7280";
    const s = status.toLowerCase();
    if (s.includes("normal") || s.includes("improving")) return "#10B981"; // green
    if (s.includes("critical") || s.includes("severe")) return "#EF4444"; // red
    if (s.includes("observation") || s.includes("monitor")) return "#F59E0B"; // orange
    return "#6366F1"; // indigo
  };

  return (
    <div
      className="diagnosis-list"
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        padding: "30px 34px",
        marginTop: "36px",
        fontFamily: "Inter, sans-serif",
        width: "100%",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#1F2937",
          marginBottom: "22px",
          borderBottom: "2px solid #E5E7EB",
          paddingBottom: "10px",
          letterSpacing: "0.2px",
        }}
      >
        Diagnosis History
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: "0",
          backgroundColor: "#FFFFFF",
          borderRadius: "14px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr
            style={{
              background:
                "linear-gradient(90deg, #EEF2FF 0%, #F9FAFB 100%)",
              color: "#4F46E5",
              fontSize: "15px",
              fontWeight: 600,
              textAlign: "left",
            }}
          >
            <th style={{ padding: "16px 20px" }}>Problem / Diagnosis</th>
            <th style={{ padding: "16px 20px" }}>Description</th>
            <th style={{ padding: "16px 20px", textAlign: "center" }}>
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, idx) => (
            <tr
              key={idx}
              style={{
                borderBottom: "1px solid #E5E7EB",
                transition: "background 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#F9FAFB")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#FFFFFF")
              }
            >
              <td
                style={{
                  padding: "14px 20px",
                  color: "#111827",
                  fontWeight: 500,
                }}
              >
                {item.problem || "N/A"}
              </td>
              <td
                style={{
                  padding: "14px 20px",
                  color: "#6B7280",
                  fontSize: "14.5px",
                  lineHeight: "1.6",
                }}
              >
                {item.description || "N/A"}
              </td>
              <td
                style={{
                  padding: "14px 20px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    backgroundColor: `${getStatusColor(item.status)}15`,
                    color: getStatusColor(item.status),
                    fontWeight: 600,
                    borderRadius: "30px",
                    padding: "6px 16px",
                    fontSize: "13.5px",
                    textTransform: "capitalize",
                    display: "inline-block",
                  }}
                >
                  {item.status || "N/A"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosisList;
