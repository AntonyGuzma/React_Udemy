import React from "react";

const LapList = ({ laps }) => {
  return (
    <div className="timer-laps">
      <h3>Voltas</h3>
      <ul>
        {laps.map((lap, index) => (
          <li key={index}>Volta: {lap}</li>
        ))}
      </ul>
    </div>
  );
};

export default LapList;
