import React from "react";
import "./homepage.styles.scss";
import Directory from "../../components/directory/Directory.Component";

const Homepage = props => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default Homepage;
