import { useSelector } from "react-redux"

const CounterPractice = () => {

    const counter = useSelector(state => state.counterPractice.count)
    console.log(counter)

    return (
        <div>
            <h1>Counter Practice</h1>
            <h2>{counter}</h2>
        </div>
    )
}

export default CounterPractice