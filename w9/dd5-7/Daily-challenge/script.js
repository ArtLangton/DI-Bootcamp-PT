function areAnagrams(str1, str2) {
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  
  return sortedStr1 === sortedStr2;
}


const result1 = areAnagrams("Astronomer", "Moon starer");
console.log(result1); // Output: true

const result2 = areAnagrams("School master", "The classroom");
console.log(result2); // Output: true

const result3 = areAnagrams("The Morse Code", "Here come dots");
console.log(result3); // Output: true
