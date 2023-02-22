import { useState } from "react";
import "./Navigation.css";
import seanProfile from "../../assets/images/sean-profile-pic.jpeg";

function Navigation() {
    const [style, setStyle] = useState({
        clicked: false,
        line1: "line line-1",
        line2: "line line-2",
        line3: "line line-3",
        hamMenu: "ham-menu",
    });

    const sections = [
        { Id: 1, Name: "home" },
        { Id: 2, Name: "about" },
        { Id: 3, Name: "experience" },
        // { Id: 4, Name: "blog" },
        { Id: 5, Name: "contact" },
    ];

    function menuClicked() {
        setStyle((prevValue) => {
            if (prevValue.clicked === false) {
                return {
                    clicked: true,
                    line1: prevValue.line1 + " line1Transition",
                    line2: prevValue.line2 + " line2Transition",
                    line3: prevValue.line3 + " line3Transition",
                    hamMenu: prevValue.hamMenu + " ham-menu-open",
                };
            } else {
                return {
                    clicked: false,
                    line1: "line line-1",
                    line2: "line line-2",
                    line3: "line line-3",
                    hamMenu: "ham-menu",
                };
            }
        });
    }

    return (
        <>
            <header className="header">
                <div className="header-content">
                    <div className="header-logo">
                        <img
                            src={seanProfile}
                            alt="Sean DesMarteau Logo"
                            className="header-logo__img"
                        />
                        <a href="#home" className="header-logo__name">
                            Sean DesMarteau
                        </a>
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
                    <div className="menu-icon" onClick={menuClicked}>
                        <div className={style.line1}></div>
                        <div className={style.line2}></div>
                        <div className={style.line3}></div>
                    </div>
                </div>
            </header>
            <div className={style.hamMenu}>
                <ul className="ham-menu-nav-list">
                    {sections.map((section) => {
                        return (
                            <li key={section.Id}>
                                <a
                                    onClick={menuClicked}
                                    href={"#" + section.Name}
                                    className="ham-menu-nav-item"
                                >
                                    {section.Name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Navigation;
