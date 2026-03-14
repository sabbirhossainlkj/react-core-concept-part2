
import './App.css'
import Counter  from './counter'
import Runs from './runs'

function App() {
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
