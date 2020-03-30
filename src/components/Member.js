import React, { Fragment } from 'react'

//Componont stytLess
const Member = (props) =>  {
    const { nom, age, children } = props
    return (
        <Fragment>
            <h2 
                style={{ backgroundColor : 'purple', 
                color : age < 30 ? 'yellow' : 'white' }}>
                {nom.toUpperCase()} : { age }
            </h2>
            { children ? <p> { children } </p> :  <Fragment/>}            
        </Fragment>
    )
}

export default Member