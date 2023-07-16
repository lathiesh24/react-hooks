import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Button = forwardRef((props, ref) => {
    const [toggle, settoggle] = useState(false);

    useImperativeHandle(ref, () =>({
        alterToggle(){
            settoggle(!toggle);
        },
    }));
  return (
    <>
     <button>Button from child</button>
    {toggle && <span>Toggle</span>}</>
  )
});

export default Button