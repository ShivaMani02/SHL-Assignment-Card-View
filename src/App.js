import React from "react";
import DataDisplay from "./DataDisplay.js";


const headerStyles = {
  textAlign: "center", 
  fontFamily: "Arial, sans-serif",
  paddingTop: "20px",
};

const headerStyles2 = {
  textAlign: "center", 
  fontFamily: "Arial, sans-serif",


};


function App() {
  return (
    <div className="App">
      <h1 style={headerStyles}>Data Display App</h1>
      <p style={headerStyles2}> Project By - <a href="https://in.linkedin.com/in/theshivanshvasu" > Shivansh Vasu </a> </p>
      <DataDisplay />
    </div>
  );
}

export default App;
