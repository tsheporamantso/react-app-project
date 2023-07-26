import React from 'react'

const Job = ({salary, position, company}) => {
  return (
    <div>
        <p>{salary}</p>
        <p>{position}</p>
        <p>{company}</p>
        
    </div>
  )
}

export default Job