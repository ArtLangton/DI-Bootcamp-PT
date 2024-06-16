const { readFile, writeFile } = require('./fileManager');

const helloContent = readFile('Hello World.txt');

writeFile('Bye World.txt', helloContent);

console.log("Content from 'Hello World.txt' copied to 'Bye World.txt'.");