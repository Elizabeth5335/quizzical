import React from "react"
import Buttons from "./Buttons"
import {nanoid} from "nanoid"


export default function Question(props){
    const htmlContent = { __html: props.question};

    console.log(props.isChecked)

    const id = nanoid()
    return(
        <div className="question">
            <h1 dangerouslySetInnerHTML={htmlContent} className="question-text"></h1>
            <Buttons
                    id={id}
                    key={id}
                    isChecked={props.isChecked} 
                    correct_answer={props.correct_answer}
                    answers={props.answers}
                    selected_answer={props.selected_answer}
                    setSelectedAnswer={props.setSelectedAnswer}
                    questionID={props.id}
            />
            <hr></hr>
        </div>
    )
}