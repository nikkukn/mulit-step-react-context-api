import React, { useContext, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import "../App.css";
import DatePicker from "react-datepicker";
import TravelPic from "../UploadPicture/TravelPic";

import "react-datepicker/dist/react-datepicker.css";

function LastStep() {
  const [checkvalue, setCheckvalue] = useState("");

  const onbox = (e) => {
    setCheckvalue(e.target.value);
    setUserData({ ...userData, checkvalue: e.target.value });
  };

  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div className="container">
      <TravelPic />
      <br />
      <div className="row mt-4" onChange={onbox}>
        <label className="chkbox ml-4">
          <input type="radio" name="radio" value="easypaisa" />
          <span className="btn-white">
            <img src="/icons/easypaisa.png" alt="" />
          </span>
        </label>
        <br />
        <label className="chkbox ml-4">
          <input type="radio" name="radio" value="jazzcash" />
          <span className="btn-white">
            <img src="/icons/jazzcash.png" alt="" />
          </span>
        </label>
        <br />
        <label className="chkbox ml-4">
          <input type="radio" name="radio" defaultValue="cashOnDelivery" />
          <span className="btn-white">
            <h6 className="text-blue mt-2">Cash On Delivery</h6>
          </span>
        </label>
        <br />
        {checkvalue === "cashOnDelivery" ? (
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <h6>First Name</h6>
                <input
                  value={userData["firstname"]}
                  onChange={(e) =>
                    setUserData({ ...userData, firstname: e.target.value })
                  }
                  name="firstname"
                  className="w-100 input-field mb-3"
                  placeholder="Enter your first name"
                />

                <h6>Last Name</h6>
                <input
                  value={userData["lastname"]}
                  onChange={(e) =>
                    setUserData({ ...userData, lastname: e.target.value })
                  }
                  name="lastname"
                  className="w-100 input-field mb-3"
                  placeholder="Enter your last name"
                />

                <h6>Phone Number</h6>
                <input
                  value={userData["phoneNumber"]}
                  onChange={(e) =>
                    setUserData({ ...userData, phoneNumber: e.target.value })
                  }
                  name="phone number"
                  className="w-100 input-field mb-3"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="col-md-6">
                <h6>CNIC</h6>
                <input
                  value={userData["firstname"]}
                  onChange={(e) =>
                    setUserData({ ...userData, firstname: e.target.value })
                  }
                  name="firstname"
                  className="w-100 input-field mb-3"
                  placeholder="Receiver's CNIC"
                />

                <h6>Address</h6>
                <input
                  value={userData["lastname"]}
                  onChange={(e) =>
                    setUserData({ ...userData, lastname: e.target.value })
                  }
                  name="lastname"
                  className="w-100 input-field mb-3"
                  placeholder="Enter your home address"
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <br />
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setStep(4)}
        >
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={submitData}>
          Submit
        </Button>
      </div>
    </div>
  );
}
export default LastStep;
