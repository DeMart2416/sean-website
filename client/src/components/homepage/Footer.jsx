import "./Footer.css";
import socials from "../../assets/data/socials";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <section id="footer" className="footer">
            <div className="footer-content">
                <div className="footer-upper">
                    <div className="footer-upper-info">
                        <h2 className="footer-heading">Sean DesMarteau</h2>
                        <p className="footer-upper-info__detail">
                            3x Salesforce Certified Developer with 5+ years of
                            Salesforce experience and a passion for helping
                            businesses maximize their value with the Salesforce
                            Platform.
                        </p>
                    </div>
                    <div className="footer-upper-socials">
                        <h2 className="footer-heading">Social</h2>
                        <div className="footer-upper-social-links">
                            {socials.map((social) => {
                                return (
                                    <div
                                        key={social.Id}
                                        className="footer-upper-social-link"
                                    >
                                        <a
                                            href={social.url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="footer-upper-social-link_link"
                                        >
                                            <img
                                                className="footer-upper-social-link__img"
                                                src={social.src}
                                                alt={social.Name}
                                            />
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="footer-lower">
                    <p>&copy; Copyright {year} | Made By Sean DesMarteau</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
