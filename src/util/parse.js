function parseCsv(file) {
    
    let inputs = [];

    file.forEach((entry) => {
        if (entry.length > 0) inputs.push(createInput(entry.split(',')));
    })

    return inputs
}

export function createInput(data) {
    console.log(data);
    return {
        firstName: data[0],
        lastName: data[1],
        salary: data[2],
        superRate: parsePercentage(data[3]),
        period: data[4]
    }
}

export function parsePercentage(percent) {
    return percent.split('%')[0] / 100;
}

export default parseCsv;