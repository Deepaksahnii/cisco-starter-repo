import React from 'react'



const exhibit = (props) => {
    return (<>
        <div className="exhibit-container">
                <div className='exhibit'>
                    <h3>{props.name}</h3>
                    <p>{props.children}</p>
                </div>
            </div>
        </>
        )
}
   export default exhibit;