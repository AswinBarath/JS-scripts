// Example 1
console.log("Normal thread 1");
async function fetchUsers() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    console.log(data);
}
console.log("Normal thread 2");
fetchUsers();

// Example 2
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function () { 
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())))
        
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log("oops", err);
    }
}

getData();