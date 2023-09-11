import React from "react"

export default function Buttons(props){

    const [selected, setSelected] = React.useState("")


    React.useEffect(() => {
        if (selected === props.correct_answer) {
          props.increaseScore();
        }
    }, [props.isChecked & selected]);


    console.log("selected ========= " + selected)


    ///the problem is here

    function setClass(answer){
        let classNm = "answer-btn"
        if(props.isChecked){
            if(props.correct_answer===answer){
                classNm += " correct"
            } else if(answer===selected){
                classNm += " incorrect"
            } 
            else classNm += " not-selected"

            // console.log(answer+"======="+selected)

            if(answer===selected){
                if(answer===props.correct_answer){
                    console.log("I'm here ============")
                    props.increaseScore()
                }
            }   
        }
        else{
            if(answer===selected){
                classNm +=" selected";
            }
            else{
                classNm ="answer-btn"
            }
        }
        return classNm
    }




    function toggleBtnClick(answer){
        setSelected(answer)
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