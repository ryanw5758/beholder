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
                buttonName= "To Battle"
                link = "/battlepage"
                className = "navButton"
            />
            <NavButton
                buttonName = "Babylon Test"
                link = "/babylontest"
                className = "navButton"
            />
        </div>
    );
}