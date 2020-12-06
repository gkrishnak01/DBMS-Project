import React, { useState } from "react"
import "../App.css"
import Axios from "axios";

function CheckIndiScore()
{
    const [participantID,setParticipant] = useState();
    const [contestID,setContest] = useState();
    const [score,setScore] = useState("Unavailable.Check Credentials or Check later");
    const [flag,setFlag] = useState(false);

    const handleClick = event => {
        setFlag(false);
        event.preventDefault();
        Axios.get("http://localhost:5000/api/retrieve/indiScore",{
           params : {
            pid : participantID,
            cid :contestID}
        }).then(function (response){
            if(response.data[0])
                setScore(response.data[0].score)
            setFlag(true)
        });

    }

    return(
        <div className="box">
            <h1>Check Individual Score</h1>
            <form className="form">
                Participant ID
                <input value={participantID}
                        style={{marginLeft : "25px"}} 
                        placeholder="Enter Participant ID"
                        onChange={event => event.target.value === " " ? null : setParticipant(event.target.value)}
                        /> 
                <br />
                <br />
                Contest ID
                <input value = {contestID}
                style={{marginLeft : "45px"}} 
                onChange={event => event.target.value === " " ? null : setContest(event.target.value)}
                        placeholder="Enter Contest ID"
                        /> 
                <br />
                <br />
                <button type="submit" className="button" onClick={handleClick} disabled={!participantID || !contestID}>Check Score</button>
                {flag ? <h3>Score : {score}</h3> : null}
            </form>
        </div>
    )
}

export default CheckIndiScore