
const remainders = element => {
    let results = [];
    let hex = '0123456789abcdef';

    let remainder = element % 16;
    element = Math.floor(element / 16);

    if (element === 0) {
        return [hex[remainder]];
    }
    results.push(hex[remainder]);
    results = [...results, ...remainders(element)];

    return results;
}

module.exports = remainders;
