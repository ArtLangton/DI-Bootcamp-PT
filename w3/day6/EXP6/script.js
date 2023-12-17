const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

let sentence = ""
for (const key in details) {
    sentence = sentence + " " + key + " " + details[key]
}

console.log(sentence)