import React,{useEffect,useState} from "react"
import PerEventResult from "./PerEventResult"
import Axios from "axios"
import "../App.css"

function ViewResult()
{
    const [contests,setContest] = useState();
    
    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/Scoring_events",{
        }).then(function (response){
            setContest(response.data)
        });
    }, [])

    var individual;

    function indi()
    {
        individual = contests.map((each) => <PerEventResult each={each} />)
    }
    return(
        <div className="box">
            <h1>Results</h1>
            {contests ? indi() : null}
            {individual}
        </div>
    )
}

export default ViewResult