const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Do something async'), 3000)
      : reject(new Error('Test Error'));
  });
};

const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

console.log('Before');
doSomething();
console.log('After');

//Error handling

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (err) {
    console.log(err);
  }
};

console.log('Before 1');
anotherFunction();
console.log('After 1');