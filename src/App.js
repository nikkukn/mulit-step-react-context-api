import FirstStep from "./Components/FirstStep"
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import { Stepper, StepLabel, Step } from "@material-ui/core"
import { multiStepContext } from "./StepContext";
import { useContext } from "react";
import DisplayData from "./Components/DisplayData";
import StepZero from "./Components/StepZero";
import LastStep from "./Components/LastStep"


function App() {

  // Getting steps from multistep context
  const { currentStep, finalData } = useContext(multiStepContext);

function showStep(step){
  switch(step){
    case 1 : 
    return <StepZero/>
    
    case 2 : 
    return <FirstStep/>

    case 3 :
      return <SecondStep/>

    case 4: 
    return <ThirdStep/>

    case 5:
      return <LastStep/>
  }
}

  return (
    <div className="App">
      <div className="center-stepper container">
        {/* We have to pass currentStep -1 bcz we want to start from zero */}
        <Stepper style={{ width: '50%' }} activeStep={currentStep - 1} orientation="horizontal">
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>


      {
        showStep(currentStep)
      }
      <DisplayData/>
    </div>
  );
}

export default App;
