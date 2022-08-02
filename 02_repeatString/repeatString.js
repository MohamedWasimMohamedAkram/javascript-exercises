let sumString = "";
const repeatString = function(string, num) {
    sumString = "";
    if(num < 0){
        return "ERROR";
    }
    else{
        for(let i = 0; i < num; i++){
            sumString = sumString + string;
        }
        return sumString;
    }
};

// Do not edit below this line
module.exports = repeatString;
