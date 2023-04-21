import React, { useState } from 'react'
import PropTypes from 'prop-types'



const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => {
        // console.log(event)
        setCounter( counter + 1 )
    }

    const handleRest = () => {
        setCounter( counter -1 )
    }

    const handleStart = () => {
        setCounter( value )
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>{ counter }</h2>
            <div className='btn-container'>
                <button onClick={ handleAdd }>
                    +1
                </button>
                <button onClick={ handleRest }>
                    -1
                </button>
                <button onClick={ handleStart }>
                    Reset
                </button>
            </div>
        </>
    )
}

export default CounterApp

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}
