import React, { useReducer } from 'react'
import NumberReducer from './NumberReducer'

const ChlidTwo = () => {
    let [state, dispatch] = useReducer(NumberReducer, 52)
    return(
        <div>
            This is ChlidTwo Comp {state}
            <br/>
            <button onClick={ () => { dispatch({ type:"INCREMENT" }) } }>Increment</button>
            <button onClick={ () => { dispatch({ type:"DECREMENT" }) } }>Decrement</button>
        </div>
    )
}

export default ChlidTwo