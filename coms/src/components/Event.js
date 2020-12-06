import React, { useState, useEffect } from "react"
import "../App.css"
import Axios from "axios";

function Event()
{
    const [contestName,setContest] = useState("");
    const [contestID,setContestID] = useState("");
    const [inchargeID,setIncharge] = useState("");
    const [venueID,setVenueID] = useState("");
    const [time,setTime] = useState();
    const [date,setDate] = useState();
    const [uid,setUid] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/id",{
           params : {
            dash : "contest"}
        }).then(function (response){
            setContestID("Con"+response.data[0].contest)
            setUid(response.data[0].contest)
        });
    }, [])

    function handleClick(event)
    {
        //event.preventDefault();

        Axios.get("http://localhost:5000/api/insert/contest",{
           params : {
            inchargeID : inchargeID,
            contestName : contestName,
            contestID : contestID,
            venueID : venueID,
            date : date,
            time :time, 
            uid : uid}
        }).then(function (response){
            console.log(response);
            window.alert(response.data);
        });

        
        setContest("");
        //setUid()
        setContestID();
        setIncharge("");
        setVenueID("");
        setTime("");
        setDate("");
    }

    return(
        <div className="box">
            <h1>Add Contest</h1>
            <form className="form">
                Contest Name
                <input value={contestName}
                        style={{marginLeft : "25px"}} 
                        placeholder="Enter Contest Name"
                        onChange={event => event.target.value === " " ? null : setContest(event.target.value)}
                        /> 
                <br />
                <br />
                Contest ID
                <input value={contestID}
                        style={{marginLeft : "50px"}} 
                        disabled={true}
                        placeholder="Automatically Assigned"
                        /> 
                <br />
                <br />
                Incharge ID
                <input value={inchargeID}
                        style={{marginLeft : "45px"}} 
                        placeholder="Enter InCharge ID"
                        onChange={event => event.target.value === " " ? null : setIncharge(event.target.value)}
                        /> 
                <br />
                <br />
                Venue ID
                <input value={venueID}
                        style={{marginLeft : "65px"}} 
                        placeholder="Enter Venue ID"
                        onChange={event => event.target.value === " " ? null : setVenueID(event.target.value)}
                        /> 
                <br />
                <br />
                Time
                <input value={time}
                        style={{marginLeft : "85px"}} 
                        placeholder="HH:MM 24hr Format"
                        onChange={event => event.target.value === " " ? null : setTime(event.target.value)}
                        /> 
                <br />
                <br />
                Date
                <input value={date}
                        style={{marginLeft : "85px"}}
                        type={Date} 
                        placeholder="YYYY-MM-DD"
                        onChange={event => event.target.value === " " ? null : setDate(event.target.value)}
                        /> 
                <br />
                <br />
                <button type="submit" className="button" onClick={handleClick} disabled={!contestID || !contestName || !inchargeID || !venueID || !time || !date}>Submit</button>
            </form>
        </div>
    )
}

export default Event