const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let acronym = ""
const sortedNames = names.sort()

for (const name of sortedNames) {
    console.log(name)
    acronym = acronym + name[0]
}

console.log(acronym)

//applied changes