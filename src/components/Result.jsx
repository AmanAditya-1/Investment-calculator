import { formatter } from "../util/investment";

export default function Result({ annualData, initialInvestment }) {
  let totalinterest = 0;
  let totalinvestment = initialInvestment;
  console.log(formatter.format(2000));
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investement Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => (
          <tr>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(totalinterest += data.interest)}</td>
            <td>{formatter.format(totalinvestment += data.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
