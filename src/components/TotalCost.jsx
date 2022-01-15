import React from 'react'

function TotalCost({totalCost}) {
    return (
        <div className='cost'>
            <h1>
            Your Total Cost Is : {totalCost}
            </h1>
        </div>
    )
}

export default TotalCost
