import React, { useContext } from 'react'
import { Button, Textinput } from "@material-ui/core"
import { multiStepContext } from '../StepContext'


function ThirdStep() {
    const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
    return (
        <div className="container">
            <h2 className="text-blue mb-4">03. Personal Information</h2>
            <div className="row">
                <div className="col-md-6 travel-form">
                    <h6>First Name</h6>
                    <input
                        value={userData['firstname']}
                        onChange={(e) => setUserData({ ...userData, "firstname": e.target.value })}
                        name="firstname"
                        className="w-100 input-field mb-3"
                        placeholder="Enter your first name"
                    />

                    <h6>Last Name</h6>
                    <input
                        value={userData['lastname']}
                        onChange={(e) => setUserData({ ...userData, "lastname": e.target.value })}
                        name="lastname"
                        className="w-100 input-field mb-3"
                        placeholder="Enter your last name"
                    />
                    
                    <h6>Phone Number</h6>
                    <input
                        value={userData['phoneNumber']}
                        onChange={(e) => setUserData({ ...userData, "phoneNumber": e.target.value })}
                        name="phone number"
                        className="w-100 input-field mb-3"
                        placeholder="Enter your phone number"
                    />


                    <h6>Benificary Name</h6>
                    <input
                        value={userData['beniciaryname']}
                        onChange={(e) => setUserData({ ...userData, "beniciaryname": e.target.value })}
                        name="benificary"
                        className="w-100 input-field mb-3"
                        placeholder="Enter benificary name"
                    />
                </div>

                <div className="col-md-6 travel-form">

                    <h6>State Province</h6>
                    <input
                        value={userData['province']}
                        onChange={(e) => setUserData({ ...userData, "province": e.target.value })}
                        name="province"
                        className="w-100 input-field mb-3"
                        placeholder="Selct your province/state"
                    />

                    <h6>City</h6>
                    <input
                        value={userData['city']}
                        onChange={(e) => setUserData({ ...userData, "city": e.target.value })}
                        name="city"
                        className="w-100 input-field mb-3"
                        placeholder="Select your city."
                    />

                    <h6>Benificary Address</h6>
                    <input
                        value={userData['benificaryaddress']}
                        onChange={(e) => setUserData({ ...userData, "benificaryaddress": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter benificary address"
                    />
                </div>
            </div>

            <br />
            <h3 className="text-blue mb-4">Family Information</h3>
            <div className="row">
                <div className="col-md-6 travel-form">
                    <h6>Spouse's Name</h6>
                    <input
                        value={userData['spouseName']}
                        onChange={(e) => setUserData({ ...userData, "spouseName": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter spouse's name"
                    />

                    <h6>Spouse's DOB</h6>
                    <input
                        value={userData['spouseDob']}
                        onChange={(e) => setUserData({ ...userData, "spouseDob": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter spouse's date of birth"
                    />
                </div>


                <div className="col-md-6 travel-form">
                    <h6>Spouse's Passport No</h6>
                    <input
                        value={userData['spousePno']}
                        onChange={(e) => setUserData({ ...userData, "spousePno": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter spouse's passport no"
                    />

                    <h6>Spouse's CNIC</h6>
                    <input
                        value={userData['spouseCNIC']}
                        onChange={(e) => setUserData({ ...userData, "spouseCNIC": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter spouse's CNIC"
                    />
                </div>
            </div>

            <br />
            <h3 className="text-blue mb-4">Children Information</h3>
            <div className="row">
                {/* First Child */}
                <div className="col-md-6 travel-form">
                    <h6>1st Child Name</h6>
                    <input
                        value={userData['fChildName']}
                        onChange={(e) => setUserData({ ...userData, "fChildName": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter first child name"
                    />

                    <h6>1st Child DOB</h6>
                    <input
                        value={userData['fChildDob']}
                        onChange={(e) => setUserData({ ...userData, "fChildDob": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter 1st child's date of birth"
                    />
                </div>


                <div className="col-md-6 travel-form">
                    <h6>1st Child Passport No </h6>
                    <input
                        value={userData['fChildPno']}
                        onChange={(e) => setUserData({ ...userData, "fChildName": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter 3rd child Passport no"
                    />

                </div>
            </div>

            {/* Second Child */}
            <div className="row">
                <div className="col-md-6 travel-form">
                    <h6>2nd Child Name</h6>
                    <input
                        value={userData['sChildName']}
                        onChange={(e) => setUserData({ ...userData, "fChildName": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter 2nd child's name"
                    />

                    <h6>2nd Child DOB</h6>
                    <input
                        value={userData['sChildDob']}
                        onChange={(e) => setUserData({ ...userData, "sChildDob": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter 3rd child's date of birth"
                    />
                </div>


                <div className="col-md-6 travel-form">
                    <h6>2nd Child Passport No </h6>
                    <input
                        value={userData['sChildPno']}
                        onChange={(e) => setUserData({ ...userData, "sChildPno": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter 2nd child's Passport no"
                    />

                </div>
            </div>

            {/* Third Child */}
            <div className="row  mb-4">
                <div className="col-md-6 travel-form">
                    <h6>3rd Child Name</h6>
                    <input
                        value={userData['tChildName']}
                        onChange={(e) => setUserData({ ...userData, "tChildName": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter 3rd child's name"
                    />

                    <h6>3rd Child DOB</h6>
                    <input
                        value={userData['tChildDob']}
                        onChange={(e) => setUserData({ ...userData, "tChildDob": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter 3rd child's date of birth"
                    />
                </div>


                <div className="col-md-6 travel-form">
                    <h6>3rd Child Passport No </h6>
                    <input
                        value={userData['tChildPno']}
                        onChange={(e) => setUserData({ ...userData, "tChildPno": e.target.value })}
                        name="date"
                        className="w-100 input-field mb-3"
                        placeholder="Enter third child Passport no"
                    />

                </div>
            </div>
            <div>
                <Button variant="contained" color="secondary" onClick={() => setStep(3)} >Back</Button>
                <Button variant="contained" color="primary" onClick={submitData}>Submit</Button>
            </div>
        </div>
    )
}

export default ThirdStep
