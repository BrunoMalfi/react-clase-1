import React from 'react'

export const Person = (props) => {
    return(
        <div>
            <br/>
            <span>I'm {props.name} {props.surname}</span>
            <br/>
            <span>I'm {props.age} years old</span>
        </div>
)
}

export default Person