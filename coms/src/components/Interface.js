import React, { useState } from "react"
import Interface2 from "./Interface2"
import "../App.css"

function Interface()
{
    const [tab,setTab] = useState();

    return(
        <div className="container2">
            <br />
            <br />
            <div>
                <button value="Add Incharge" onClick={ event => {setTab(event.target.value)}} className="button">Add Incharge</button>
                &ensp;&ensp;
                <button value="Venue Allocation" onClick={ event => {setTab(event.target.value)}} className="button">Venue Allocation</button>
                &ensp;&ensp;
                <button value="Add Event" onClick={ event => {setTab(event.target.value)}} className="button">Add Contest</button>
                &ensp;&ensp;
                <button value="Judge Allocation" onClick={ event => {setTab(event.target.value)}} className="button">Judege Allocation</button>
                &ensp;&ensp;
                <button value="Particpant Registration" onClick={ event => {setTab(event.target.value)}}className="button">Participant Registration</button>
                &ensp;&ensp;
                <button value="Participant List" onClick={ event => {setTab(event.target.value)}} className="button">Participant list</button>
                &ensp;&ensp;
                <button value="Schedule" onClick={ event => {setTab(event.target.value)}} className="button">Schedule</button>
                &ensp;&ensp;
                <button value="Scoring" onClick={ event => {setTab(event.target.value)}} className="button">Scoring</button>
                &ensp;&ensp;
                <button value="Individual Score" onClick={ event => {setTab(event.target.value)}} className="button">Individual Score</button>
                &ensp;&ensp;
                <button value="Pub Result" onClick={ event => {setTab(event.target.value)}} className="button">Publish Result</button>
                &ensp;&ensp;
                <button value="View Result" onClick={ event => {setTab(event.target.value)}} className="button">View Result</button>
            </div>
            <Interface2 tab={tab} />
        </div>
    )

}

export default Interface