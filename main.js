const arr = process.argv.slice(2);
const dict = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine"
};

let result = "";
arr.forEach(function (num) {
    result += toPhonetic(num);
    if (num !== arr[arr.length - 1]) result += ",";
});

function toPhonetic(num) {
    let phonetic = "";
    for (const digit of num) {
        if (!dict[digit]) return "invalid";
        phonetic += dict[digit];
    }
    return phonetic;
}

console.log(result);
