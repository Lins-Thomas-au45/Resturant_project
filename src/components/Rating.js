import React from 'react'

function Rating({data}) {
    
  return (
    
    <>
        {data.map(item =>(
            <>
            <h3>{item.name}</h3>
            <div>
                <p>{item.date}</p>
                <p>{item.comments}</p>
                <p>Rating: {item.rating}</p>
            </div>
            </>
        ))}
</>
  )
}

export default Rating