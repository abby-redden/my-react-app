import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"

export default function Navbar() {
    return (
        <nav>
            
            <ul>
                <li>
                    <NavLink to="/">Landing</NavLink>

                </li>
                <li>
                    <NavLink to="/astrology">Astrology</NavLink>
                </li>
                <li>
                    <NavLink to='/poems'>Poems</NavLink>

                </li>
                <li>
                    <NavLink to='/Useless'>Useless Info </NavLink>

                </li>
            </ul>
        </nav>
    )
}