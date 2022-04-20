import { useState } from "react";

const Expand = ({children})=>{
    const[isOpen,setisOpen] = useState(false);

    const toggleOpen = ()=>{
        setisOpen((currentOpen)=>!currentOpen);
    }
return (
    <>
    {isOpen ? children : null}
    <button onClick={toggleOpen}>Show All</button>
    </>
);
}

export default Expand;