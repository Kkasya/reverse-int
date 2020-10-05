module.exports = function reverse (n) {
    let arrayN = String(n).split('').reverse();
    if (arrayN[arrayN.length - 1] == '-') arrayN.pop();
    return arrayN.join('');
}
