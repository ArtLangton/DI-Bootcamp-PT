const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const additionalItems = ['bread', 'chicken'];

const result = [...additionalItems, ...vegetables, ...fruits];
console.log(result);

// BONUS

const country = "USA";
console.log(Array.from(country));
