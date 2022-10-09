import React, { useState } from 'react';

const districtStyle = {
    backgroundColor : "lightgray",
    padding:"20px",
    margin:"10px",
    borderRadius: "10px"
}

const Districts = ({name,speciality}) => {
    const [power,setPower] = useState(1);
    const boostBower = ()=>{
        const newPower = power * 2; 
        setPower(newPower);
    }
    return (
        <div style={districtStyle}>
            <h1>Name:{name} </h1>
            <p>Speciality:{speciality} </p>
            <p>Power: {power} </p>
            <button onClick={boostBower}>Boost Power</button>
        </div>
    );
};

export default Districts;