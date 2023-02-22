import "./Hero.css";
import socials from "../../assets/data/socials";

function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <h1 className="hero-content__heading">Hey, My name is Sean</h1>
                <p className="hero-content__summary">
                    3x Salesforce Certified Developer with 5+ years of
                    Salesforce experience and a passion for helping businesses
                    maximize their value with the Salesforce Platform.
                </p>
                <button className="hero-content__btn">Resume</button>
            </div>
            <div className="social-links">
                {socials.map((social) => {
                    return (
                        <div key={social.Id} className="social-link">
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="social-link_link"
                            >
                                <img
                                    className="social-link__img"
                                    src={social.src}
                                    alt=""
                                />
                            </a>
                        </div>
                    );
                })}
            </div>
            <div className="home-hero__mouse-scroll-cont">
                <div className="mouse"></div>
            </div>
        </section>
    );
}

export default Hero;
