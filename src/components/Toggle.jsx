import React from "react"

export default function Toggle(props) {


    return (
        <div className="toggle">
                <p className={props.style} id="text-light">Light</p>
                <div onClick={props.handleClick} className={props.style} id="toggle-bg">
                    <div className={props.style} id="toggle-circle"></div>
                </div>
                <p className={props.style} id="text-dark">Dark</p>
            </div>
    )
}