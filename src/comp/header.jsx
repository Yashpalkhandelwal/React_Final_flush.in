import React from "react";
import Navbartop from "./navbartop"
import Slider from "./slide"

const menuName = [
    {
        key: 1,
        navbarmenuname: "Home",
        link: "#"
    }, {
        key: 2,
        navbarmenuname: "Features",
        link: "#"
    }, {
        key: 3,
        navbarmenuname: "Problem",
        link: "#"
    }, {
        key: 4,
        navbarmenuname: "Solution",
        link: "#"
    }, {
        key: 5,
        navbarmenuname: "Team",
        link: "#"
    }
        {
        key: 6,
        navbarmenuname: "Contact",
        link: "#"
    }
];

export default function Header() {
    return (
        <div>
            <nav className="navbar-expand-lg navbar-dark">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul>
                        {
                            menuName.map(
                                name => <Navbartop 
                                key={name.id} 
                                title={name.navbarmenuname} 
                                link={name.link}/>
                            )
                        }
                    </ul>
                </div>
            </nav>

            <Slider/>
        </div>
    )
}
