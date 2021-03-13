import React, {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function sum() {
        setCount(count + 1);
    }

    function sub() {
        setCount(count - 1);
    }

    function mul() {
        setCount(count * 2);
    }
    return(
        <div>
            <h1>Counter</h1>
            <button onClick={sum}>ADD</button>
            <button onClick={sub}>SUBTRATION</button>
            <button onClick={mul}>MULTIPLY</button>
            <button onClick={() => setCount(count + 1)}>Change State Variable</button>
            <div>
                {count}
            </div>
        </div>
    )
}

export default Counter;