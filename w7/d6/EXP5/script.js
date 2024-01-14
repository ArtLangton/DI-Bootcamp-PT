const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {

    const indicator = (index + 1 > 10 && index + 1 < 14) ? ordinal[0] : ordinal[(index + 1) % 10];
    console.log(`${index + 1}${indicator} choice is ${color}.`);
});


const hasViolet = colors.includes("Violet");
console.log(hasViolet ? "Yeah" : "No...");
