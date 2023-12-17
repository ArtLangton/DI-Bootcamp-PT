const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) 
console.log("no users online")

if (users.length === 1)
console.log(users[0] + " is online!")

if (users.length === 2)
console.log(users[0] + " and" + users[1] + " online!")

if (users.length > 2)
console.log(`${users[0]} and ${users.length - 1} more are online...`)