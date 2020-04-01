import React, { Fragment } from 'react'

//Componont stytLess
const Member = (props) =>  {
    const { nom, age, children, cacherNom, handleChangeName, handleChangeAge } = props
    return (
        <Fragment>
            <h2 
                style={{ backgroundColor : 'purple', 
                color : age < 30 ? 'yellow' : 'white' }}>
                {nom.toUpperCase()} : { age }
            </h2>
            <input value={ nom } onChange={ handleChangeName } type="text" />
            <br/><br/>
            <input value={ age } onChange={ handleChangeAge } type="number" />
            <br/><br/>
            <button 
                onClick={cacherNom} >
                X
            </button>
            { children ? <p> { children } </p> :  <Fragment/>}            
        </Fragment>
    )
}

export default Member