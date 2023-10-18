import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const {
    "Project.Title": ProjectTitle,
    "Project.Technologies": ProjectTechnologies,
    "Technical_Skillset.Frontend": FrontendSkills,
    "Technical_Skillset.Backend": BackendSkills,
    "Technical_Skillset.Databases": Databases,
    "Other_Information.Availability": Availability,
  } = props.data;

  return (
    <div className="project-card" onClick={props.onClick}>
      <h2>{ProjectTitle}</h2>
      <p>Technologies: {ProjectTechnologies}</p>
      <p>Frontend: {FrontendSkills}</p>
      <p>Backend: {BackendSkills}</p>
      <p>Databases: {Databases}</p>
      <p>Availability: {Availability}</p>
    </div>
  );
};

export default ProjectCard;
