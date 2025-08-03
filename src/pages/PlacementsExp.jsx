import React, { useState } from "react";
import AddExperienceForm from "../Components/placements/AddExperienceForm";

const PlacementsExp = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="min-h-[80vh] w-full bg-richblack-900 pt-16 pb-10 flex flex-col items-center justify-start">
      <div className="w-11/12 max-w-maxContent flex flex-col items-center">
        <h1 className="text-4xl font-bold text-richblack-5 mb-2 text-center">Interview Experiences</h1>
        <p className="text-richblack-300 text-lg mb-6 text-center max-w-2xl">
          Explore real placement journeys. Read, learn, and share your own experience to help others succeed!
        </p>
        <div className="w-full border-b border-richblack-700 mb-10"></div>
        {/* Experiences grid will go here */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="experience-grid">
          {/* Experience cards will be mapped here */}
        </div>
        {/* Add Experience button at bottom */}
        <div className="w-full flex justify-center mt-16 mb-4">
          <button
            className="rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-3 shadow-md transition-all duration-200 text-lg"
            id="add-exp-btn"
            onClick={() => setShowForm(true)}
          >
            Add Experience
          </button>
        </div>
        {showForm && (
          <AddExperienceForm
            onClose={() => setShowForm(false)}
            onSubmit={(data) => {
              setShowForm(false);
              // TODO: submit data to backend and refresh grid
              console.log("Submitted Experience:", data);
            }}
          />
        )}
        {/* Modal/Form for adding/editing experience will be implemented here */}
      </div>
    </div>
  );
};

export default PlacementsExp;
