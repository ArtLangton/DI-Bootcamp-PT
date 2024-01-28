const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, current) => {
  return accumulator + ' ' + current;
});

console.log(combinedString.trim());
