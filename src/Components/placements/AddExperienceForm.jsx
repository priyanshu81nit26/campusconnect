import React, { useState } from "react";

const defaultRound = { title: "", description: "" };

const AddExperienceForm = ({ onClose, onSubmit }) => {
  const [company, setCompany] = useState("");
  const [ctc, setCtc] = useState("");
  const [year, setYear] = useState(2025);
  const [mode, setMode] = useState("on-campus");
  const [role, setRole] = useState("student");
  const [rounds, setRounds] = useState([{ ...defaultRound }]);
  const [verdict, setVerdict] = useState("selected");

  const handleRoundChange = (idx, field, value) => {
    setRounds(rounds.map((r, i) => (i === idx ? { ...r, [field]: value } : r)));
  };
  const addRound = () => setRounds([...rounds, { ...defaultRound }]);
  const removeRound = (idx) => setRounds(rounds.filter((_, i) => i !== idx));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ company, ctc, year, mode, role, rounds, verdict });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-richblack-800 rounded-xl shadow-lg p-8 w-full max-w-2xl relative">
        <button className="absolute top-4 right-4 text-xl text-richblack-300 hover:text-white" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold text-richblack-5 mb-4 text-center">Share Your Interview Experience</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input className="flex-1 rounded-md p-2 bg-richblack-900 text-white border border-richblack-700" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} required />
            <input className="flex-1 rounded-md p-2 bg-richblack-900 text-white border border-richblack-700" placeholder="CTC" value={ctc} onChange={e => setCtc(e.target.value)} required />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="number" min="2000" max="2100" className="flex-1 rounded-md p-2 bg-richblack-900 text-white border border-richblack-700" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} required />
            <select className="flex-1 rounded-md p-2 bg-richblack-900 text-white border border-richblack-700" value={mode} onChange={e => setMode(e.target.value)} required>
              <option value="on-campus">On Campus</option>
              <option value="off-campus">Off Campus</option>
            </select>
            <select className="flex-1 rounded-md p-2 bg-richblack-900 text-white border border-richblack-700" value={role} onChange={e => setRole(e.target.value)} required>
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
            </select>
          </div>
          <div>
            <label className="font-semibold text-richblack-200">Rounds</label>
            {rounds.map((round, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-2 mb-2 items-center">
                <input className="flex-1 rounded-md p-2 bg-richblack-900 text-white border border-richblack-700" placeholder={`Round Title`} value={round.title} onChange={e => handleRoundChange(idx, "title", e.target.value)} required />
                <input className="flex-1 rounded-md p-2 bg-richblack-900 text-white border border-richblack-700" placeholder={`Round Description`} value={round.description} onChange={e => handleRoundChange(idx, "description", e.target.value)} required />
                <button type="button" className="text-red-400 hover:text-red-600 text-lg px-2" onClick={() => removeRound(idx)} disabled={rounds.length === 1}>-</button>
                {idx === rounds.length - 1 && (
                  <button type="button" className="text-green-400 hover:text-green-600 text-lg px-2" onClick={addRound}>+</button>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <select className="flex-1 rounded-md p-2 bg-richblack-900 text-white border border-richblack-700" value={verdict} onChange={e => setVerdict(e.target.value)} required>
              <option value="selected">Selected</option>
              <option value="not selected">Not Selected</option>
            </select>
          </div>
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-md px-6 py-2 mt-4">Submit Experience</button>
        </form>
      </div>
    </div>
  );
};

export default AddExperienceForm;
