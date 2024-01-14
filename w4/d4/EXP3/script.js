const myDiv = document.querySelector("div");
console.log(myDiv);
myDiv.setAttribute("id", "socialNetworkNavigation");

const ulElement = document.querySelector("ul")
const thisUl = document.createElement("li")
thisUl.innerHTML = "Logout"
ulElement.appendChild(thisUl);

let text1 = ulElement.firstElementChild.textContent ;
console.log(text1)
let text2 = ulElement.lastElementChild.textContent ;
console.log(text2)