import React, { useState, useEffect } from "react"
import "../App.css"
import Axios from "axios"

function Venue()
{


    const [venueID,setVenueID] = useState("");
    const [venueName,setVenueName] = useState("");
    const [location,setLocation] = useState("");
    const [uid,setUid] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/id",{
           params : {
            dash : "venue"}
        }).then(function (response){
            setVenueID("Ven"+response.data[0].venue)
            setUid(response.data[0].venue)
        });
    }, [])

    function handleClick(event)
    {
        //event.preventDefault();

        Axios.get("http://localhost:5000/api/insert/venue",{
           params : {
            venueID : venueID,
            venueName : venueName,
            location : location,
            uid : uid}
        }).then(function (response){
            console.log(response);
            window.alert(response.data);
        });

        //setUid(parseInt(uid)+1)
        setVenueID();
        setLocation("");
        setVenueName("");


    }
    
    return(
        <div className="box">
            <h1>Add Venue</h1>
            <form className="form">
                Name
                <input value={venueName}
                        style={{marginLeft : "50px"}} 
                        placeholder="Enter Venue Name"
                        onChange={event => event.target.value === " " ? null : setVenueName(event.target.value)}
                        /> 
                <br />
                <br />
                Venue ID
                <input value={venueID} 
                        style={{marginLeft : "30px"}}
                //onChange={event => event.target.value === " " ? null : setVenueID(event.target.value)}
                        placeholder="Automatically Assigned"
                        disabled = {true}
                        /> 
                <br />
                <br />
                Location
                <input value={location}
                        style={{marginLeft : "30px"}} 
                        placeholder="Enter Location"
                        onChange={event => event.target.value === " " ? null : setLocation(event.target.value)}
                        /> 
                <br />
                <br />
                <button type="submit" className="button" onClick={handleClick} disabled={!venueID || !venueName || !location}>Submit</button>
            </form>
        </div>
    )
}

export default Venue