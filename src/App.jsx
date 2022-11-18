import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/navbar";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes path="/">
          <Route path="/" />
          {/* <Route path="/login" element={<LoginCompoment />} /> */}
          {/* <Route path="/signUp" element={<SignUpCompoment />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
