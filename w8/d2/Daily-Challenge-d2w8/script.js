let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "35$",
    other : {
        paid : false,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

let fruit = displayGroceries();
console.log(fruit);

const cloneGroceries =() => {
    const user = client;
    const shopping = groceries
    client = 'Betty'
    //we changed the original object so the clone changed aswell
    //in both 'totalPrice' and 'paid'
    return user, shopping;
}
//the client variable changed to 'Betty' while clientVar
//which is the output of the function still shows 'John'
let clientVar = cloneGroceries();
console.log(clientVar);
console.log(client);