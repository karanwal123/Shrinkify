import React, { useState } from "react";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">URL Shortener</h1>
      <div>
        <HomePage />
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600">Made with ❤️ by Your Aditya</p>
      </div>
    </div>
  );
}

export default App;
