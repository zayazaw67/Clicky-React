import React from "react";

const Nav = props => (
    <div className="Nav">
        <div className="title">{props.children}</div>
        <div className="score">
            Current Score: {props.score} | Highscore: {props.highscore}
        </div>
    </div>
)

export default Nav;