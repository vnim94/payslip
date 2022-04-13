import './App.css';
import { useState } from 'react';
import parseCsv from './util/parse';
import PayslipCalculator from './payslip/payslipCalculator';
import TaxRateCalulator from './payslip/taxRateCalculator';
import PayslipCard from './payslip/PayslipCard';

function App() {

    const [data, setData] = useState();
    const taxRateCalculator = new TaxRateCalulator();
    const payslipCalculator = new PayslipCalculator(taxRateCalculator);

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
            <div>
                <h1>Payslip Generator</h1>
                <input type="file" onChange={handleUpload}></input>
            </div>
            {data && data.map((entry, index) => {
                const details = payslipCalculator.calcPayslip(entry);
                return <PayslipCard key={index} details={details} />
            })}
        </div>
    );
}

export default App;
