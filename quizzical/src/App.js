import React from "react"
import "./styles.css"
import spotBlue from "./images/spot-blue.png"
import spotYellow from "./images/spot-yellow.png"
import Main from "./components/Main"
import Quiz from "./components/Quiz"


export default function App(){

    const [gameStarted, setGameStarted] = React.useState(false)

    function toggleStartGame(){
        setGameStarted(prevGameStarted => !prevGameStarted);
    }

    
    return(
        <div className="main">
            <img className="spot-yellow bg-image" src={spotYellow} alt=""/>
            <img className="spot-blue bg-image" src={spotBlue} alt=""/>

            {gameStarted ? <Quiz /> : <Main toggleStartGame={toggleStartGame} />}
        </div>
    )
}