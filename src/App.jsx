import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProfilePanel from "./components/ProfilePanel";
import StatsCards from "./components/StatsCards";
import BPChart from "./components/BPChart";
import DiagnosisList from "./components/DiagnosisList";
import ProfileLabDocuments from "./components/ProfileLabDocuments";
import "./styles/main.css";

const dummyBpData = [
  { month: "Jan", systolic: 120, diastolic: 80 },
  { month: "Feb", systolic: 122, diastolic: 82 },
  { month: "Mar", systolic: 118, diastolic: 79 },
];

const dummyVitals = {
  respiratory_rate: 16,
  temperature: 98.6,
  heart_rate: 72,
};

const dummyLabDocuments = [
  { name: "Chest X-Ray Report.pdf", url: "/docs/chest-xray.pdf" },
  { name: "Abdominal Ultrasound Report.pdf", url: "/docs/abdominal-ultrasound.pdf" },
  { name: "Blood Test Report.pdf", url: "/docs/blood-test.pdf" },
];

function App() {
  const [patients, setPatients] = useState([]);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: "Basic " + btoa("coalition:skills-test"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let patientList = Array.isArray(data.patients)
          ? data.patients
          : Array.isArray(data)
          ? data
          : [];
        setPatients(patientList);
        setSelected(patientList[0] || null);
      })
      .catch((err) => {
        setError(true);
        console.error("API error:", err);
      });
  }, []);

  if (error) return <div>Could not load patients from API.</div>;
  if (!selected) return <div>Loading...</div>;

  const bpReadings =
    selected.diagnosis_history?.blood_pressure?.length > 0
      ? selected.diagnosis_history.blood_pressure
      : dummyBpData;

  const vitals =
    selected.diagnosis_history?.vitals &&
    Object.keys(selected.diagnosis_history.vitals).length > 0
      ? selected.diagnosis_history.vitals
      : dummyVitals;

  const labDocuments = selected.lab_documents || dummyLabDocuments;

  return (
    <div className="dashboard full-screen">
      <Sidebar patients={patients} selected={selected} onSelect={setSelected} />
      <main className="main-content">
        <Topbar />
        <div className="content-area">
          <section className="diagnosis-section">
            <h2>Diagnosis History</h2>
            <BPChart bpReadings={bpReadings} />
            <StatsCards vitals={vitals} />
            <DiagnosisList diagnostics={selected.diagnosis_list || []} />
          </section>

          <aside className="profile-side">
            <ProfilePanel profile={selected} />
            <div className="lab-documents-wrapper">
              <h2 className="section-title">Lab Test Documents</h2>
              <ProfileLabDocuments documents={labDocuments} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
