
import './App.css'
import Counter  from './counter'
import Runs from './runs'
import Users from './users'
import Friends from './friends'
import Posts from './posts'
import { Suspense } from 'react'


 const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

  const fetchFriends = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   return res.json()
  } 

const fetchPosts = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}
 




function App() {
const friendsPromise = fetchFriends()

const postsPromise = fetchPosts()

  function handleClick() {
    alert('button clicked')
  }
  const handLeClick3 = () =>{
    alert('button 3 clicked')
  }
  const handleAdd = (num) =>{
    const result = num + 6;
    alert (result)
  }

 

  return (
    <>
      
   <h3>Hello, React</h3>
   {/* <button onClick='clicked()'>Click me!</button>
   <br /> */}

   <Suspense fallback= {<h2>loading....</h2>}>
    <Users fetchUsers={fetchUsers}></Users>
   </Suspense>

   <Suspense fallback = {<h2>friends pending...</h2>}>
    <Friends friendsPromise={friendsPromise}></Friends>
   </Suspense>

   <Suspense fallback={<h2>loading posts...</h2>}>
    <Posts postsPromise={postsPromise}></Posts>
   </Suspense>


   <Counter></Counter>
   <Runs></Runs>
  
   
   
   <button onClick={handleClick}>Click me!</button>
  
   <button onClick={function handleClick2(){alert('onclick called')}}>click and alert</button>
   <button onClick={handLeClick3}>click 3</button>
   <button onClick={() => alert('button 4 clicked')}>click 4</button>
   <button onClick={() => handleAdd(5)}>click 5</button>
    </>
  )
}

export default App

