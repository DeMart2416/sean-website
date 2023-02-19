import React from "react";
import About from "./homepage/About";
import Contact from "./homepage/Contact";
import Education from "./homepage/Education";
import Experience from "./homepage/Experience";
import Footer from "./homepage/Footer";
// import "./App.css";
import Hero from "./homepage/Hero";
import Navigation from "./homepage/Navigation";

function App() {
    return (
        <>
            <Navigation />
            <Hero />
            <About />
            <Experience />
            <Education />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
