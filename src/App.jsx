import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
/**
 * Challenge: Build the Header component
 */
export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    return (
        <div>
            <Header  darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}/>
            <Meme darkMode={darkMode}/>
        </div>
    )
}