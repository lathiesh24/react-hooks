import React, { useState } from 'react'

const Button = () => {
    const [toggle, settoggle] = useState(false);
  return (
    <>
     <button
    onClick={()=>{
        settoggle(!toggle);
    }}>Button from child</button>
    {toggle && <span>Toggle</span>}</>
  )
}

export default Button