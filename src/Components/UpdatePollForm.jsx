import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const UpdatePollForm = (props) => {
    const [pollName, setPollName] = useState("")
    const [pollType, setPollType] = useState("")
    const [pollDescription, setPollDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [pollSkills, setPollSkills] = useState([])
    const [pollNameError, setPollNameError] = useState("")
    const [pollTypeError, setPollTypeError] = useState("")
    const [pollDescriptionError, setPollDescriptionError] = useState("")

    useEffect(() => {
        if (props.existingInfo){
            // console.log(props.existingInfo.skills)
            setPollName(props.existingInfo.name)
            setPollDescription(props.existingInfo.description)
            setPollType(props.existingInfo.type)
            if (props.skills){
                console.log(props.skills)
                setPollSkills(props.skills)
                setSkill1(pollSkills[0])
                setSkill2(pollSkills[1])
                setSkill3(pollSkills[2])
            }
        }
        
    }, [])
    const submitHandler = (e) =>{
        e.preventDefault()
        setPollNameError("");
        setPollDescriptionError("");
        setPollTypeError("");
        setPollSkills([skill1,skill2,skill3]);
        let errors = props.formAction(pollName, pollType, pollDescription, [skill1,skill2,skill3], setPollNameError, setPollDescriptionError, setPollTypeError)
        if (errors > 0){
            console.log(errors)
            for (let i = 0; i < errors.length; i++){
                if (errors[i].cat == "name"){
                    setPollNameError(errors[i].message)
                }
                else if (errors[i].cat == "description"){
                    setPollDescriptionError(errors[i].message)
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
                <input onChange={e=>setPollName(e.target.value)} value={pollName} placeholder={props.existingInfo.name}></input>
                {
                    pollNameError ?
                    <p style={{color:'red'}}>{pollNameError}</p>
                    :""
                }
            </label> </div>
            <div className="form-group mt-2">
            <label>
                Poll Type: 
                <input onChange={e=>setPollType(e.target.value)} value={pollType} placeholder={props.existingInfo.type}></input>
                {
                    pollTypeError ?
                    <p style={{color:'red'}}>{pollTypeError}</p>
                    :""
                }
            </label> </div>
            <div className="form-group mt-2">
            <label>
                Poll Description: 
                <input onChange={e=>setPollDescription(e.target.value)} value={pollDescription} placeholder={props.existingInfo.description}></input>
                {
                    pollDescriptionError ?
                    <p style={{color:'red'}}>{pollDescriptionError}</p>
                    :""
                }
            </label> </div>
            <div className="form-group mt-2">
            <label>
                Skill 1: 
                <input onChange={e=>setSkill1(e.target.value)} value={skill1} placeholder={skill1}></input>
            </label> </div>
            <div className="form-group mt-2">
            <label>
                Skill 2: 
                <input onChange={e=>setSkill2(e.target.value)} value={skill2} placeholder={skill2}></input>
            </label> </div>
            <div className="form-group mt-2">
            <label>
                Skill 3: 
                <input onChange={e=>setSkill3(e.target.value)} value={skill3} placeholder={skill3}></input>
            </label> </div>
            <button>{props.buttonText}</button>
        </div>
        </form>
    )
}

export default UpdatePollForm