import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import ScheduleSub from './ScheduleSub';

function Schedule() 
{
    const [schedule,setSchedule] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/schedule",{
        }).then(function (response){
            setSchedule(response.data)
        });
    }, [])

    var individual;

    function indi()
    {
     individual = schedule.map((each) => <ScheduleSub each={each} />)
    }

    return (
        <div className="box">
            <h1>Schedule</h1>
            <table className="table" cellPadding="10px" cellSpacing="20px">
                <tr className="tr">
                    <td><b>Contest</b></td>
                    <td><b>Venue</b></td>
                    <td><b>Date</b></td>
                    <td><b>Time</b></td>
                </tr>
                {schedule ? indi() : null}
                 {individual}
            </table>
        </div>
    )
}
export default Schedule
