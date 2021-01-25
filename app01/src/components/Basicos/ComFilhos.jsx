import React from 'react'


const filhos = props => {
    return (
        <div>
            <h2>Os Filhos</h2>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default filhos
