import React from "react";

const StatsCards = ({ vitals = {} }) => {
  return (
    <div className="stats-cards">
      {/* Respiratory Rate */}
      <div className="stat-card respiratory">
        <div className="label">Respiratory Rate</div>
        <div className="value">{vitals.respiratory_rate ?? "-"} bpm</div>
        <small>Normal</small>
      </div>

      {/* Temperature */}
      <div className="stat-card temperature">
        <div className="label">Temperature</div>
        <div className="value">{vitals.temperature ?? "-"} °F</div>
        <small>Stable</small>
      </div>

      {/* Heart Rate */}
      <div className="stat-card heart-rate">
        <div className="label">Heart Rate</div>
        <div className="value">{vitals.heart_rate ?? "-"} bpm</div>
        <small>Normal</small>
      </div>
    </div>
  );
};

export default StatsCards;
