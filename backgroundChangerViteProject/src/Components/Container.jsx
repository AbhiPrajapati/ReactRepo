import { useState } from "react";





function Container()
{
    const [color,setColor] = useState("blue");
    
    
    return(
        <div id="body-container" style={{backgroundColor:color}}>
        <div className="container rounded" >
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>GREEN</button>
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>RED</button>
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>BLUE</button>
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("gray")} style={{backgroundColor:"gray"}}>GRAY</button>
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>YELLOW</button>
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("purple")} style={{backgroundColor:"purple"}}>PURPLE</button>
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("black")} style={{backgroundColor:"black"}}>BLACK</button>
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("pink")} style={{backgroundColor:"pink"}}>PINK</button>
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("violet")} style={{backgroundColor:"violet"}}>VIOLET</button>
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("cyan")} style={{backgroundColor:"cyan"}}>CYAN</button>
        <button className="color-btn rounded p-6 m-4" onClick={()=>setColor("darkblue")} style={{backgroundColor:"darkblue"}}>DARKBLUE</button>
        </div>
        </div>
    );
}

export default Container;