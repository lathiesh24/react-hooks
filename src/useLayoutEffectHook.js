import React, { useLayoutEffect, useEffect, useRef } from 'react'

const useLayoutEffectHook = () => {
    const inputRef = useRef(null);

    useLayoutEffect(()=>{
      console.log(inputRef.current.value);
    },[]);

     useEffect(()=>{
    (inputRef.current.value = "Hello!")
     },[]);

  return (
    <>
    <div>useLayoutEffectHook</div>
    <input ref= {inputRef} placeholder='type something' defaultValue="Lathiesh"/>
    </>
    
  )
}

export default useLayoutEffectHook