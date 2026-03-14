import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const  CounterStyle ={
 border : '2px solid red',
 padding : '10px',
 fontSize : '20px',
 color : 'green'
}
const handleAdd = () =>{
    setCount(count + 1)
}
    return(
        <div style={CounterStyle}>
            <h2>count: {count}</h2>
            <button onClick={handleAdd}>add:</button>
        </div>
    )
}