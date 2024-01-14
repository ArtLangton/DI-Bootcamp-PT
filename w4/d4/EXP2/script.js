const divLightBlue = document.querySelector("div")
console.log(divLightBlue)
divLightBlue.style.background = `lightblue`;

const notDisplayJohn = document.querySelector('ul')
console.log(notDisplayJohn);
const firstLi = document.querySelector("li:first-child");
console.log(firstLi);
firstLi.style.display = 'none'

const peteLi = document.querySelector("li:last-child");
console.log(peteLi);
peteLi.style.border = '2px dotted black';

let documentElement = document.body;
documentElement.style.fontSize = "42px"
documentElement.style.fontFamily = "fantasy"


if (divLightBlue.style.background === `lightblue`){
    const users = document.querySelectorAll('ul li');
    const user1 = users[0].textContent;
    const user2 = users[1].textContent;
    alert(`Hello ${user1} and ${user2}`)
}