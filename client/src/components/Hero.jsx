import "./Hero.css";
import trailhead from "../assets/icons/trailhead2-ico.png";
import linkedin from "../assets/icons/linkedin-ico.png";
import github from "../assets/icons/github-ico.png";
import twitter from "../assets/icons/twitter-ico.png";
import instagram from "../assets/icons/insta-ico.png";

function Hero() {
    const socials = [
        {
            Id: 1,
            Name: "Trailhead",
            src: trailhead,
            url: "https://trailblazer.me/id/sdesmarteau",
        },
        {
            Id: 2,
            Name: "LinkedIn",
            src: linkedin,
            url: "https://www.linkedin.com/in/seandesmarteau",
        },
        {
            Id: 3,
            Name: "Github",
            src: github,
            url: "https://github.com/DeMart2416",
        },
        {
            Id: 4,
            Name: "Twitter",
            src: twitter,
            url: "https://twitter.com/DeMart2416",
        },
        {
            Id: 5,
            Name: "Instagram",
            src: instagram,
            url: "https://www.instagram.com/demart2416",
        },
    ];

    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-content__heading">Hey, My name is Sean</h1>
                <p className="hero-content__summary">
                    3x Salesforce Certified Developer with 5+ years of
                    Salesforce experience and a passion for helping businesses
                    maximize their value with the Salesforce Platform.
                </p>
                <button className="hero-content__btn">Projects</button>
            </div>
            <div className="social-links">
                {socials.map((social) => {
                    return (
                        <div key={social.Id} className="social-link">
                            <a href={social.url} className="social-link_link">
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
