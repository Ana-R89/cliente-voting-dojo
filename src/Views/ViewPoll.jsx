import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import PageHeader from '../Components/PageHeader';
import SurveyQuestion from '../Components/SurveyQuestion';

const ViewPoll = (props) => {
    const [pollInfo, setPollInfo] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/polls/" + props.id)
            .then(res => {
                console.log(res);
                setPollInfo(res.data.poll)
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const deletePoll = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/polls/delete/" + pollInfo._id)
            .then(res => {
                console.log("successfully deleted");
                navigate("/");
            }).catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <PageHeader main="Poll a finish" sub={"Details About: " + pollInfo.name} link="/" linkTitle="Home"></PageHeader>
            <button className="btn btn-primary mt-2" onClick={deletePoll}>Delete {pollInfo.name}</button>
            <SurveyQuestion pollInfo={pollInfo}></SurveyQuestion>
        </div>
    )
}

export default ViewPoll;