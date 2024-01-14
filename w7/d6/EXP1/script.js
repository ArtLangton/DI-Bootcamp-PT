// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

funcOne();
// Prediction - The alert will show "inside the funcOne function 3" It will result in an error because you cannot reassign a const variable.

let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree();
funcTwo();
funcThree();
//The alerts will show "inside the funcThree function 0", "inside the funcThree function 5". It will result in an error because you cannot reassign a const variable.

function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

funcFour();
funcFive();
// Prediction - The alert will show "inside the funcFive function hello".

let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

funcSix();
// Prediction - The alert will show "inside the funcSix function test". It will not result in an error, but the variable 'a' inside funcSix will be a separate block-scoped variable, and the alert will show "inside the funcSix function test".

let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);
