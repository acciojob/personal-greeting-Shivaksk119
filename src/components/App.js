
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [state, setName] = useState({
    greet : "",
    name : ""
  })
  const onChange = (e)=>{
    const {value} = e.target
    setName({...state,greet:"Hello",name:value+"!"})
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Enter your name:</h2>
        <input type="text" name="input" id="input" onChange={onChange}></input>
        <h2>{state.greet} {state.name}</h2>
    </div>
  )
}

export default App
