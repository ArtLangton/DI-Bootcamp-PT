const colors = ["blue", "yellow", "red", "green", "purple"]
const suffixes = ["st", "nd", "rd", "th", "th"]

for (let i = 0; i < colors.length; i++){
    console.log(`My ${i+1}${suffixes[i]} choise is ${colors[i]}`)
}