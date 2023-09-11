import React from "react"
import Question from "./Question"
import {nanoid} from "nanoid"


export default function Quiz(){

    const [questions, setQuestions] = React.useState([])
    const [score, setScore] = React.useState(0)
    const [isChecked, setIsChecked] = React.useState(false)

    const shuffleArray = (arr) =>{
        return arr.sort(()=>Math.random() - 0.5)
    }
    
    React.useEffect(()=>{
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) => {
                return {...question,  isChecked: isChecked }
            })
        );
    },[isChecked])

    function setIsCorrect(){
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) => {
                return {...question,  isCorrect: !question.isCorrect }
            })
        );
    }

    React.useEffect(
        ()=>{
            async function getData (){
                const res = await fetch("https://opentdb.com/api.php?amount=5&category=31&type=multiple")
                const data = await res.json();
                const q = await data.results.map(question => {
                    return(
                        {
                            isCorrect: false,
                            isChecked: isChecked,
                            question: question.question,
                            correct_answer: question.correct_answer,
                            answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
                        }
                    )
                })
                setQuestions(q)
            }
            getData()
        },
        []
    )

    function getQuestions(){
        return questions.map(
            (question)=>{
                const id = nanoid();
                return <Question 
                    key={id}
                    id={id}
                    setIsCorrect={setIsCorrect}
                    isChecked={question.isChecked}
                    question={question.question}
                    correct_answer={question.correct_answer}
                    increaseScore={increaseScore}
                    answers={question.answers}
                />
            }
        )
    }
    
    function checkAnswers(){
        // let newScore = 0;
        setIsChecked(true)
        // questions.forEach(question => {
        //     if(question.isCorrect) newScore+=1
        // })
        // setScore(newScore)
        // console.log(score)
    }

    function increaseScore(){
        setScore(prevScore => prevScore+1)
        console.log(score)
    }

    return(
        <div className="quiz">
            {getQuestions()}
            <button className="btn" onClick={checkAnswers}>Check answers</button>
        </div>
    )
}