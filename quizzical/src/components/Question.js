import React from "react"
import Buttons from "./Buttons"
import {nanoid} from "nanoid"


export default function Question(props){
    const htmlContent = { __html: props.question};

    const id = nanoid();

    return(
        <div className="question">
            <h1 dangerouslySetInnerHTML={htmlContent} className="question-text"></h1>
            <Buttons
                    key={id}
                    id={id}
                    questionID={props.id}
                    isChecked={props.isChecked} 
                    correct_answer={props.correct_answer}
                    setIsCorrect={props.setIsCorrect}
                    answers={props.answers} increaseScore={props.increaseScore} />
            <hr></hr>
        </div>
    )
}