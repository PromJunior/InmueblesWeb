// ...existing code...
import React from "react";
import '../App.css';
import { navbarData } from "./navbarData";

function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbarList">
                {navbarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            onClick={() => { window.location.pathname = val.link }}
                        >
                            <div>{val.icon}</div>
                            <div>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Navbar;