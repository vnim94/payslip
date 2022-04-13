import parseCsv, { createInput, parsePercentage } from "./parse";

describe('parsePercentage', () => {
    test('returns percentage in terms of decimals', () => {
        const percent = '9%';
        const percentage = parsePercentage(percent);

        expect(percentage).toBe(0.09);
    })
})

describe('createInput', () => {

    test('returns object with required fields', () => {
        const data = ['John', 'Smith', 12000, '9%', '01 March - 31 March'];
        
        const input = createInput(data);
        
        expect(input).toHaveProperty('firstName', 'John');
        expect(input).toHaveProperty('lastName', 'Smith');
        expect(input).toHaveProperty('salary', 12000);
        expect(input).toHaveProperty('superRate', 0.09);
        expect(input).toHaveProperty('period', '01 March - 31 March');
    })
})

describe('parseCsv', () => {
    test('returns array of objects', () => {
        const file = ['John,Smith,12000,9%,01 March - 31 March', 'Ryan,Chen,100000,10%,01 March - 31 March'];
        
        const inputs = parseCsv(file);

        expect(inputs.length).toBe(2);
        expect(inputs[0].firstName).toBe('John');

    })
})