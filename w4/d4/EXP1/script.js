let documentElement = document.body

    let divElement = document.body.children[0];
    console.log(divElement)

    let myDiv = document.querySelector("div")
    console.log(myDiv);

    const myUl1=document.getElementsByTagName("ul");
    console.log(myUl1[0], myUl1[1]);

    const secondLi = document.querySelector("li:last-child");
    console.log(secondLi);

const liPete = document.querySelector("ul.list:nth-child(2) li:last-child").innerHTML= "Richard";
console.log(liPete);

    const liSarah = document.querySelector("ul.list:nth-child(3) li:nth-child(2)")
    console.log(liSarah);
    liSarah.remove();


const firstName = "Art";
const ulElements = document.querySelectorAll(`ul`);
console.log(ulElements);

for (let i=0; i<ulElements.length; i++){
    const ulElement = ulElements[i];
    console.log(ulElement);
    const liFirstName = ulElement.querySelector(`li:first-child`);
    console.log(liFirstName);
    liFirstName.textContent = firstName
}

for (let i=0; i<ulElements.length; i++){
const ulElementsAddClass = ulElements[i];
console.log(ulElementsAddClass);

ulElementsAddClass.classList.add("student_list");
}


const ulElementsAddingTwoClass = document.querySelector("ul");
console.log(ulElementsAddingTwoClass);
    
ulElementsAddingTwoClass.classList.add("university", "attendance");