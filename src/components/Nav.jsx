import React from "react"
import logo from "../assets/logo.png"
import Toggle from "./Toggle"
import './Nav.css'

export default function Nav (props) {

    return (
        <nav className={props.style}>
            <div id="logo">
                <img alt="" src={logo} />
                <h1>ReactFacts</h1>
            </div>
            <p className={props.style} id="project-info">React Course – Project 1</p>
            <Toggle style={props.style} handleClick={props.handleClick} />
        </nav>
    )
}