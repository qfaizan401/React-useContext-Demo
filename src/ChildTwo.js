import React, { useReducer } from 'react'
import NumberReducer from './NumberReducer'

const ChlidTwo = () => {
    let [state, dispatch] = useReducer(NumberReducer, 52)
    return(
        <div>
            This is ChlidTwo Comp {state}
            <br/>
            <button onClick={ () => { dispatch({ type:"INCREMENT", val:10}) } }>Increment</button>
            <button onClick={ () => { dispatch({ type:"DECREMENT", val:10}) } }>Decrement</button>
        </div>
    )
}

export default ChlidTwo