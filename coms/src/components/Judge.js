import React, {useState, useEffect} from "react"
import "../App.css"
import Axios from "axios"

function Judge()
{

    const [judgeName,setjudgeName] = useState("");
    const [judgeID,setjudgeID] = useState("");
    const [eventID,seteventID] = useState("");
    const [uid,setUid] = useState();
    const [mobileNo,setMobile] = useState();
    const [address,setAddress] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/id",{
           params : {
            dash : "judge"}
        }).then(function (response){
            setjudgeID("Jud"+response.data[0].judge)
            setUid(response.data[0].judge)
        });
    }, [])
   
    function handleClick(event)
    {
        Axios.get("http://localhost:5000/api/insert/judge",{
           params : {
            id : judgeID,
            judgeName : judgeName,
            address : address,
            mobile : mobileNo,
            uid : uid}
        }).then(function (response){
            console.log(response);
            window.alert(response.data);
        });

        //event.preventDefault();
        //setUid(parseInt(uid)+1)
        setjudgeID();
        seteventID("");
        setjudgeName("");
        setMobile("");
        setAddress("");
    }

    return(
        <div className="box">
           <h1>Add Judge</h1>
            <form className="form">
                Judge Name
                <input value={judgeName}
                        style={{marginLeft : "25px"}} 
                        placeholder="Enter Judge Name"
                        onChange={event => event.target.value === " " ? null : setjudgeName(event.target.value)}
                        /> 
                <br />
                <br />
                Judge ID
                <input value={judgeID}
                        style={{marginLeft : "50px"}} 
                        placeholder="Automaticaly Assigned"
                        disabled={true} 
                        /> 
                <br />
                <br />
                Contest ID
                <input value={eventID}
                        style={{marginLeft : "35px"}} 
                        placeholder="Enter Contest ID"
                        onChange={event => event.target.value === " " ? null : seteventID(event.target.value)}
                        /> 
                <br />
                <br />
                Mobile
                <input value={mobileNo}
                        style={{marginLeft : "65px"}} 
                        placeholder="Enter Mobile No"
                        onChange={event => event.target.value === " " ? null : setMobile(event.target.value)}
                        /> 
                <br />
                <br />
                Address
                <input value={address}
                style={{marginLeft : "55px"}} 
                        placeholder="Enter Address"
                        onChange={event => event.target.value === " " ? null : setAddress(event.target.value)}
                        /> 
                <br />
                <br />
                <button type="submit" className="button" onClick={handleClick} disabled={!judgeName || !judgeID || !eventID || !address || mobileNo.length !== 10}>Submit</button>
            </form>
        </div>
    )
}

export default Judge