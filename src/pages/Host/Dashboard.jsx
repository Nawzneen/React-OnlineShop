import React from "react";
import ThemeContext from "./themeContext.js";

export default function Dashboard() {
  const theme = React.useContext(ThemeContext);
  const themeStyles = {
    // backgroundColor: darkTheme ? "#333" : "#ccc",
    // color:  ? "white !important" : "black !important",
    // padding: "2rem",
    // margin: "2rem",
  };
  return (
    <div className="host-dashboard">
      <h1>Dashboard {theme} goes here</h1>
    </div>
  );
}
