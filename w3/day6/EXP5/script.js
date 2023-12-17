const family = {
    father: "John",
    mother: "Linda",
    son: "Jake"
}

for (const item in family) {
    console.log('key: ', item)
    console.log('value: ', family[item])
}