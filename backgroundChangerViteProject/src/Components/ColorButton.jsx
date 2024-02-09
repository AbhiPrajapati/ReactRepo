import { useState } from "react";


function ColorButton({object,bgColor})
{
    return (
        <button className="color-btn rounded p-6 m-4" onClick={object} style={{backgroundColor:bgColor} }>
          
        </button>
    );
}


export default ColorButton;