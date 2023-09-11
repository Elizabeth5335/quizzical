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

    React.useEffect(
        ()=>{
            async function getQuestions (){
                const res = await fetch("https://opentdb.com/api.php?amount=5&category=31&type=multiple")
                const data = await res.json();
                let q = [];

                data.results.forEach(question =>{
                    const id = nanoid()
                    q.push({
                      id: id,
                      key: id, 
                      answers: shuffleArray([...question.incorrect_answers, question.correct_answer]), 
                      question: question.question, 
                      correct_answer: question.correct_answer, 
                      selected_answer: null, 
                      isChecked: false
                      }
                      )
                  })
                setQuestions(q)
            }
            if (isChecked === false) getQuestions()
        },
        [isChecked]
    )

    function generateQuestions(){
        return questions ? questions.map(question => {
            return(
                <Question 
                    key={question.id}
                    id={question.id}
                    isChecked={isChecked}
                    question={question.question}
                    correct_answer={question.correct_answer}
                    answers={question.answers}
                    selected_answer={question.selected_answer}
                    setSelectedAnswer={setSelectedAnswer}
                />
            )
        }) : []
    }


    function setSelectedAnswer(answer, questionID){
        setQuestions((prevQuestions) =>
            prevQuestions.map((question) => {
                return question.id===questionID ? {...question,  selected_answer: answer } : question;
            })
      );
      console.log(questions)
    }

    function checkAnswers(){
        setIsChecked(true)  
        let newScore = 0;
        questions.forEach(question => {
            if(question.selected_answer===question.correct_answer) newScore+=1
        });
        setScore(newScore)
    }

    function newGame(){
        setIsChecked(false)  
        setScore(0)
    }

    React.useEffect(() => {
        setQuestions((prevQuestions) =>
        prevQuestions.map((question) => {
            return {...question,  isChecked: true };
        })
      );
      
    }, [isChecked]);


    return(
        <div className="quiz">
            {generateQuestions()}
            <button className="btn result-btn" onClick={isChecked ? newGame : checkAnswers}>{isChecked? "Play again" : "Check answers"}</button>
            {isChecked&&<h3>Score: {score}/5</h3>}
        </div>
    )
}