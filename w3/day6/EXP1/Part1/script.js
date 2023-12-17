// PART 1 

const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
people[2] = "Jason"

console.log(people)

people.push("Artem")
console.log(people.indexOf("Mary"))

const newPpl = people.slice(1)
console.log('new people: ', newPpl)

console.log(people.indexOf("Foo"))

const last = people.at(-1)
console.log('last: ', last)

console.log(people)