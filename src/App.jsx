import React, { useState } from 'react'
import './App.css'
import Nav from "./components/Nav"
import Main from "./components/Main"

function App() {

    const [style, setStyle] = useState("dark-mode")
    const [isLight, setIsLight] = useState(false)

    console.log(isLight)
    console.log(style)

    function toggleStyle () {
        setIsLight(prevState => !prevState)
        setStyle(isLight ? "dark-mode" : "light-mode")
    }

    return (
        <div>
            <Nav style={style} handleClick={toggleStyle} />
            <Main style={style} />
        </div>
    )
}

export default App