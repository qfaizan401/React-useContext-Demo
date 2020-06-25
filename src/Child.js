import React, { useContext } from 'react'
import ValueContext from './ValueContext'

const Child = () => {
    let newValue = useContext(ValueContext)
    console.log(newValue)
    return(
        <div>
            Child Component {newValue}
            <br/>
            <button onClick={() => { newValue[1](++newValue[0]) }}>Update Value</button>
            <button onClick={ () => { newValue[1](newValue[0]=0) } }>RESET</button>
        </div>
    )
}

export default Child