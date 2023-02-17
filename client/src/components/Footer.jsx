import "./Footer.css";
import socials from "../assets/data/socials";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <section className="footer">
            <div className="footer-content">
                <div className="footer-upper">
                    <div className="footer-upper-info">
                        <h2 className="footer-upper-info_heading">
                            Sean DesMarteau
                        </h2>
                        <p className="footer-upper-info_detail">
                            3x Salesforce Certified Developer with 5+ years of
                            Salesforce experience and a passion for helping
                            businesses maximize their value with the Salesforce
                            Platform.
                        </p>
                    </div>
                    <div className="footer-upper-socials">
                        <h2 className="socials-header">Social</h2>
                        <div className="footer-upper-social-links">
                            {socials.map((social) => {
                                return (
                                    <div className="footer-upper-social-link">
                                        <a
                                            href={social.url}
                                            className="footer-upper-social-link_link"
                                        >
                                            <img
                                                className="footer-upper-social-link__img"
                                                src={social.src}
                                                alt=""
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
