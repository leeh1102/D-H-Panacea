import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.css";
import mainPageImage from "./assets/img/mainPageImage.png";
import backgroundImage from "./assets/img/mainPageImage.png";

import Search from "./components/search/search.jsx";
import NavBar from "./components/navBar/navbar";
import Main from "./components/main/main.jsx";
import { style } from "@mui/system";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes path="/">
          <Route path="/" element={<Main />} />

          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signUp" element={<SignUp />} /> */}
          <Route path="/filter" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
