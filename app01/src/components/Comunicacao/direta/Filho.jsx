import React from 'react'


const filho = props => {
    return (
        <div>
            <h2>Componente filho</h2>
            <h4>{props.children} - {props.sobrenome}</h4>
        </div>
    );
}

export default filho
