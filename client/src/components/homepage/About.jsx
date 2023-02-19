import SectionHeader from "../reusable/SectionHeader";

import "./About.css";

function About() {
    return (
        <section id="about" className="about-section">
            <SectionHeader
                name="About Me"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora explicabo quae quod deserunt eius sapiente"
            />
        </section>
    );
}

export default About;
