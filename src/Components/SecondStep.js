import React, { useContext, useState } from 'react'
import { Button, TextField } from "@material-ui/core"
import { multiStepContext } from '../StepContext'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function SecondStep() {

    const { setStep } = useContext(multiStepContext);   

    return (
        <div className="container">

            <div className="container">
                <h2 className="text-blue mb-4">02. Choose Package</h2>
                <div className="row mb-4 p-3">
                    <div className="col-md-4 px-4" >
                        <PackageCard title="Gold" color="#FFB703" bgcolor="#FFEDBF" evalue="Gold" />
                    </div>
                    <div className="col-md-4 px-4"  >
                        <PackageCard
                            title="Diamond" color="#061AA8" bgcolor="#E8E8FE" evalue="Diamond"
                        />
                    </div>
                </div>
            </div>

            <div>
                <Button variant="contained" color="secondary" onClick={() => setStep(1)}>Back</Button>
                <Button variant="contained" color="primary" onClick={() => setStep(4)}>Next</Button>
            </div>
        </div>
    )
}

export default SecondStep


function PackageCard({ title, color, bgcolor, evalue }) {

    const { userData, setUserData } = useContext(multiStepContext);

    return (
        <label className="chkbox">
            <div className="package-card">
                <input 
                    type="radio" 
                    name="radio" 
                    value={evalue}
                    checked={userData[evalue]}
                    onChange={(e) => setUserData({ ...userData, "evalue": e.target.value })}
                />
                <div className="inner-card p-3" style={{ backgroundColor: bgcolor }}>
                    <h3 style={{ color: color, fontWeight: "700" }}>{title}</h3>
                    <div className="d-flex mb-2">
                        <h1>500,000 </h1>
                        <p className="ml-2">pkr</p>
                    </div>
                    <div className="row py-4 px-3 opacity">
                        <h5>pkr 30,000/Trip</h5>
                    </div>

                    <h6 className="mt-3" style={{ fontWeight: "900px" }}>PLAN FEATURES</h6>
                    <ul>
                        <li>Covers personal accident</li>
                        <li>Accidental medical reimbursement</li>
                        <li>Emergency medical evacuation cover</li>
                        <li>Repatritation of moral remains cover</li>
                        <li>Loss of baggage cover</li>
                        <li>Loss of C.N.I.C cover</li>
                    </ul>

                    {/* <button className="p-3 w-100 mb-3" style={{backgroundColor:color}}>Next</button> */}
                </div>
            </div>
        </label>
    )
}
