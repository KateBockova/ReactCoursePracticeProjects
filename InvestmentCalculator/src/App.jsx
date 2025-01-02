import { useState } from "react"

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

import logoImg from "./assets/investment-calculator-logo.png";

function App() {

  const [investmentParameters, setInvestmentParameters] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 12,
  });

  function handleInvestmentParameters(investmentParameter, newValue) {
    setInvestmentParameters(prevInvestmentParameters => {
      return {
        ...prevInvestmentParameters,
        [investmentParameter]: +newValue
      };
    });
  }

  return (<>
    <Header logo={logoImg}>Investment Calculator</Header>
    <div id="user-input">
      <div className="input-group">
        <UserInput investmentParameter="initialInvestment" onInputChange={handleInvestmentParameters} inputValue={investmentParameters.initialInvestment}>Initial Investment</UserInput>
        <UserInput investmentParameter="annualInvestment" onInputChange={handleInvestmentParameters} inputValue={investmentParameters.annualInvestment}>Annual Investment</UserInput>
        <UserInput investmentParameter="expectedReturn" onInputChange={handleInvestmentParameters} inputValue={investmentParameters.expectedReturn}>Expected Return</UserInput>
        <UserInput investmentParameter="duration" onInputChange={handleInvestmentParameters} inputValue={investmentParameters.duration}>Duration</UserInput>
      </div>
    </div>
    {investmentParameters.duration < 1 ? <p className="center">Inavlid duration</p> : <Results investmentParameters={investmentParameters} />}
  </>
  )
}

export default App
