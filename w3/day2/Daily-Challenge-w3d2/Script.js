const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
console.log(fruits);

//Sort the array in alphabetical order
fruits.sort();
console.log(fruits);

//Add "“Kiwi” to the end
fruits.push("Kiwi");
console.log(fruits);

//Remove “Apples”, another method
fruits.shift();
console.log(fruits);

//Sort the array in reverse order

fruits.reverse();
console.log(fruits);

// Exercise 4

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1]);