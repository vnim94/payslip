class Payslip {
    #name
    #period
    #grossIncome
    #tax
    #netIncome
    #superAmount

    constructor(name, period, grossIncome, tax, netIncome, superAmount) {
        this.#name = name;
        this.#period = period;
        this.#grossIncome = grossIncome;
        this.#tax = tax;
        this.#netIncome = netIncome;
        this.#superAmount = superAmount;
    }

    get name() {
        return this.#name;
    }

    get period() {
        return this.#period;
    }

    get grossIncome() {
        return this.#grossIncome;
    }

    get tax() {
        return this.#tax;
    }

    get netIncome() {
        return this.#netIncome;
    }

    get superAmount() {
        return this.#superAmount;
    }

}

export default Payslip;