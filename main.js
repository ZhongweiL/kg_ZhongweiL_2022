let arr = process.argv.slice(2)

let result = "";
arr.forEach(function(num) {
    result += toPhonetic(num);
    if (num != arr[arr.length-1]) result += ",";
});