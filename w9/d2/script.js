// I decided to combine all the exercises into one javascript file to reduce the volume and to avoid a clutter of files. 
// I hope it will be easier for you to check your homework this way and it will not cause difficulties when checking. 
// Please let me know if anything is not displaying correctly because of this

// EXP 1

//Output will be:
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// EXP 2

function displayStudentInfo(objUser){
    return console.log(`Your full name is ${objUser.first}  ${objUser.last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});



// EXP 3
const users = { user1: 18273, user2: 92833, user3: 90315 };
const entries = Object.entries(users);
console.log(entries);

Object.keys(users).forEach(key => {
  users[key] *= 2;
});

console.log(users)


// EXP 4

// Output will be:
// object

// EXP 5

// Correct option is "2"
// Option 1 doesn't call "super(name);" and doesn't properly invoke the parent.
// Option 3 uses "super(name);" , but the name variable is not defined in the child.
// Option 4 directly assigns properties without calling "super(name);"

//6 false, false

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mammal extends Animal {
    sound(noise) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} and ${noise}`;
    }
  }
  
  const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
  console.log(farmerCow.sound('moos'));