import React from "react";
import world from "./images/World.svg"

export default function Header() {
    return (
        <div className="header">
            <img className="header--image" src={world} alt="" />
            <h1 className="header--title">my travel journal.</h1>
        </div>
    )
}