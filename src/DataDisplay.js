import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import { data } from "./data.js";

const containerStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
};

const DataDisplay = () => {
  return (
    <div style={containerStyles}>
      {data.map((item, index) => (
        <ProjectCard key={index} data={item} />
      ))}
    </div>
  );
};

export default DataDisplay;
