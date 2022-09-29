import React from "react";
import "./App.css";
import Nav from "./components/pages/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Logout from "./components/pages/Logout";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/pages/Footer";
import Expensee from "./components/Expensee";
import Todo from "./components/pages/Todo";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/expense" element={<Expensee />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
// <Route path="/signup" element={<SignUp />} />
