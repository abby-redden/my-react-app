import React from "react";
import astrologyimg from "../../Assets/Astrology.jpg"
import PoetryImg from "../../Assets/Poetry-Explored-Elements-to-Poetry-Artistic-Representation.webp"
import uselessImg from "../../Assets/81qSTJSLlYL._AC_UF1000,1000_QL80_.jpg" 
import Header from "../../Components/Header/header";
import "./landing.css"
import { useState } from "react";

export default function Landing(){
    const [name,setName]= useState("")
    
    function submit (){
        return alert(`Thank you for visiting my site, ${name} :)`)
    }


    return (
        <div id="landing">
           
            <Header message={'Welcome to my page of vast resources'}> </Header>
            <p>In this application you will be able to explore some of my favorite websites and books of various topics that interest me!</p>
            <div className="flex-container">
            <img id="astro-img" src={astrologyimg}/>
            <img id="poem-img" src={PoetryImg}/>
           <img id="useless-img" src={uselessImg}/>
            </div>
            <form onSubmit={submit}>
                <label>Enter your name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />
                </label>
            <button>Submit</button>

            </form>

        </div>
    )
}