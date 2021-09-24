const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error'))



const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('Stuff Worked')
    } else {
        reject('Error, it broke')
    }
})

// promise.then(result => console.log(result))


// promise
//     .then(result => result + '!')
//     .then(result2 => {
//         console.log(result2)
//     })
//     .then(() => {throw Error})
//     .catch(() => console.log('error!'))


promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error!'))
    .then(result3 => result3 + '!')


const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'HII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1, 'POOKie')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me you are looking for?')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values)
    })