let newArr;
let finalArr;
let arr;
const removeFromArray = function(...args) {
    arr = args[0];
    newArr = [];
    finalArr = [];
    for(let i = 1; i < args.length; i++){
        newArr.push(args[i]);
    }
    for(let i = 0; i < newArr.length; i++){
        if(!arr.includes(newArr[i])){
            finalArr.push(newArr[i]);
        }
    }
    return finalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
