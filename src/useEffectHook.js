import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useEffectHook = () => {
    const [data, setdata] = useState("");

    useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
          setdata(response.data[0].email);
          console.log("Comment")
       })
    }, [])
    
  return (
    <div>useEffectHook {data}</div>
  )
}

export default useEffectHook