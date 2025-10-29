import React from "react";
import '../App.css';
const { navbarData } = require ("./navbarData");

function navbar() {
    return (
        <div className="navbar">
            <ul className="navbarList">
                {navbarData.map((val, key) => {
                    return
                    <li key={key}
                    className="row"
                        onClick={() => { window.location.pathname = val.link }}>
                        {""}
                        <div>{val.icon} </div>{""}
                        <div>{val.title} </div>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default navbar;