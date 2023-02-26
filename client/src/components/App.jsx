// import "./App.css";
import React from "react";
import Navigation from "./homepage/Navigation";
import Hero from "./homepage/sections/Hero";
import About from "./homepage/sections/About";
import Contact from "./homepage/sections/Contact";
// import Education from "./homepage/sections/Education";
import Experience from "./homepage/sections/Experience";
import Footer from "./homepage/Footer";

function App() {
    return (
        <>
            <Navigation />
            <Hero />
            <About />
            <Experience />
            {/* <Education /> */}
            <Contact />
            <Footer />
        </>
    );
}

export default App;
