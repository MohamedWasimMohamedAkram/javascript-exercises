const reverseString = function(input) {
    let wordLength = input.length - 1;
    let sumWord = "";
    for(let i = wordLength; i > 0 - 1; i--){
        sumWord = sumWord + input[i];
    }
    return sumWord;
};

// Do not edit below this line
module.exports = reverseString;
