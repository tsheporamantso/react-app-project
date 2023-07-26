import React from "react";

const Age = () => {
  const age = 17;
  return <div>{age >= 18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>}</div>;
};

export default Age;
