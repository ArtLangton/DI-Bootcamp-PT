function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      const areAllStrings = words.every(word => typeof word === 'string');
  
      if (areAllStrings) {
        const uppercasedWords = words.map(word => word.toUpperCase());
        resolve(uppercasedWords);
      } else {
        reject("Not all elements are strings.");
      }
    });
  }

  function sortWords(uppercasedWords) {
    return new Promise((resolve, reject) => {
      if (uppercasedWords.length > 4) {
        const sortedWords = uppercasedWords.sort();
        resolve(sortedWords);
      } else {
        reject("The array length is not greater than 4.");
      }
    });
  }
  

  makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
  makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error));
  
function toJs() {
    return new Promise((resolve, reject) => {
      try {
        const morseJS = JSON.parse(morse);
        if (Object.keys(morseJS).length === 0) {
          reject("Morse JavaScript object is empty.");
        } else {
          resolve(morseJS);
        }
      } catch (error) {
        reject("Error converting Morse JSON to object.");
      }
    });
  }

  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt("Enter a word or sentence:");
  
      const morseTranslation = [];
      for (const char of userInput.toLowerCase()) {
        if (morseJS[char]) {
          morseTranslation.push(morseJS[char]);
        } else {
          reject(`Character "${char}" not found in Morse JavaScript object.`);
        }
      }
  
      resolve(morseTranslation);
    });
  }