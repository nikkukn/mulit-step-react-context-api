import React, { useContext, useState } from 'react'
import { Button, TextField } from "@material-ui/core"
import { multiStepContext } from '../StepContext'
import "../App.css"
import DatePicker from "react-datepicker";
import index from "../UploadPicture/index"

import "react-datepicker/dist/react-datepicker.css";

function LastStep() {

  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
  return (
    <div className="container">
      <index/>
      <div>
        <Button variant="contained" color="secondary" onClick={() => setStep(4)}>Back</Button>
        <Button variant="contained" color="primary" onClick={submitData}>Submit</Button>
      </div>
    </div>
  )
}
export default LastStep