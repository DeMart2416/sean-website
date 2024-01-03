import Section from '../../ui/general/Section';
import SectionHeader from '../../reusable/SectionHeader';

import './About.css';

function About() {
    const skills = [
        'Salesforce',
        'Apex',
        'LWC',
        'Aura',
        'Visualforce',
        'SOQL',
        'SOSL',
        'GIT',
        'DevOps',
        'CI/CD',
        'React',
        'HTML',
        'CSS',
        'JavaScript',
        'Node',
        'Express',
        'Mongo DB',
        '.Net',
        'C#',
        'C++',
    ];

    return (
        <Section id="about">
            <SectionHeader
                name="About Me"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis tempora explicabo quae quod deserunt eius sapiente"
            />
            <div className="about-container">
                <div className="about-info">
                    <h1 className="about-heading">Get to know me!</h1>
                    <p className="about-info-description">
                        Hey! It's <span>Sean DesMarteau</span> and I'm a
                        Salesforce <span>Engineering Manager</span> and{' '}
                        <span>Senior Developer</span> located in Denver,
                        Colorado.
                        <br /> <br /> Currently I am the Development Lead at{' '}
                        <a
                            className="gusto-link"
                            href=" https://lumary.com/us/aba-software/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Lumary
                        </a>
                        . Lumary is a global healthcare platform with a complete
                        end-to-end practice management solution, purpose-built
                        for autism therapy providers in the US. Lumary
                        integrates with specialist applications to create one
                        digital solution that enables ABA providers to manage
                        their entire therapy practice with a complete end-to-end{' '}
                        <a
                            className="gusto-link"
                            href=" https://lumary.com/us/aba-software/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            ABA Practice Management Software
                        </a>
                        .
                        <br /> <br />
                        Combined with my formal education, and personal
                        attributes, I have the leadership experience, knowledge,
                        and work ethic to succeed in today’s highly competitive
                        and constantly evolving technological market.
                    </p>
                    <a className="about-info-btn" href="#contact">
                        Contact
                    </a>
                </div>
                <div className="about-skills">
                    <h1 className="about-heading">My Skills</h1>
                    <div className="skills-container">
                        {skills.map((skill) => {
                            return <div className="skills-skill">{skill}</div>;
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default About;
