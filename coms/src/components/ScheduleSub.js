import React, { useEffect, useState } from 'react'
import Axios from 'axios';

    
function ScheduleSub(props) 
{
    const [venue,setVenue] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/getVenue",{
            params:{
                id :props.each.venueID
            }
        }).then(function (response){
            setVenue(response.data[0])
        });
    }, [])

    return (
        <tr>
            <td className="td">
                {props.each.contestName}
            </td>
            <td className="td">
                {venue ? <p>{venue.venueName} - {venue.location}</p> : null}
            </td>
            <td className="td"> 
                {props.each.date.slice(0,10)}
            </td>
            <td className="td">
                {props.each.time}
            </td>
        </tr>
    )
}

export default ScheduleSub
