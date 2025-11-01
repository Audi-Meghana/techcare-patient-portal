// src/components/ProfileLabResults.jsx
import React from "react";

const ProfileLabResults = ({ labResults }) => {
  // labResults is array of objects [{ name, url }]
  if (!labResults || labResults.length === 0) {
    return <div>No lab results available for download.</div>;
  }

  return (
    <div className="profile-lab-results">
      <h3>Lab Results</h3>
      <div className="lab-results-grid">
        {labResults.map((result, idx) => (
          <div key={idx} className="lab-result-item">
            <img
              src={result.thumbnail || "/default-lab-thumbnail.png"}
              alt={result.name}
              className="lab-result-thumbnail"
            />
            <div className="lab-result-name">{result.name}</div>
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="download-link"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileLabResults;
