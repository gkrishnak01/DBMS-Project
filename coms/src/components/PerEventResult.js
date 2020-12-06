import React,{useEffect,useState} from 'react'
import Axios from "axios"
import PerPosResult from './PerPosResult';

function PerEventResult(props) 
{
    const [result,setResult] = useState();
    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/view",{
            params:{
                id : props.each.id
            }
        }).then(function (response){
            setResult(response.data)
        });
    }, [])


    var individual;

    function indi()
    {
        individual = result.map((each) => <PerPosResult each={each} />)
    }

    return (
        <div>
            <h2>{props.each.contestName}</h2>
            {result ? indi() : null}
            <table className="table" cellPadding="10px" cellSpacing="20px">
                <tr className="tr">
                    <td><b>Participant ID</b></td>
                    <td><b>Participant Name</b></td>
                    <td><b>Position</b></td>
                </tr>
                 {individual}
            </table>
        </div>
    )
}

export default PerEventResult
