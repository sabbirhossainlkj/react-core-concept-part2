import { useState } from "react"

export default function Runs() {
    const [runs, setRuns] = useState(0);
    const handleSingle = () =>{
        const updateRuns = runs + 1;
        setRuns(updateRuns)
    }
    const handleFour = () =>{
        const updateRuns = runs + 4;
        setRuns(updateRuns)
    }
    const handleSix = () =>{
        const updateRuns = runs + 6;
        setRuns(updateRuns)
    }
const runsStyle = {
    border : '2px solid red',
    padding : '10px',
    fontSize : '15px'
}
    return(
        <div style={runsStyle}>
            <h2>players: bangladeshi</h2>
            {
                runs > 50 && <h3>you are a good player!</h3>
            }
            <p>Runs: {runs}</p>
            <button onClick={handleSingle}>single:</button>
            <button onClick={handleFour}>four:</button>
            <button onClick={handleSix}>six:</button>
        </div>
    )
}

