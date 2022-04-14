import './PayslipCard.css';

function PayslipCard(props) {

    const { name, period, grossIncome, tax, netIncome, superAmount } = props.details

    return (
        <div className="payslip-card">
            <span className="name">{name}</span>
            <table>
                <thead>
                    <th>Pay Period</th>
                    <th>Gross Income</th>
                    <th>Tax</th>
                    <th>Net Income</th>
                    <th>Super</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{period}</td>
                        <td>{grossIncome}</td>
                        <td>{tax}</td>
                        <td>{netIncome}</td>
                        <td>{superAmount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PayslipCard;