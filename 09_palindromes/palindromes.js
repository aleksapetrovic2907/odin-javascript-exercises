const palindromes = function (string) {
    string = filterString(string);
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== string[string.length - i - 1]) return false;
    }

    return true;
};

// Removes spaces, symbols and sets everything to lowercase.
function filterString(string) {
    const isAlphanumericalRegex = /^[a-zA-Z0-9]+$/;

    string = string.split('');
    string = string.filter((ch) => isAlphanumericalRegex.test(ch)).join('');
    return string.toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
