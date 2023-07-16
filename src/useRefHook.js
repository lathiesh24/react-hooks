import React from 'react'
import { useRef } from 'react';

const useRefHook = () => {
    const inputRef = useRef(null);
  return (
    <>
     <div>useRefHook</div>
     <div>
        <h1>Lathiesh</h1>
        <input placeholder='Ex...' ref={inputRef}/>
        <button
        onClick={()=>{
            inputRef.current.focus()
            inputRef.current.value = "placeholder";
        }}
        >Change Name</button>
     </div>
     </>
   
  )
}

export default useRefHook