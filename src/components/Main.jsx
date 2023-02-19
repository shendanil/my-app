import React from "react"
import reactjs_icon from "../assets/reactjs_icon.png"
import "./Main.css"

export default function Main(props) {
    return (
        <div id="main" className={props.style}>
            <h1 id="title" className={props.style}>Fun facts about React</h1>
            <ul>
                <li className={props.style}>Was first released in 2013</li>
                <li className={props.style}>Was originally created by Jordan Walke</li>
                <li className={props.style}>Has well over 100K stars on GitHub</li>
                <li className={props.style}>It's maintained by Facebook</li>
                <li className={props.style}>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img id="reactjs-icon" alt="" src={reactjs_icon} className={props.style}></img>
        </div>
    )
}