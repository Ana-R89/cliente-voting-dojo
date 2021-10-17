import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import UpdatePollForm from '../Components/UpdatePollForm';
import PageHeader from '../Components/PageHeader';
import SurveyQuestion from '../Components/SurveyQuestion';

const UpdatePoll = (props) => {
    const [existingInfo, setExistingInfo] = useState({})
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/polls/" + props.id)
        .then(res=>{
            console.log(res)
            setExistingInfo(res.data.poll);
        }).catch(err=>{
            console.log(err);
        })
    }, [])
    const backHomeLink = () => {
        return (
            <Link to="/">back to home</Link>
        )
    }
    const submitAction = (
        pollName, pollType, surveyQuestion, pollResponse, setPollNameError,
        setSurveyQuestionError, setPollTypeError) => {
        let errors = []
        console.log(pollResponse)
        axios.put("http://localhost:8000/api/polls/update/" + props.id,
            {
                name: pollName,
                type: pollType,
                question: surveyQuestion,
                response: pollResponse
            })
            .then(data => {
                console.log(data);
                navigate('/')
            }).catch(err => {
                if (err.response){
                    console.log(err.response.data)
                    if (err.response.data.errors.name){
                        setPollNameError(err.response.data.errors.name.message)
                    }
                    if (err.response.data.errors.question){
                        setSurveyQuestionError(err.response.data.errors.question.message)
                    }
                    if (err.response.data.errors.type){
                        setPollTypeError(err.response.data.errors.type.message)
                    }
                    return errors
                } else if (err.request){
                    console.log(err.request)
                } else{
                    console.log("something else");
                }
            })
        console.log("test2")
        return errors
    }
    return (
        <div>
            <PageHeader main="Voting Dojo" sub={"Edit " + existingInfo.name} link="/" linkTitle="Back to Home"></PageHeader>
            <UpdatePollForm buttonText="Update Poll" formAction={submitAction} existingInfo={existingInfo} response={existingInfo.response}></UpdatePollForm>
        </div>
    )
}

export default UpdatePoll