const compareToTen = (num) => {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is lower or equal to 10`);
    } else {
      reject(`${num} is higher than 10`);
    }
  });
};

const handlePromise = (promise) => {
  promise
    .then((result) => console.log("Fulfilled:", result))
    .catch((error) => console.log("Rejected:", error));
};

// Example
handlePromise(compareToTen(11));
handlePromise(compareToTen(10));
handlePromise(compareToTen(15));
handlePromise(compareToTen(8));

// setTimeout usage
const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Success');
  }, 4000);
});

handlePromise(delayedPromise);

// Promise.resolve usage
const myValue = Promise.resolve(3);

myValue
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error); 
  });
