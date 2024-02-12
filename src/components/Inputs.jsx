// import { calculateInvestmentResults } from "../util/investment";

export default function Inputs({ formData, changeHandler }) {
//   function showData() {
//     const annualData = calculateInvestmentResults({
//       initialInvestment: formData.intial,
//       annualInvestment: formData.annual,
//       expectedReturn: formData.expected,
//       duration: formData.duration,
//     });
//     console.log(annualData.length);
//     console.log(annualData[0].annualInvestment);
//     console.log(annualData[0].year);
//     console.log(annualData[0].interest);
//     console.log(annualData[0].valueEndOfYear);
//   }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            name="initial"
            value={formData.initial}
            onChange={changeHandler}
            required
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            name="annual"
            value={formData.annual}
            onChange={changeHandler}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            name="expected"
            value={formData.expected}
            onChange={changeHandler}
            required
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={changeHandler}
            required
          />
        </p>
      </div>
    </section>
  );
}
