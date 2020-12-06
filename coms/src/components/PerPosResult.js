import React,{useState,useEffect} from 'react'
import Axios from "axios"

function PerPosResult(props) 
{
    const [name,setName] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/getName",{
            params:{
                id :props.each.pid
            }
        }).then(function (response){
            setName(response.data[0].name)
        });
    }, [])

    return (
        <tr>
            <td>
                {props.each.pid}
            </td>
            <td>
                {name}
            </td>
            <td>
                {props.each.pos}
            </td>
        </tr>
    )
}

export default PerPosResult
