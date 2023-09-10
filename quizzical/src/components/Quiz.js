import React from "react"
import Question from "./Question"

export default function Quiz(){

    const [questions, setQuestions] = React.useState([])
    const [score, setScore] = React.useState(0)
    const [isChecked, setIsChecked] = React.useState(false)

    const shuffleArray = (arr) =>{
        return arr.sort(()=>Math.random() - 0.5)
    }

    React.useEffect(
        ()=>{
            async function getQuestions (){
                const res = await fetch("https://opentdb.com/api.php?amount=5&category=31&type=multiple")
                const data = await res.json();
                const q = await data.results.map(question => {

                    return(
                        <Question 
                            isChecked={isChecked}
                            question={question.question}
                            correct_answer={question.correct_answer}
                            answers={shuffleArray(([...question.incorrect_answers, question.correct_answer]))}
                        />
                    )
                })
                setQuestions(q)
            }
            getQuestions()
        },
        []
    )

    
    function checkAnswers(){
        setIsChecked(true)        
    }

    React.useEffect(() => {
        setQuestions((prevQuestions) =>
        prevQuestions.map((question) => {
            return React.cloneElement(question, { isChecked: true });
        })
      );
      
    }, [isChecked]);

    return(
        <div className="quiz">
            {questions}
            <button className="btn" onClick={checkAnswers}>Check answers</button>
        </div>
    )
}