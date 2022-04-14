import './App.css';
import { useState } from 'react';
import parseCsv from './util/parse';
import PayslipCalculator from './payslip/payslipCalculator';
import TaxRateCalulator from './payslip/taxRateCalculator';
import PayslipCard from './payslip/PayslipCard';
import Validator from './util/validator';

function App() {

    const [data, setData] = useState();
    const taxRateCalculator = new TaxRateCalulator();
    const payslipCalculator = new PayslipCalculator(taxRateCalculator);
    const validator = new Validator();

    const handleUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader()
        reader.readAsText(file);

        reader.onload = () => {
            const data = parseCsv(reader.result.split('\n'));
            setData(data);
        }

        reader.onerror = () => {
            console.log(reader.error)
        }
    }

    return (
        <div className="App">
            <h1>Payslip Generator</h1>
            <div className="upload-btn">
                <label className="btn" htmlFor="upload">Upload data</label>
                <input id="upload" type="file" onChange={handleUpload} hidden={true}></input>
            </div>
            <b>Upload a csv file with data in the following format:</b>
            <table>
                <thead>
                    <tr>
                        <th>FIRST_NAME</th>
                        <th>LAST_NAME</th>
                        <th>SALARY</th>
                        <th>SUPER_RATE</th>
                        <th>PAY_PERIOD</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>David</td>
                        <td>Rudd</td>
                        <td>100000</td>
                        <td>9%</td>
                        <td>01 March - 31 March</td>
                    </tr>
                </tbody>
            </table>
            <div className="payslips">
            {data && data.map((entry, index) => {
                const errors = validator.validateInput(entry);
                if (errors) {
                    return <ul>
                        {errors.map((error, index) => {
                            return <li key={index}>{error}</li>
                        })}
                    </ul>
                } else {
                    const details = payslipCalculator.calcPayslip(entry);
                    return <PayslipCard key={index} details={details} />
                }
            })}
            </div>
        </div>
    );
}

export default App;
