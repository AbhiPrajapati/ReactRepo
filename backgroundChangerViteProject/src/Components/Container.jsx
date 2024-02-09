import { useState } from "react";
import ColorButton from "./ColorButton";





function Container()
{
    const [color,setColor] = useState("blue");
    
    function changeBackgroundColor()
    {
        setColor("green");
    }
    
    return(
        <div id="body-container" style={{backgroundColor:color}}>
        <div className="container rounded" >
            <ColorButton bgColor="green" onClick={changeBackgroundColor}></ColorButton>
            <ColorButton bgColor="red" onClick={()=>setColor("green")}></ColorButton>
            <ColorButton bgColor="blue" onClick={()=>setColor("green")}></ColorButton>
            <ColorButton bgColor="green" onClick={()=>setColor("green")}></ColorButton>
            <ColorButton bgColor="red" onClick={()=>setColor("green")}></ColorButton>
            <ColorButton bgColor="blue" onClick={()=>setColor("green")}></ColorButton>
            <ColorButton bgColor="green" onClick={()=>setColor("green")}></ColorButton>
            <ColorButton bgColor="red" onClick={()=>setColor("green")}></ColorButton>
            <ColorButton bgColor="blue" onClick={()=>setColor("green")}></ColorButton>
            <ColorButton bgColor="green" onClick={()=>setColor("green")}></ColorButton>
            <ColorButton bgColor="red" onClick={()=>setColor("green")}></ColorButton>
        </div>
        </div>
    );
}

export default Container;