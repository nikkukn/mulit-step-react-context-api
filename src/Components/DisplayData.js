import React, { useContext } from "react";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import { Button, TextField } from "@material-ui/core";

export default function DisplayData() {
  const { finalData } = useContext(multiStepContext);
  console.log(finalData);
  return (
    <div>
      {finalData.map((data) => (
        <div
          className="container bg-lightGreen shadow-lg mb-5"
          style={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
          key={data.email}
        >
          {/* Trip Details */}
          <div
            className="row bg-danger py-4 px-5 text-white"
            style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
          >
            <div className="col-md-6">
              <h5>1. Traveler Information</h5>
            </div>
          </div>

          <div className="row p-5">
            <div className="col-md-5">
              <div className="row justify-content-between">
                <h6 className="text-blue">Travel Type</h6>
                <p>{data.single || data.annual}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Destination</h6>
                <p>{data.country}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Policy Start Date</h6>
                <p>{data.DateFrom}</p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="row justify-content-between">
                <h6 className="text-blue">Policy Period</h6>
                <p>{data.Duration}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Trip Type</h6>
                <p>{data.singleTrip || data.familyTrip}</p>
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className="row bg-danger py-4 px-5 text-white">
            <div className="col-md-6">
              <h5>2. Personal Details</h5>
            </div>
          </div>

          <div className="row p-5">
            <div className="col-md-5">
              <div className="row justify-content-between">
                <h6 className="text-blue">First Name</h6>
                <p>{data.firstname}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Last Name</h6>
                <p>{data.lastname}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Traveler Email</h6>
                <p>{data.email}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Purpose of Visit</h6>
                <p>{data.purposeOfVist}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">City</h6>
                <p>{data.city}</p>
              </div>
            </div>

            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="row justify-content-between">
                <h6 className="text-blue">CNIC</h6>
                <p>{data.CNIC}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Date of birth</h6>
                <p>10/15/2003</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Passport Number</h6>
                <p>{data.passportNumber}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Traveler Cell Phone</h6>
                <p>{data.phoneNumber}</p>
              </div>
            </div>
          </div>

          {/* Family Details */}
          <div className="row bg-danger py-4 px-5 text-white">
            <div className="col-md-6">
              <h5>3. Family Details</h5>
            </div>
          </div>
          <div className="row pt-5 px-5">
            <div className="col-md-5">
              <div className="row justify-content-between">
                <h6 className="text-blue">Spouse's Name</h6>
                <p>{data.spouseName}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Spouse's Passport No</h6>
                <p>{data.spousePno}</p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="row justify-content-between">
                <h6 className="text-blue">Spouse's CNIC</h6>
                <p>{data.spouseCNIC}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Spouse's DOB</h6>
                <p>{data.spouseDob}</p>
              </div>
            </div>
          </div>
          <br />
          {/* First Child */}
          <div className="row px-5">
            <h5>First Child</h5>
          </div>
          <br />
          <div className="row px-5">
            <div className="col-md-5">
              <div className="row justify-content-between">
                <h6 className="text-blue">Child's Name</h6>
                <p>{data.fChildName}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Child's Passport No</h6>
                <p>{data.fChildPno}</p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="row justify-content-between">
                <h6 className="text-blue">Child's DOB</h6>
                <p>{data.fChildDob}9</p>
              </div>
            </div>
          </div>
          <br />
          {/* Second Child */}
          <div className="row px-5">
            <h5>Second Child</h5>
          </div>
          <br />
          <div className="row px-5">
            <div className="col-md-5">
              <div className="row justify-content-between">
                <h6 className="text-blue">Child's Name</h6>
                <p>{data.sChildName}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Child's Passport No</h6>
                <p>{data.sChildPno}</p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="row justify-content-between">
                <h6 className="text-blue">Child's DOB</h6>
                <p>{data.sChildDob}</p>
              </div>
            </div>
          </div>
          <br />
          {/* Third Child */}
          <div className="row px-5">
            <h5>Third Child</h5>
          </div>
          <br />
          <div className="row px-5">
            <div className="col-md-5">
              <div className="row justify-content-between">
                <h6 className="text-blue">Child's Name</h6>
                <p>{data.tChildName}</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Child's Passport No</h6>
                <p>{data.tChildPno}</p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="row justify-content-between">
                <h6 className="text-blue">Child's DOB</h6>
                <p>{data.tChildDob}</p>
              </div>
            </div>
          </div>
          <br />
          <br />

          {/* Payments Details */}
          <div className="row bg-danger py-4 px-5 text-white">
            <div className="col-md-6">
              <h5>4. Payment Details</h5>
            </div>
          </div>
          <div className="row pt-5 px-5">
            <div className="col-md-5">
              <div className="row justify-content-between">
                <h6 className="text-blue">Name</h6>
                <p>Usama Bhatti</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">Phone Number</h6>
                <p>03136224778</p>
              </div>
              <div className="row flex-column">
                <h6 className="text-blue">Address</h6>
                <p>
                  F-5/2 Evacuee Trust in front of minister's enclave Islamabad.
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="row justify-content-between">
                <h6 className="text-blue">City</h6>
                <p>Islamabad</p>
              </div>
              <div className="row justify-content-between">
                <h6 className="text-blue">State/Province</h6>
                <p>ICT</p>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="row py-4 px-5">
            <div className="col-md-6">
              <h5 className="text-blue">
                <strong>Terms & Conditions</strong>
              </h5>
            </div>
          </div>
          <div className="row px-5">
            <div className="col-md-12">
              <label class="chkbox">
                <p className="ml-5">
                  I am now in good health and have never been treated for or
                  advised that I have heart, disease, abnormal blood pressure,
                  kidney disease, cancer or diabetes.
                </p>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="chkbox">
                <p className="ml-5">
                  I am not traveling to receive medical treatment, diagnoses or
                  consultation.
                </p>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="chkbox">
                <p className="ml-5">
                  I have read and agree to the terms and conditions.
                </p>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <br />
          <br />
          <div className="row justify-content-center mb-4">
            <Button variant="contained" color="secondary" className="m-2">
              Proceed To Pay
            </Button>
            <Button variant="contained" color="primary" className="m-2">
              Edit Details
            </Button>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
