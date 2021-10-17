import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.development';


const PollForm = (props) => {
    const [pollName, setPollName] = useState("")
    const [pollType, setPollType] = useState("")
    const [surveyQuestion, setSurveyQuestion] = useState("")
    const [response1, setResponse1] = useState("")
    const [response2, setResponse2] = useState("")
    const [response3, setResponse3] = useState("")
    const [pollResponse, setPollResponse] = useState([])
    const [pollNameError, setPollNameError] = useState("")
    const [pollTypeError, setPollTypeError] = useState("")
    const [surveyQuestionError, setSurveyQuestionError] = useState("")
    const submitHandler = (e) =>{
        e.preventDefault()
        setPollNameError("");
        setSurveyQuestionError("");
        setPollTypeError("");
        console.log(response1);
        console.log(pollResponse);
        setPollResponse([...pollResponse,"Test"])
        let errors = props.formAction(pollName, pollType, surveyQuestion, [response1,response2,response3], setPollNameError, setSurveyQuestionError, setPollTypeError)
        if (errors > 0){
            console.log(errors)
            for (let i = 0; i < errors.length; i++){
                if (errors[i].cat == "name"){
                    setPollNameError(errors[i].message)
                }
                else if (errors[i].cat == "question"){
                    setSurveyQuestionError(errors[i].message)
                } else if (errors[i].cat == "type"){
                    setPollTypeError(errors[i].message)
                }
            }
        }
    }
    return (
        <form onSubmit={submitHandler}>
         <div className="container mt-5">
         <div className="form-group mt-2">
            <label>
                Poll Name: 
                <input onChange={e=>setPollName(e.target.value)} value={pollName}></input>
                {
                    pollNameError ?
                    <p style={{color:'red'}}>{pollNameError}</p>
                    :""
                }
            </label> </div>
            <div className="form-group mt-2">
            <label>
                Poll Type: 
                <input onChange={e=>setPollType(e.target.value)} value={pollType}></input>
                {
                    pollTypeError ?
                    <p style={{color:'red'}}>{pollTypeError}</p>
                    :""
                }
            </label> </div>
            <div className="form-group mt-2">
            <label>
                SurveyQuestion: 
                <input onChange={e=>setSurveyQuestion(e.target.value)} value={surveyQuestion}></input>
                {
                    surveyQuestionError ?
                    <p style={{color:'red'}}>{surveyQuestionError}</p>
                    :""
                }
            </label> </div>
            <div className="form-group mt-2">
            <label>
                Response 1: 
                <input onChange={e=>setResponse1(e.target.value)} value={response1}></input>
            </label> </div>
            <div className="form-group mt-2">
            <label>
                Response 2:  
                <input onChange={e=>setResponse2(e.target.value)} value={response2}></input>
            </label> </div>
            <div className="form-group mt-2">
            <label>
                Response 3:
                <input onChange={e=>setResponse3(e.target.value)} value={response3}></input>
            </label> </div>
            <button>{props.buttonText}</button>
        </div>
        </form>
    )
}

export default PollForm
