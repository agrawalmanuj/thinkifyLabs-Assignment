import React, { useState } from 'react';

function Widget({grow=1,marginRight=0,marginTop=0,serviceablePincodes,pinCode,images}) {
    const[selected,setSelected] = useState(false);
    
    return (
        <div 
        onClick={()=>{
            setSelected(!selected);
        }}
        style={{flexGrow:grow,
            backgroundImage:`url(${images[0].imageUrl})`,
            marginRight:marginRight,height:"100px",marginTop:marginTop,
        border:selected && "1px solid black",
        display:(pinCode.length===0||serviceablePincodes.length===0||serviceablePincodes.includes(pinCode))?"block":"none"
        }}>
        </div>
    )
}

export default Widget
