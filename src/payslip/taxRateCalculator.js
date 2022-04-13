class TaxRateCalculator {

    calcTaxPayable(salary) {
        switch (true) {
            case salary > 0 && salary < 18201:
                return 0;
            case salary > 18200 && salary < 45001:
                return (0.19 + (salary - 18200)) / 12;
            case salary > 45000 && salary < 120001:
                return (5092 + (salary - 45000) * 0.325) / 12;
            case salary > 120000 && salary < 180001:
                return (29467 + (salary - 120000) * 0.37) / 12;
            case salary > 180000:
                return (51667 + (salary - 180000) * 0.45) / 12;
            default:
        }
    }

}

export default TaxRateCalculator;