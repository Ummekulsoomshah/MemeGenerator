import React from "react";
import trolface from "../images/trolface.png";
export default function Header(props) {
    return (
        <header className={props.darkMode?"dark":"header"}>
            <img src={trolface} alt="" className="img-title"/>
            <h2 className="title">Meme Generator</h2>
            <h4 className="project-title">React Course - Project 3</h4>
            {/* toggle  */}
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider"
                onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>

        </header>

    )
}
