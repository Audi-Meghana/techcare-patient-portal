// src/components/ProfilePanel.jsx
import React from "react";
import { Phone, ShieldCheck, CalendarDays, User } from "lucide-react";

const ProfilePanel = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="profile-panel">
      <div className="profile-card">
        <img
          src={profile.profile_picture || "/default-profile.jpg"}
          alt={profile.name}
          className="profile-image"
        />
        <h3 className="profile-name">{profile.name}</h3>
        <p className="profile-dob">
          <CalendarDays size={16} /> Date of Birth:{" "}
          <span>{profile.date_of_birth}</span>
        </p>
        <p className="profile-gender">
          <User size={16} /> Gender: <span>{profile.gender}</span>
        </p>
        <p className="profile-phone">
          <Phone size={16} /> Emergency:{" "}
          <span>{profile.phone || profile.emergency_contact}</span>
        </p>
        <p className="profile-insurance">
          <ShieldCheck size={16} /> Insurance:{" "}
          <span>{profile.insurance_type || "Not Provided"}</span>
        </p>

        <button className="info-btn">Show All Information</button>
      </div>
    </div>
  );
};

export default ProfilePanel;
