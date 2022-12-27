import { useSelector, useDispatch } from "react-redux"
import { counterPracticeActions } from "../store/counterPractice"

const CounterPractice = () => {

    const counter = useSelector(state => state.counterPractice.count)
    const dispatch = useDispatch()
    console.log(counter)

    const myStyle = {
        color: 'white'
    }

    return (
        <div style={myStyle}>
            <h1>Counter Practice</h1>
            <h2>{counter}</h2>
            <button onClick={() => dispatch(counterPracticeActions.increment())}>Increment</button>
            <button onClick={() => dispatch(counterPracticeActions.decrement())}>Decrement</button>
            <button onClick={() => dispatch(counterPracticeActions.reset())}>reset</button>
        </div>
    )
}

export default CounterPractice