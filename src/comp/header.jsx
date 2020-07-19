import React from "react";
import Navbartop from "./navbartop"
import Slider from "./slide"

export default function Header() {
    const notes = [
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
        }, {
            key: 6,
            navbarmenuname: "Contact",
            link: "#"
        }
    ];

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
                            notes.map(
                                nameIteam => <Navbartop
                                    key={nameIteam.id}
                                    navbarmenuname={nameIteam.navbarmenuname}
                                    link={nameIteam.link}/> )
                                                               
                        }

                    </ul>
                </div>
            </nav>

            <Slider/>
        </div>
    )
}
