import Section from "../ui/general/Section";
import SectionHeader from "../reusable/SectionHeader";
import "./Education.css";

function Education() {
    return (
        <Section id="education" className="education-section">
            <SectionHeader
                name="Education"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora explicabo quae quod deserunt eius sapiente"
            />
        </Section>
    );
}

export default Education;
