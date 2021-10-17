import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PollForm from './PollForm';
import PageHeader from './PageHeader';

const SurveyQuestion = (props) => {
    console.log(props.pollInfo)
    console.log(props.pollInfo.skills)

    if (props.petInfo.skills){
        return (
            <div className="card mt-4">
            <ul styles={{ listStyleType: "none" }}>
                <li><span style={{fontWeight: 'bold'}}>Poll Type:</span> {props.pollInfo.type}</li>
                <li><span style={{fontWeight: 'bold'}}>Question:</span> {props.pollInfo.question}</li>
                <li><span style={{fontWeight: 'bold'}}>Response:</span>
                    <ul>
                        {
                            props.pollInfo.skills.map( (item,key) => {
                                return(
                                <li key={key}>
                                    {item}
                                </li>
                                )
                            })
                        }
                    </ul>
                </li>
            </ul>
            </div>
        )
    } else{
        return (
            <ul styles={{ listStyleType: "none" }}>
                <li>Poll Type: {props.pollInfo.type}</li>
                <li>Survey Question: {props.pollInfo.question}</li>
                <li>Response: </li>
            </ul>
        )
    }
}

export default SurveyQuestion