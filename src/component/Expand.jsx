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
    <div className="d-grid gap-2">
        <button variant="primary" size="sm">
          FaDownload  Show All FaDownload 
        </button>
      </div>
    </>
);
}

export default Expand;