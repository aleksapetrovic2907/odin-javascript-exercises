const removeFromArray = function(array, elementValue) {
    const index = array.indexOf(elementValue);
    array.splice(index, 1);

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
