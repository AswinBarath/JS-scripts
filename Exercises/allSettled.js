const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 6000));
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000));

Promise.all([promiseOne, promiseTwo])
    .then(data => console.log(data))
    .catch(e => console.log('Something went wrong!'));

// New ES2020 feature
// .allSettled()
Promise.allSettled([promiseOne, promiseTwo])
    .then(data => console.log(data))
    .catch(e => console.log('Something went wrong!'));
