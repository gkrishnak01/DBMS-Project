import React, {useEffect, useState} from "react"
import Axios from "axios"
import ContList from "./ContList"
import ScorePartList from "./ScorePartList"

function Scoring()
{

    const [resp_events,setResp] = useState();
    const [cont,setCont] = useState("Select");
    const [participants,setPart] = useState();
    const [part,setPartIndi] = useState();
    const [score,setScore] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/Scoring_events").then(function (response){
           setResp(response.data)
        } );
    }, [])

    var individual;

    function indi()
    {
        individual = resp_events.map((each) => <ContList each={each} />)
    }


    const handleChange = (event) => {
            setPartIndi("");
            if(event.target.value)
            {
                Axios.get("http://localhost:5000/api/retrieve/Scoring_particpants",{
            params : {
                conId : event.target.value
            }
            }).then(function (response){
                console.log(response.data);
                setPart(response.data)
            });
        }
        setCont(event.target.value)
    }

    var individual2;

    function indi2()
    {

        individual2 = participants.map((each) => <ScorePartList each={each} />)
    }

    const updateScore = (event) =>{

        Axios.get("http://localhost:5000/api/retrieve/updateScore",{
           params : {
            score : score,
            pid : part,
            conID : cont
        }
        }).then(function (response){
            console.log(response.data);
        });
        
        event.preventDefault();
        console.log(score);
        setPartIndi("");
        setScore("");
    }

    
    return(
        <div className="box">
            <h1>Scoring</h1>
            <form className="form">
                <select name = "Gk" onChange={handleChange}>
                    <option>Select Contest</option>
                    {resp_events ? indi() : null}
                    {individual}
                </select>
                &ensp;&ensp;
                <select value={part} onChange={event => setPartIndi(event.target.value)}>
                    <option value = {null}>Select Participant</option>
                    {participants ? indi2() : null}
                    {individual2}
                </select>
                <br />
                <br />
                {part ? <div>Score&ensp;&ensp;&ensp;
                            <input value={score} 
                                type={Number}
                                placeholder="Enter Score out of 100"
                                onChange={event => event.target.value === " " || event.target.value > 100? null : setScore(event.target.value)}
                                /> 
                            <br />
                            <br />
 
                            <button type="submit" className="button" onClick={updateScore} disabled={!score || score < 0 || score > 100}>Update Score </button>
                        </div> : null}
            </form>
            
        
        </div>
    )
}

export default Scoring