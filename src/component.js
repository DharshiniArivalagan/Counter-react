import { useState } from "react";

function Component() {
    const [reach, setreach] = useState(true)
    const [count, setcount] = useState(0)
    function increase() {
        setcount(count + 1)
        setreach(true)
    }
    function decrease() {
        if (count === 0) {
            setcount(0)
            setreach(false)
        }
        else {
            setcount(count - 1)
        }

    }
    function reset() {
        setreach(true)
        setcount(0)
    }
    return (
        <>
        <h1 id="count">Counter The Number</h1>
        <div id="count-container">
            
            <div id="value"><h1>{count}</h1></div>
            <div id="button"><button onClick={increase}>Increase(+)</button><button onClick={decrease}>Decrease(-)</button><button onClick={reset}>Reset</button></div>
            {reach ? "" : <h2 id="reach">Minimum valu is Zero</h2>}
        </div>
        </>
        
    )
}

export default Component;