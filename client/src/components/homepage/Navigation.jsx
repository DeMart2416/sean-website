import "./Navigation.css";
import seanProfile from "../../assets/images/sean-profile-pic.jpeg";

function Navigation() {
    const sections = [
        { Id: 1, Name: "home" },
        { Id: 2, Name: "about" },
        { Id: 3, Name: "experience" },
        { Id: 4, Name: "education" },
        { Id: 5, Name: "contact" },
    ];

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <img
                        src={seanProfile}
                        alt="Sean DesMarteau Logo"
                        className="header-logo__img"
                    />
                    <h4 className="header-logo__name">Sean DesMarteau</h4>
                </div>
                <div className="header-links">
                    {sections.map((section) => {
                        return (
                            <a
                                key={section.Id}
                                href={"#" + section.Name}
                                className="header-link"
                            >
                                {section.Name}
                            </a>
                        );
                    })}
                </div>
            </div>
        </header>
    );
}

export default Navigation;
