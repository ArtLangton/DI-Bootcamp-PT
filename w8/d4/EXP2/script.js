function convert(input) {
    return input*1000
}
const converted = convert(2)
console.log(converted);

const convert2 = function (input){
    return input * 1000
}
const weight = convert2(3)
console.log(weight);

const convert3 = (input) => input*1000
console.log(convert3(6));