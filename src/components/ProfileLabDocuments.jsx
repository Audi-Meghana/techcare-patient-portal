// src/components/ProfileLabDocuments.jsx
import React from "react";
import { ArrowDownToLine } from "lucide-react";

const ProfileLabDocuments = ({ documents }) => {
  if (!documents || documents.length === 0)
    return <div className="lab-documents-empty">No Lab Documents Available</div>;

  return (
    <div className="lab-documents-card">
      <h3>Lab Test Documents</h3>
      <ul>
        {documents.map((doc, index) => (
          <li key={index}>
            <a href={doc.url} download>
              {doc.name}
            </a>
            <ArrowDownToLine size={22} className="download-icon" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileLabDocuments;
