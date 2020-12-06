import React, { useState,useEffect } from "react"
import "../App.css"
import Axios from "axios"


function PartReg()
{

    
    const [participantName, setName] = useState("");
    const [id,setID] = useState("");
    const [mobileNo,setMobile] = useState("");
    const [address,setAddress] = useState("");
    const [contests,setContest] =  useState();
    const [participating,setParticipating] = useState([]);
    const [uid,setUid] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/id",{
           params : {
            dash : "participant"}
        }).then(function (response){
            setID("Par"+response.data[0].participant)
            setUid(response.data[0].participant)
        });
    }, [])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/Scoring_events").then(function (response){
            setContest(response.data)
        } );
    }, [])

    function handleClick(event)
    {
        Axios.get("http://localhost:5000/api/insert/participant",{
           params : {
            id : id,
            participantName : participantName,
            address : address,
            mobile : mobileNo,
        uid :uid}
        }).then(function (response){
            for (let index = 0; index < participating.length; index++) {
                Axios.get("http://localhost:5000/api/insert/pping",{
                    params : {
                        id : id,
                        con : participating[index]}
                    }).then(function (response){
                        console.log(response);
                        window.alert(response.data);
                });
            }
            
        });

        event.preventDefault();
        setUid(parseInt(uid)+1)
        setID("Par"+(parseInt(uid)+1));
        setName("");
        setName("");
        setAddress("");
        setMobile("");


    }

    function addCont(event)
    {
        if(event.target.checked)
        {
            setParticipating([...participating,event.target.name])
            console.log(participating)
        }
        else
        {
            let filtered = participating.filter(function(ele){
                return ele !== event.target.name
            });
            setParticipating(filtered);
            console.log(participating)
        }
    }

    var individual;

    function indi()
    {
        individual = contests.map((each) => <div>
                                                <input type="checkbox" name={each.id} onClick={addCont}></input>
                                                    {`${each.id} ${each.contestName}`}
                                            </div> )
    }    


    return(
        <div className="box">
        <h1>Add Participant</h1>
        <form className="form">
            Name
            <input value={participantName}
                    style={{marginLeft : "25px"}} 
                    placeholder="Enter Participant Name"
                    onChange={event => event.target.value === " " ? null : setName(event.target.value)}
                    /> 
            <br />
            <br />
            ID
            <input value = {id} 
            style={{marginLeft : "55px"}}
            disabled={true}
            //onChange={event => event.target.value === " " ? null : setID(event.target.value)}
                    placeholder="Automatically Assigned"
                    /> 
            <br />
            <br />
            Mobile
            <input value={mobileNo}
            style={{marginLeft : "25px"}} 
                    placeholder="Enter Mobile No"
                    onChange={event => event.target.value === " " ? null : setMobile(event.target.value)}
                    /> 
            <br />
            <br />
            Address
            <input value={address}
                    style={{marginLeft : "20px"}} 
                    placeholder="Enter Address"
                    onChange={event => event.target.value === " " ? null : setAddress(event.target.value)}
                    /> 
            <br />
            <br />
            {contests ? indi() : null }
            {individual}
            <button type="submit" className="button" onClick={handleClick} disabled={!participantName || !id || !address || mobileNo.length !== 10}>Submit</button>
        </form>
        <div>Note your Participant ID.<br /> It is required for future references.<br/></div>
    </div>
    )
}

export default PartReg