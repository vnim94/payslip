import PayslipCalculator from './payslipCalculator';

let calculator;
let taxRateCalculator;

beforeAll(() => {
    taxRateCalculator = { calcTaxPayable: jest.fn() }
    calculator = new PayslipCalculator(taxRateCalculator);
})

describe('calcGrossIncome', () => {
    test('return gross income rounded to nearest dollar amount', () => {
        const salary = 12000;
        const grossIncome = calculator.calcGrossIncome(salary);

        expect(grossIncome).toBe(1000);
    })
})

describe('calcTax', () => {
    test('returns amount of monthly income tax payable for given salary', () => {
        const salary = 60050;
        const expectedTax = Math.round((3572 + (60050 - 37000) * 0.325) / 12);
        taxRateCalculator.calcTaxPayable.mockReturnValue(expectedTax);

        const tax = calculator.calcTax(salary);

        expect(tax).toBe(expectedTax);
        expect(taxRateCalculator.calcTaxPayable).toHaveBeenCalled();
    })
})

describe('calcNetIncome', () => {
    test('return net income after deducting tax from gross income', () => {
        const grossIncome = 5004;
        const tax = 922;

        const netIncome = calculator.calcNetIncome(grossIncome, tax);

        expect(netIncome).toBe(4082);
        
    })
})

describe('calcSuper', () => {
    test('return super amount for given gross income at given super rate', () => {
        const grossIncome = 5004;
        const superRate = 0.09;

        const superAmount = calculator.calcSuper(grossIncome, superRate);

        expect(superAmount).toBe(450);
    })
})

describe('calcPayslip', () => {
    test('returns payslip with name, period, gross income, tax payable, net income and super from provided input', () => {
        const input = {
            firstName: 'John',
            lastName: 'Smith',
            salary: 60050,
            superRate: 0.09,
            period: '01 March - 31 March'
        }
        const expectedTax = Math.round((3572 + (60050 - 37000) * 0.325) / 12);
        taxRateCalculator.calcTaxPayable.mockReturnValue(expectedTax);

        const payslip = calculator.calcPayslip(input);

        expect(payslip).toHaveProperty('name', 'John Smith');
        expect(payslip).toHaveProperty('period', '01 March - 31 March');
        expect(payslip).toHaveProperty('grossIncome', 5004);
        expect(payslip).toHaveProperty('tax', expectedTax);
        expect(payslip).toHaveProperty('netIncome', 4082);
        expect(payslip).toHaveProperty('superAmount', 450);

    })
})