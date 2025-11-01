// src/components/Topbar.jsx
import React from "react";

const Topbar = () => (
  <header className="topbar">
    <div className="logo">Tech.Care</div>
    <nav>
      <button className="active">Patients</button>
      <button>Schedule</button>
      <button>Message</button>
      <button>Transactions</button>
    </nav>
    <div className="doctor-info">
      <img src="/doctor.jpg" alt="Dr. Simmons" className="circle" />
      <span>Dr. Jose Simmons<br/>General Practitioner</span>
    </div>
  </header>
);

export default Topbar;
