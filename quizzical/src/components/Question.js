import React from "react"
import Buttons from "./Buttons"

export default function Question(props){
    const htmlContent = { __html: props.question};

    function toggleClick(){
    }

    console.log(props.isChecked)


    return(
        <div className="question">
            <h1 dangerouslySetInnerHTML={htmlContent} className="question-text"></h1>
            <Buttons
                    isChecked={props.isChecked} 
                    correct_answer={props.correct_answer}
                    answers={props.answers} toggleClick={toggleClick} />
            <hr></hr>
        </div>
    )
}