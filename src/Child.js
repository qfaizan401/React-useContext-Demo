import React, { useContext } from 'react'
import ValueContext from './ValueContext'

const Child = () => {
    let newValue = useContext(ValueContext)
    return(
        <div>
            Child Component {newValue}
        </div>
    )
}

export default Child