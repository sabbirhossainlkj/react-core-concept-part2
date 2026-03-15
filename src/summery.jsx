// option 1
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data) )
// option 2
const loadUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = res.json()
    return data;
    
}