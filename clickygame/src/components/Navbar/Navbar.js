import React from "react";
import "./Navbar.css";
import Game from "../MainContent/Game";

const Nav = () => (
    <nav className="navbar">
        <a className="navbar-brand" href="/">
            <h2><b>Clicky Game</b></h2>
        </a>
        <h2>Click an image to begin!</h2>
        <h2>Score: { Game.props.score } | Top Score: { Game.props.topScore }</h2>
    </nav>
);

export default Nav;