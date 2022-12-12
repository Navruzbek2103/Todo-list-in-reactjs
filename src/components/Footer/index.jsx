import React from "react";
import "./style.scss";

const index = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <h4 className="text-center text-white">{new Date().getFullYear()}</h4>
        </div>
      </footer>
    </div>
  );
};

export default index;
