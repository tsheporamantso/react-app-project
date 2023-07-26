import React from 'react'

const Names = () => {
    const names = ["Tshepo", "Dumisani", "Lebogang", "Kganya", "Mom", "Dad"];
  return (
    <div>
        {names.map(( value, key) => {
            return <h1 key={key}>{value}</h1>
        })}
    </div>
  )
}

export default Names