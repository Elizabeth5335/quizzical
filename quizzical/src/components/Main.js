import React from "react"

export default function Main(props){
    return(
        <div className="main-page">
            <h1 className="main-heading">Quizzical</h1>
            <p className="main-description">This is a quiz about anime!</p>
            <button className="btn btn-main" onClick={props.toggleStartGame}>Start Quiz</button>
        </div>
    )
}