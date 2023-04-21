import React, { useState } from 'react'
import PropTypes from 'prop-types'



const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => {
        // console.log(event)
        setCounter( counter + 1 )
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )
}

export default CounterApp

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}
