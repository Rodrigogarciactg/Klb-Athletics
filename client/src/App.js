import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Memberships from "./components/Memberships";
import About from "./components/About";
import Main from "./views/Main";
import Detail from "./components/Detail";
import Update from "./components/Update";
// import ClassList from "./components/ClassList";
import ClassForm from "./components/ClassForm";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/classes" />
          <Route element={<Detail />} path="/classes/:id" />
          <Route element={<Update />} path="/classes/edit/:id" />
          <Route element={<Home />} path="/home/" />
          {/* <Route element={<ClassForm />} path="/classes/" /> */}
          <Route element={<Memberships />} path="/memberships/" />
          <Route element={<About />} path="/aboutus/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
