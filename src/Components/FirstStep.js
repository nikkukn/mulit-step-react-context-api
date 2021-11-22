import React, { useContext, useState, UserDispatchContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import "../App.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function FirstStep() {
  const {
    setStep,
    userData,
    setUserData,
    childselect,
    checkvalues,
    setCheckvalues,
    setChildselect,
  } = useContext(multiStepContext);

  const [startDate, setStartDate] = useState(new Date());

  const childselected = (e) => {
    setChildselect(e.target.value);
    setUserData({ ...userData, childselect: e.target.value });
  };

  const onbox = (e) => {
    setCheckvalues(e.target.value);
    setUserData({ ...userData, checkvalue: e.target.value });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 travel-form">
          <h6>Purpose Of Visit</h6>
          <div className="d-flex">
            <label className="chkbox">
              <p className="ml-4">Single</p>
              <input
                type="radio"
                name="radio"
                value={userData["single"]}
                // checked=
                onChange={(e) =>
                  setUserData({ ...userData, single: e.target.value })
                }
              />
              <span className="checkmark"></span>
            </label>
            <label className="chkbox ml-4">
              <p className="ml-4">Annual (Multi Trip)</p>
              <input
                type="radio"
                name="radio"
                value={userData["annual"]}
                // checked=
                onChange={(e) =>
                  setUserData({ ...userData, annual: e.target.value })
                }
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6 travel-form">
          <h6>Purpose Of Visit</h6>
          <select
            value={userData["purposeOfVist"]}
            onChange={(e) =>
              setUserData({ ...userData, purposeOfVist: e.target.value })
            }
            className="w-100 input-field mb-3"
            name="purposeOfVist"
          >
            <option value="">-- select --</option>
            <option value="Business">Business</option>
            <option value="Family Trip">Family Tour</option>
            <option value="Immigration">Immigration</option>
          </select>

          <h6>Duration</h6>
          <select
            value={userData["Duration"]}
            onChange={(e) =>
              setUserData({ ...userData, Duration: e.target.value })
            }
            className="w-100 input-field mb-3"
            name="Duration"
            id="duration"
          >
            <option value="">-- Select --</option>
            <option value="2 Weeks">2 Weeks</option>
            <option value="3 Weeks">3 Weeks</option>
            <option value="4 Weeks">4 Weeks</option>
            <option value="5 Weeks">2 Months</option>
            <option value="6 Weeks">6 Months</option>
            <option value="7 Weeks">1 year</option>
            <option value="8 Weeks">2 years</option>
          </select>

          <h6>CNIC</h6>
          <input
            value={userData["CNIC"]}
            onChange={(e) => setUserData({ ...userData, CNIC: e.target.value })}
            name="CNIC"
            className="w-100 input-field mb-3"
            placeholder="Enter your cnic"
          />
        </div>

        <div className="col-md-6 travel-form">
          <h6>Date From</h6>
          <DatePicker
            value={userData["DateFrom"]}
            className="w-100 input-field mb-3"
            selected={startDate}
            onChange={
              ((e) => setUserData({ ...userData, DateFrom: e.target.value }),
              (date) => setStartDate(date))
            }
          />

          <h6>Passport Number</h6>
          <input
            value={userData["passportNumber"]}
            onChange={(e) =>
              setUserData({ ...userData, passportNumber: e.target.value })
            }
            name="passportnumber"
            className="w-100 input-field mb-3"
            placeholder="Enter your passport number."
          />

          <h6>Date Of Birth</h6>
          <DatePicker
            className="w-100 input-field mb-3"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-md-6 travel-form">
          <h6>Covid 19</h6>
          <div className="d-flex">
            <label className="chkbox">
              <p className="ml-4">Not Covered</p>
              <input
                type="radio"
                name="covid Uncovered"
                value="covid Uncovered"
                checked={userData["covidUnc"]}
                onChange={(e) =>
                  setUserData({ ...userData, covidUnc: e.target.value })
                }
              />
              <span className="checkmark"></span>
            </label>
            <label className="chkbox ml-4">
              <p className="ml-4">Covered (Covered(15% Prem. Increase))</p>
              <input
                type="radio"
                name="covid"
                value="Covered"
                checked={userData["covid"]}
                onChange={(e) =>
                  setUserData({ ...userData, covid: e.target.value })
                }
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="row mt-2 mb-5">
        <div className="col-md-6 travel-form">
          <h6>Travel Type</h6>
          <div className="d-flex">
            <label className="chkbox">
              <p className="ml-4">Single Trip</p>
              <input
                type="radio"
                name="Single Trip"
                value="Single Trip"
                checked={userData["singleTrip"]}
                onChange={(e) =>
                  setUserData({ ...userData, singleTrip: e.target.value })
                }
              />
              <span className="checkmark"></span>
            </label>
            <label className="chkbox ml-4">
              <p className="ml-4">Family Trip</p>
              <input
                type="radio"
                name="Family Trip"
                value="Family Trip"
                checked={userData["familyTrip"]}
                onChange={(e) =>
                  setUserData({ ...userData, familyTrip: e.target.value })
                }
              />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <br />
      <div className="row" onChange={onbox}>
        <label className="chkbox ml-4">
          <p className="ml-4">Mango</p>
          <input type="radio" name="radio" value="mango" />
          <span className="checkmark"></span>
        </label>
        <label className="chkbox ml-4">
          <p className="ml-4">Apple</p>
          <input type="radio" name="radio" value="apple" />
          <span className="checkmark"></span>
        </label>
        <label className="chkbox ml-4">
          <p className="ml-4">Dango</p>
          <input type="radio" name="radio" defaultValue="dango" />
          <span className="checkmark"></span>
        </label>
      </div>
      {checkvalues === "dango" ? (
        <>
          <label>Select number of childrens</label>
          <select
            value={userData["childselect"]}
            onChange={childselected}
            className="w-100 input-field mb-3"
            name="childselect"
            id="childselect"
          >
            <option value="" selected>
              0
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </>
      ) : (
        "worng"
      )}
      <br />

      <Button variant="contained" color="secondary" onClick={() => setStep(1)}>
        Back
      </Button>
      <Button variant="contained" color="primary" onClick={() => setStep(3)}>
        Next
      </Button>
    </div>
  );
}
export default FirstStep;
