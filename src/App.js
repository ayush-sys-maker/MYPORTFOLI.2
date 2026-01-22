import React from "react";
import Navbar from "./components/navbar.js";
import Hero from "./components/home.js";
import Gallery from "./components/gallery.js";
import "./App.css";
import About from "./components/cobra.js";
import GradientText from "./components/shiny-text.js"
import Project from "./components/projects.js";
import Footer from "./components/footer.js"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
     <div className="app">
      <Navbar />
      <Hero />
      <Gallery/>
      <About/>
      <GradientText/>
      <Project/>
      <Footer/>
    </div>
  
  );
}

export default App;
