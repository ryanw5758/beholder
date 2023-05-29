import { useState } from "react";
import NavButton from "./NavButton";

export default function Navbar() {
    return (
        <div className = "navBar">
            <NavButton 
                buttonName = "Home"
                link = "./"
                className = "navButton"
            />
            <NavButton 
                buttonName = "Documents"
                link = "#"
                className = "navButton"
            />
            <NavButton 
                buttonName = "Support"
                link = "#"
                className = "navButton"
            />
            <NavButton
                buttonName = "Battle"
                link = "/babylontest"
                className = "navButton"
            />
        </div>
    );
}