import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} color="red" />
    <StarRating maxRating={10} size={24} />
    <StarRating
      maxRating={5}
      messages={[
        "Chodu jevu",
        "Hailu",
        "Haru chhe em to",
        "maja aavi",
        "Baap movie chhe",
      ]}
    /> */}
  </React.StrictMode>
);
