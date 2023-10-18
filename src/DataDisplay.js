import React, { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { data } from "./data.js";
import "./DataDisplay.css"; // Create a new CSS file for DataDisplay

const containerStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
};

const DataDisplay = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectData) => {
    setSelectedProject(projectData);
  };

  const closeSidebar = () => {
    setSelectedProject(null);
  };

  return (
    <div style={containerStyles}>
      {data.map((item, index) => (
        <ProjectCard
          key={index}
          data={item}
          onClick={() => handleProjectClick(item)}
        />
      ))}
      {selectedProject && (
        <div className={`sidebar ${selectedProject ? "active" : ""}`}>
          <div className="close-button" onClick={closeSidebar}>
            &times;
          </div>
          <h2>{selectedProject["Project.Title"]}</h2>
          <p>Technologies: {selectedProject["Project.Technologies"]}</p>
          <p>Frontend: {selectedProject["Technical_Skillset.Frontend"]}</p>
          <p>Backend: {selectedProject["Technical_Skillset.Backend"]}</p>
          <p>Availability: {selectedProject["Other_Information.Availability"]}</p>
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
