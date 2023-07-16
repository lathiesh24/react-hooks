import React, { useState } from 'react'

const useReducer = () => {
    const [count, setcount] = useState(0);
    const [showText,setshowText] = useState(true);
  return (
    <>
    <div>useReducer</div>
    <div>
        <h1>{count}</h1>
        <button 
        onClick={()=>{
            setcount (count + 1);
            setshowText (!showText)
        }}>
            Click Here
        </button>
       {showText &&  <div>This is a text</div>}
    </div>
    </>
  )
}

export default useReducer