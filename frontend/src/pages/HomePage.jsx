import React from "react";
import UrlForm from "../components/Url_form"; // Capitalized import to match export

const HomePage = () => {
  return (
    <div>
      <h1> this is HomePage.jsx </h1>
      <div>
        <UrlForm />
      </div>
    </div>
  );
};

export default HomePage;
