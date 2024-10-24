const sumAll = function (num1, num2) {
    if (!isNumber(num1) || !isNumber(num2)) return "ERROR";
    if (!isInteger(num1) || !isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";


    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
};

const isInteger = function (num) {
    return Math.round(num) === num;
};

const isNumber = function (num) {
    return Number(num) === num;
};

// Do not edit below this line
module.exports = sumAll;
