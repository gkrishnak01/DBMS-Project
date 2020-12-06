import React, { useState,useEffect } from "react"
import "../App.css"
import Axios from "axios"
import PartListsub from "./PartListsub"


function PartList()
{
    const [resp,setResp] = useState();
    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/PartList").then(function (response){
           setResp(response.data)
        } );
    }, [])

    var individualPart;

    function indi()
    {
     individualPart = resp.map((each) => <PartListsub each={each} />)
    }
    
    return(
        <div className="box">
            <h1>Participant List</h1>
            <table className="table" cellPadding="10px" cellSpacing="20px">
                <tr className="tr">
                    <td><b>Participant ID</b></td>
                    <td><b>Participant Name</b></td>
                    <td><b>Mobile</b></td>
                </tr>
                {resp ? indi() : null}
                 {individualPart}
            </table>
        </div>
    )
}

export default PartList