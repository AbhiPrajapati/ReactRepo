 const colorChanger = () =>{
    document.body.style.backgroundColor = "red";
}

function ColorButton(props)
{
    return (
        <button onClick="colorChanger"className="color-btn rounded p-6 m-4" style={{backgroundColor:props.bgColor}}>
          
        </button>
    );
}


export default ColorButton;