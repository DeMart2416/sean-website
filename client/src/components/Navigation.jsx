import "./Navigation.css";

function Navigation() {
    const seanProfile =
        "https://drive.google.com/uc?id=1_dnGgHcBqrd1iLPAhj8ebhpDUMgHSe9Y";
    const sections = [
        { Id: 1, Name: "home" },
        { Id: 2, Name: "about" },
        { Id: 3, Name: "experience" },
        //{ Id: 4, Name: 'education' },
        { Id: 5, Name: "contact" },
    ];

    return (
        <div className="header">
            <div className="header-content">
                <div className="header-logo-container">
                    <img
                        src={seanProfile}
                        alt="Sean DesMarteau Logo"
                        class="header-logo-img"
                    />
                    <h4 className="header-logo-name">Sean DesMarteau</h4>
                </div>
                <div className="header-links">
                    {sections.map((section) => {
                        return (
                            <a
                                href={"#" + section.Name}
                                className="header-link"
                            >
                                {section.Name}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Navigation;
