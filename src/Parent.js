import React, { useContext } from 'react'
import Child from './Child'
import ValueContext from './ValueContext'

const Parent = (props) => {
    let myValue = useContext(ValueContext)
    return(
        <div>
            Parent Component {myValue}
            <Child />
        </div>
    )
}

export default Parent