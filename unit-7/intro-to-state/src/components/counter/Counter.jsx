import React from 'react'
// NOTE: There is styling in App.css for the counter
function Counter({count, setCount}) {

    function countDown() {
        setCount(count - 1);
    }

    function countUp() {
        setCount(count + 1);
    }

    return (
        <div className='counter'>
            {/* <button onClick={}>- (2)</button> */}
            <button onClick={countDown}>-</button>
            <span>{count}</span>
            <button onClick={countUp}>+</button>
            {/* <button onClick={countUp}>+ (2)</button> */}
        </div>
    )
}

export default Counter