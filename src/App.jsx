import { useState } from "react";
import Inputs from "./components/Inputs";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [formData, setFormData] = useState({
    initial: "",
    annual: "",
    expected: "",
    duration: "",
  });

  const inputValid=formData.duration>=1;
  function changeHandler(event) {
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [event.target.name]: Number(event.target.value),
      };
      return updatedData;
    });
  }

  const annualData = calculateInvestmentResults({
    initialInvestment: formData.initial,
    annualInvestment: formData.annual,
    expectedReturn: formData.expected,
    duration: formData.duration,
  });

  return (
    <div>
      <Inputs formData={formData} changeHandler={changeHandler} />
      {!inputValid && <p className="center">Please Enter duration greater than 0.</p>}
      
      {inputValid && <Result annualData={annualData} initialInvestment={formData.initial} />}
    </div>
  );
}

export default App;
