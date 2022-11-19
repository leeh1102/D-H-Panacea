// This is a general template for component file

import React from "react";
import Styles from "./main.js";
import Search from "../search/search.jsx";
import backgroundImage from "../../assets/img/mainPageImage.png";

const Main = () => {
  return (
    <>
      <Search />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          display: "block",
          backgroundSize: "100% 70%",
          marginTop: "7%",
        }}
      ></div>
    </>
  );
};
export default Main;
