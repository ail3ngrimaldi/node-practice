import fetch from 'node-fetch';

// Primera forma de usarlo
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => console.log(data))


// Segunda forma de usarlo
// async function loadData() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     console.log(data)
// }

// loadData()

// async function loadData() {

//funciona asi porque tenemos el type:module
    try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
    } catch (error) {
        console.log(error)
    }
// }

// loadData()