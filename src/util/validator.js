class Validator {
    validateInput(input) {
        const { firstName, lastName, salary, superRate, period } = input;
        const errors = [];
        if (firstName.length === 0) errors.push('First name must not be empty');
        if (firstName.match(/[^a-zA-Z]/)) errors.push('First name must only contain letters');
        if (lastName.length === 0) errors.push('Last name must not be empty');
        if (lastName.match(/[^a-zA-Z]/)) errors.push('Last name must only contain letters');
        if (salary === '0') errors.push('Salary must be greater than 0');
        if (superRate === '0') errors.push('Super rate must be greater than 0');
        if (period.length === 0) errors.push('Pay period must be provided')
        
        if (errors.length > 0) return errors;
    }
}

export default Validator;