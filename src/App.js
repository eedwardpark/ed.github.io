import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen">
      <div className="">
        <BrowserRouter>
          <header>
            <div>
              <div>
                <Header />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/project" element={<Project />} />
                </Routes>
              </div>
            </div>
          </header>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
