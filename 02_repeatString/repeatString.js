const repeatString = function(string, repeatCount) {
    let repeatedString = "";

    for (let i = 0; i < repeatCount; i++)
        repeatedString += string;

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
