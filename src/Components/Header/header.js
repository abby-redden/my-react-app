import React from "react";
import "./header.css"

export default function Header ({message}){
    return(
        <div className="header-div">
        <h1>{message}</h1>
        </div>
    )
}