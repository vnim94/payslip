import Payslip from './payslip';

class PayslipCalculator {
    
    constructor(taxRateCalculator) {
        this.taxRateCalculator = taxRateCalculator;
    }

    calcGrossIncome(salary) {
        return Math.round(salary / 12);
    }

    calcTax(salary) {
        return Math.round(this.taxRateCalculator.calcTaxPayable(salary));
    }

    calcNetIncome(grossIncome, tax) {
        return grossIncome - tax;
    }

    calcSuper(grossIncome, superRate) {
        return Math.round(grossIncome * superRate);
    }

    calcPayslip(input) {

        const { firstName, lastName, salary, superRate, period } = input;

        const name = `${firstName} ${lastName}`;
        const grossIncome = this.calcGrossIncome(salary);
        const tax = this.calcTax(salary);
        const netIncome = this.calcNetIncome(grossIncome, tax);
        const superAmount = this.calcSuper(grossIncome, superRate);

        return new Payslip(name, period, grossIncome, tax, netIncome, superAmount);
    }

}

export default PayslipCalculator;