const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is my resolved data");
  }, 5000);
});

console.log("before");

promise.then(eggs => {
  console.log(eggs);
});

console.log("after");
