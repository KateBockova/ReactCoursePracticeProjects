import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Results({ investmentParameters }) {
    
    const investmentResults = calculateInvestmentResults(investmentParameters);

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest &#40;Year&#41;</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {investmentResults.map(annualResults => (
                <tr key={annualResults.year}>
                    <td>{annualResults.year}</td>
                    <td>{formatter.format(annualResults.valueEndOfYear)}</td>
                    <td>{formatter.format(annualResults.interest)}</td>
                    <td>{formatter.format(annualResults.totalInterest)}</td>
                    <td>{formatter.format(annualResults.totalInvestment)}</td>
                </tr>
            ))}
        </tbody>
    </table>
}