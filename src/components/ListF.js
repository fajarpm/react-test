import React from 'react'

function ListF() {
    const lst = ['john', 'jacob']
    const lstMap = lst.map((item) =>  <h1>{item}</h1> );
    return (
        <div>{lstMap}</div>
    )
}

export default ListF