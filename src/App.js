
//import Button from "./Button";
//import styles from "./App.module.css";

//import { useEffect, useState } from "react";
//import Movie from "./components/Movie";

//import { useState, useEffect} from "react";

import {
  BrowserRouter as Router,
  //Switch,  Switch -->  Routes 대체
  Route,
  Routes,
} from "react-router-dom";
import Home from "./routes/Home";
import Detatil from "./routes/Detatil";

function App() {

  return <Router>
    <Routes>
      <Route path="/hellow" element={<h1>hellow</h1>}></Route>
      <Route path="/movie/:id" element={<Detatil></Detatil>}></Route>
      <Route path="/" element={<Home />}>

      </Route>
    </Routes>
  </Router>;

}

export default App;
