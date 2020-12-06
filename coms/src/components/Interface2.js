import React from "react"
import CheckIndiScore from "./CheckIndiScore"
import Event from "./Event"
import PartReg from "./PartReg"
import PartList from "./PartList"
import Venue from "./Venue"
import Judge from "./Judge"
import Scoring from "./Scoring"
import PubResult from "./PubResult"
import ViewResult from "./ViewResult"
import AddIncharge from "./AddIncharge"
import Schedule from './Schedule'

function Interface2(props)
{
    console.log(props)
    if(props.tab === "Individual Score")
    {
        return(
            <div>
                <CheckIndiScore />
            </div>
            
        )
    }
    else if(props.tab === "Add Event")
    {
        return(
            <div>
                <Event />
            </div>
            
        )
    }
    else if(props.tab === "Particpant Registration")
    {
        return(
            <div>
                <PartReg />
            </div>
            
        )
    }
    else if(props.tab === "Participant List")
    {
        return(
            <div>
                <PartList />
            </div>
            
        )
    }
    else if(props.tab === "Venue Allocation")
    {
        return(
            <div>
                <Venue />
            </div>
            
        )
    }
    else if(props.tab === "Judge Allocation")
    {
        return(
            <div>
                <Judge />
            </div>
            
        )
    }
    else if(props.tab === "Scoring")
    {
        return(
            <div>
                <Scoring />
            </div>
            
        )
    }
    else if(props.tab === "Pub Result")
    {
        return(
            <div>
                <PubResult />
            </div>
            
        )
    }
    else if(props.tab === "View Result")
    {
        return(
            <div>
                <ViewResult />
            </div>
            
        )
    }
    else if(props.tab === "Add Incharge")
    {
        return(
            <div>
                <AddIncharge />
            </div>
            
        )
    }
    else if(props.tab === "Schedule")
    {
        return(
            <div>
                <Schedule />
            </div>
            
        )
    }

    else{
        return(
        <h1>Please Select An Option</h1>)
    }
}

export default Interface2