import React,{ useState, useEffect} from 'react'
import "../App.css"
import Axios from "axios"


function AddIncharge() {

    const [inchargeName, setName] = useState("");
    const [id,setID] = useState();
    const [mobileNo,setMobile] = useState("");
    const [address,setAddress] = useState("");
    const [uid,setUid] = useState();

    useEffect(() => {
        Axios.get("http://localhost:5000/api/retrieve/id",{
           params : {
            dash : "incharge"}
        }).then(function (response){
            setID("Inc"+response.data[0].incharge)
            setUid(response.data[0].incharge)
        });
    }, [])



    function handleClick(event)
    {
        Axios.get("http://localhost:5000/api/insert/incharge",{
           params : {
            id : id,
            inchargeName : inchargeName,
            address : address,
            mobile : mobileNo,
            uid : uid}
        }).then(function (response){
            console.log(response);
            window.alert(response.data);
        });

        //event.preventDefault();
        //setUid();
        setID();
        setName("");
        setAddress("");
        setMobile("");


    }

    

    return (
        <div className="box">
            <h1>Add Incharge</h1>
            <form className="form">
                Name
                <input value={inchargeName} 
                        style={{marginLeft : "25px"}}
                        placeholder="Enter Incharge Name"
                        onChange={event => event.target.value === " " ? null : setName(event.target.value)}
                        /> 
                <br />
                <br />
                ID
                <input value = {id}
                    style={{marginLeft : "50px"}} 
                    disabled = {true}
                        placeholder="Automatically Assigned"
                        />
                <br />
                <br />
                Mobile
                <input value={mobileNo}
                        style={{marginLeft : "25px"}} 
                        placeholder="Enter Mobile No"
                        onChange={event => event.target.value === " " ? null : setMobile(event.target.value)}
                        /> 
                <br />
                <br />
                Address
                <input value={address}
                        style={{marginLeft : "10px"}} 
                        placeholder="Enter Address"
                        onChange={event => event.target.value === " " ? null : setAddress(event.target.value)}
                        /> 
                <br />
                <br />
                <button type="submit" className="button" onClick={handleClick} disabled={!inchargeName || !id || !address || mobileNo.length !== 10}>Submit</button>
            </form>
        </div>
    )
}

export default AddIncharge
