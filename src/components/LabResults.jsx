// src/components/LabResults.jsx
import React from "react";
import { FlaskConical, AlertTriangle } from "lucide-react";

const LabResults = ({ labData }) => {
  if (!labData || labData.length === 0)
    return (
      <div className="lab-results-card">
        <h3>Lab Results</h3>
        <p style={{ color: "#888", fontSize: "0.9rem" }}>No Lab Results Available</p>
      </div>
    );

  return (
    <div className="lab-results-card">
      <div className="lab-results-header">
        <FlaskConical size={22} color="#5A67D8" />
        <h3>Lab Results</h3>
      </div>

      <div className="lab-results-list">
        {labData.map((item, index) => (
          <div key={index} className="lab-result-item">
            <div className="lab-test-info">
              <strong className="lab-test-name">{item.test_name}</strong>
              <span className="lab-test-result">
                {item.result} {item.unit || ""}
              </span>
            </div>
            <div
              className={`lab-status ${
                item.is_normal ? "normal" : "abnormal"
              }`}
            >
              {item.is_normal ? "Normal" : <><AlertTriangle size={14}/> Abnormal</>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
