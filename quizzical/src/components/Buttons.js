import React from "react"

export default function Buttons(props){

    const [selected, setSelected] = React.useState("")

    function setClass(answer){
        let classNm = "answer-btn"
        if(props.isChecked){
            if(props.correct_answer===answer){
                classNm += " selected correct"
                }
                else if(answer===selected){
                    classNm += " selected incorrect"
                } 
            else classNm += " not-selected"
        }
        else{
            if(answer===selected){
                classNm +=" selected"
            }
            else{
                classNm ="answer-btn"
            }
        }
        return classNm
    }

    function toggleBtnClick(answer){
        setSelected(answer)
        props.toggleClick(answer)
    }

    function setBtns(){
        return props.answers.map((answer)=>{
            return <button  className={setClass(answer)} 
                            onClick={()=>toggleBtnClick(answer)}
                    > {answer}</button>
        })
    }

    return(  
        <div className="answers">
            {setBtns()}
        </div>
    )
}