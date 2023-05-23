import React from "react";

interface NavButtonProps {
    buttonName: string;
    link: string;
    className: string;
}

export default function NavButton(props:NavButtonProps) {
    return (
        <a href = {props.link}>
            <button className = {props.className}>{props.buttonName}</button>
        </a>
    );
}