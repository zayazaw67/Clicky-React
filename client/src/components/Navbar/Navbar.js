import React from "react";
import "./Navbar.css";

const Nav = props => (
    <div className="nav">
        <div className="title">Spongebob Memory Click Game</div>
        <div className="scores text-right">Score: {props.score} Highscore: {props.highscore}</div>
    </div>
);

export default Nav;