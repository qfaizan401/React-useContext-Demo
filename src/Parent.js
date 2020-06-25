import React from 'react'
import Child from './Child'
import ChlidTwo from './ChildTwo'

const Parent = () => {
    return(
        <div>
            Parent Component
            <Child />
            <ChlidTwo />
        </div>
    )
}

export default Parent