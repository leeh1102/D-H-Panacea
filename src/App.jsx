import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.css";
import mainPageImage from "./assets/img/mainPageImage.png";
import backgroundImage from "./assets/img/mainPageImage.png";

import Search from "./components/search/search.jsx";
import NavBar from "./components/navbar/navbar.jsx";
import Main from "./components/main/main.jsx";
import LogIn from "./components/login/login.jsx";
import SignUp from "./components/signup/signup.jsx";
import { style } from "@mui/system";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes path="/">
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/filter" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
