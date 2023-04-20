import React from 'react'
import { PropTypes, defaultProps} from 'prop-types';

const NameApellido = (a, b) => {
    return a + ' ' + b;
}



export const Taera1 = ({ title, subTitle }) => {
    return (
        <>
            <h1>{ NameApellido('jose', 'brusa') }</h1>
            <h2>Esta es mi { title }</h2>
            <p>{ subTitle }</p>
        </>
    )
}

Taera1.prototype = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired

}

Taera1.defaultProps = {
    title: 'No hay titulo',
    subTitle: 'No hay subtitle'
}

