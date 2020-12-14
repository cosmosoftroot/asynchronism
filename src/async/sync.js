const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve('Do something async'), 3000)
      : reject(new Error('Test Error'));
  });
};

const doSomething = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  console.log('Before');
  await doSomething();
  console.log('After');
})();
