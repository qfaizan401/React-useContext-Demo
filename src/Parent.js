import React from 'react'
import Child from './Child'

const Parent = (props) => {

    return(
        <div>
            Parent Component
            <Child num_parent={props.num}/>
        </div>
    )
}

export default Parent