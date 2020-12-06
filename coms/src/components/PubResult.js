import React,{useState,useEffect} from "react"
import Axios from "axios"
import "../App.css"

function PubResult()
{
    const [contests,setContest] = useState();
    
    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/Scoring_events",{
        }).then(function (response){
            setContest(response.data)
        });
    }, [])

    function eachEvent(params) {
        Axios.get("http://localhost:5000/api/retrieve/resPerEve",{
            params:{
                id :params
            }
        }).then(function (response){
        });
       
    }

    function indi()
    {
        contests.map((each) => eachEvent(each.id))
    }

    return(
        <div className="box" style={{padding : "25px"}}>
            <h1 onClick>Results Published <br /> Click View Result to know more</h1>
            {contests ? indi() : null}
        </div>
    )
}

export default PubResult