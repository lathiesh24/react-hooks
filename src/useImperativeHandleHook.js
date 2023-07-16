import React, { useRef } from 'react'
import Button from './Button'
const useImperativeHandleHook = () => {
    const buttonRef = useRef(null);
  return (
    <>
    <button onClick={()=>{
        buttonRef.current.alterToggle();
    }}>Button From parent</button>
    <Button ref={buttonRef}/>
    </>
  )
}

export default useImperativeHandleHook