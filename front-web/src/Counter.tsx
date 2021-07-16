import { useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(1);
    const handleIncrease = () => {
        setCounter(counter +1);
    }

    const handleDecrease = () => {
        setCounter(counter -1);
    }

    return (
        <div> 
            <h1> Valor do Contador : {counter}</h1>
            <button onClick={handleIncrease}>Incrementar</button>
            <button onClick={handleDecrease}>Decrementar</button>
        </div>
    )
}

export default Counter;