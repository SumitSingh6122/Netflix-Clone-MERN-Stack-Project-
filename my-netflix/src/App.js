import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Body from "./components/body";
import { Toaster } from 'react-hot-toast';
import Browse from "./components/browse";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/body" element={<Body />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
    <Toaster />
  </Router>
  );
}

export default App;
