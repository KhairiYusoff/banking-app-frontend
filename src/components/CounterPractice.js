import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { counterPracticeActions } from "../store/counterPractice"

const CounterPractice = () => {

    const [showCounter, setShowCounter] = useState(false)
    const counter = useSelector(state => state.counterPractice.count)
    const dispatch = useDispatch()
    console.log(counter)

    const myStyle = {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50vh'
    }

    const myStyle2 = {
        marginBottom: '10px'
    }

    return (
        <div style={myStyle}>
            {showCounter && (<div style={myStyle2}>
                <h1>Counter Practice</h1>
                <h2>{counter}</h2>
                <button onClick={() => dispatch(counterPracticeActions.increment())}>Increment</button>
                <button onClick={() => dispatch(counterPracticeActions.incrementTen(10))}>Increment by 10</button>
                <button onClick={() => dispatch(counterPracticeActions.decrement())}>Decrement</button>
                <button onClick={() => dispatch(counterPracticeActions.decrementTen(-10))}>Decrement by 10</button>
                <button onClick={() => dispatch(counterPracticeActions.reset())}>reset</button>
            </div>)}
            {<button onClick={() => setShowCounter(!showCounter)}>{showCounter ? 'HIDE' : 'SHOW'}</button>}
        </div>

    )
}

export default CounterPractice