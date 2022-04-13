import TaxRateCalculator from './taxRateCalculator';

const calculator = new TaxRateCalculator();

describe('calcTaxPayable', () => {
    test('returns correct tax payable for given salary', () => {
        const salary = 60050;
        const expectedTax = (5092 + (salary - 45000) * 0.325) / 12

        const tax = calculator.calcTaxPayable(salary);

        expect(tax).toBe(expectedTax)
    })
})