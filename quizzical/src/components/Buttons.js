import React from "react"
import {nanoid} from "nanoid"

export default function Buttons(props){

    function setClass(answer){
        let classNm = "answer-btn"
        if(props.isChecked){
            if(props.correct_answer===answer){
                classNm += " selected correct"
            }
            else if(answer===props.selected_answer){
                classNm += " selected incorrect"
            } 
            else classNm += " not-selected"
        }
        else{
            answer===props.selected_answer ? 
                classNm +=" selected" :
                classNm ="answer-btn"
        }
        return classNm
    }
    

    function toggleBtnClick(answer){
        if (props.isChecked){
            return
        }
        props.setSelectedAnswer(answer, props.questionID)
    }

    return(  
        <div className="answers">
            {
                
                props.answers.map((answer)=>{
                    const htmlContent = { __html: answer};
                    return <button  
                                    key={nanoid()}
                                    dangerouslySetInnerHTML={htmlContent} 
                                    className={setClass(answer)} 
                                    onClick={()=>toggleBtnClick(answer)}
                            ></button>
                })
            }
        </div>
    )
}