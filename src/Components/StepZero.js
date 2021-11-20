import React, { useContext } from 'react'
import { Button, Textinput } from "@material-ui/core"
import { multiStepContext } from '../StepContext'


function StepZero() {
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-md-6 d-flex banner-content flex-column justify-content-center">
          <div className="d-flex">
            <img src="/icons/plane-departure.svg" alt="" />
            <h2 className="text-blue ml-3">TRAVEL INSURANCE</h2>
          </div>
          <p>
            Voluptas eum iure praesentium modi ad pariatur deleniti illum
            aliquid, libero animi. Dolorem, enim ad.
          </p>

          <div className="align-items-center travel-items-head">
            <div className="banner-line"></div>
            <h6 className="text-center text-blue">Choose Destination</h6>
            <div className="banner-line"></div>
          </div>

          <div className="countryToTravel" data-aos="fade-down">
            <h6 className="text-blue mt-3">Where you going?</h6>
            <select
              value={userData['Country']}
              onChange={(e) => setUserData({ ...userData, "Country": e.target.value })}
              className="w-100 input-field mb-3"
              name="country"
            >
              <option value="">Select Country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Canada">Canada</option>
              <option value="China">China</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
              <option value="India">India</option>
              <option value="UAE">UAE</option>
            </select>
          </div>

          <br />
          <div className="travel-items">
            <label className="chkbox">
              <div className="travel-item">
                <input
                  type="radio"
                  name="radio"
                  value="Shengen"
                  checked={userData["Shengen"]}
                  onChange={(e) => setUserData({ ...userData, "Shengen": e.target.value })}
                />
                <div className="tcard">
                <img src="/travel/shengen.png" alt="" />
                <h6>
                  SHENGEN <br /> STATES
                </h6>
                </div>
              </div>
            </label>

            <label className="chkbox">
              <div className="travel-item">
                <input
                  type="radio"
                  name="radio"
                  value="Umrah"
                  checked={userData["Umrah"]}
                  onChange={(e) => setUserData({ ...userData, "Umrah": e.target.value })}
                />
                <div className="tcard">
                <img src="/travel/umrah.png" alt="" />
                <h6>UMRAH</h6>
                </div>
              </div>
            </label>

            <label className="chkbox">
              <div className="travel-item">
                <input
                  type="radio"
                  name="radio"
                  value="Hajj"
                  checked={userData["Hajj"]}
                  onChange={(e) => setUserData({ ...userData, "Hajj": e.target.value })}
                />
                <div className="tcard">
                <img src="/travel/hajj.png" alt="" />
                <h6>HAJJ</h6>
                </div>
              </div>
            </label>

            <label className="chkbox">
              <div className="travel-item">
                <input
                  type="radio"
                  name="radio"
                  value="Student"
                  checked={userData["Student"]}
                  onChange={(e) => setUserData({ ...userData, "Student": e.target.value })}
                />
                <div className="tcard">
                <img src="/travel/student.png" alt="" />
                <h6>STUDENT</h6>
                <p>(SHENGEN STATES)</p>
                </div>
              </div>
            </label>

            <label className="chkbox">
              <div className="travel-item">
                <input
                  type="radio"
                  name="radio"
                  value="World Wide"
                  checked={userData["WorldWide"]}
                  onChange={(e) => setUserData({ ...userData, "WorldWide": e.target.value })}
                />
                <div className="tcard">
                <img src="/travel/worldwide.png" alt="" />
                <h6>WORLDWIDE</h6>
                </div>
              </div>
            </label>

            <label className="chkbox">
              <div className="travel-item">
                <input
                  type="radio"
                  name="radio"
                  value="Pak Care"
                  checked={userData["PakCare"]}
                  onChange={(e) => setUserData({ ...userData, "PakCare": e.target.value })}
                />
                <div className="tcard">
                <img src="/travel/pak.png" alt="" />
                <h6>PAK CARE</h6>
                </div>
              </div>
            </label>

            <label className="chkbox">
              <div className="travel-item">
                <input
                  type="radio"
                  name="radio"
                  value="United Domestic Care"
                  checked={userData["UnitedCare"]}
                  onChange={(e) => setUserData({ ...userData, "UnitedCare": e.target.value })}
                />
                <div className="tcard">
                <img src="/travel/united.png" alt="" />
                <h6>UNITED</h6>
                <p>DOMESTIC CARE</p>
                </div>
              </div>
            </label>
           
            <label className="chkbox">
              <div className="travel-item">
                <input
                  type="radio"
                  name="radio"
                  value="Rest Of World"
                  checked={userData["restofworld"]}
                  onChange={(e) => setUserData({ ...userData, "restofworld": e.target.value })}
                />
                <div className="tcard">
                  <img src="/travel/restofworld.png" alt="" />
                  <h6>REST OF THE WORLD</h6>
                </div>
              </div>
            </label>

          </div>
          <br />
          <div className="row justify-content-end pr-3 ">
            <Button  color="primary" variant="contained" onClick={() => setStep(2)}>
              Next
            </Button>
          </div>
        </div>

        <div className="col-md-6 banner-img">
          <img
            src="/travel/illustration.png"
            alt=""
            className="w-100 "
            data-aos="fade-left"
            data-aos-delay="500"
          />
        </div>
      </div>
    </div>
  )
}

export default StepZero
