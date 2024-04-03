import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Header from "../../Components/Header/header";
import "./astrology.css"

export default function Astrology(){
    const navigate = useNavigate();

    return (
        <div id="astro">
        <Header message={"Astrology"}></Header>
        <p>This is an amazing book for any astrology folks out there.</p>
        <a href="https://www.goodreads.com/en/book/show/120993">Click Me!</a>
<hr/>
        <p>Even linkedin supports the astrological following! Check out this article!</p>
        <a href="https://www.linkedin.com/pulse/best-astrology-sites-2023-top-5-horoscope-accurate-psychic-urdlf/">Click Me!</a>

        </div>
    )
}