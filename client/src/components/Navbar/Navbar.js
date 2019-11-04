import React from "react";
import './Navbar.css';

const Nav = props => (
    <div className="Nav">
        <div className="title">{props.children}asdfasdfaf</div>
        <div className="score">Current Score: {props.score} | Highscore: {props.highscore}</div>
    </div>
)

export default Nav;