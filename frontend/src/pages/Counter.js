import React from 'react'
import { useState ,useContext,createContext} from 'react'
function Counter() {
       let  [count, setCount] = useState(1);
    function increaseCount() {
        setCount(prevCount => prevCount + 1);
    }
    function decreaseCount() {
        if (count !== 0) {
            setCount(prevCount => prevCount - 1);

        }
    }
    return (
        <div className=''>
            <div className="d-flex text-center justify-content-center g-5">
                <button className="btn me-3" onClick={decreaseCount}>-</button>
                <p className="pt-3" id="ct">{count}</p>
                <button className="btn ms-3" onClick={increaseCount}>+</button> </div> </div>
    )

}

export default Counter
