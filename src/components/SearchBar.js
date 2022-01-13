import React from 'react'

function SearchBar({handleChange,value}) {
    return (
        <div style={{display:"flex",justifyContent:"center"}}> 
            <input 
            placeholder="Enter Pincode"
            style={{width:"100%",height:"36px"}}
            onChange={(e)=>{
                handleChange(e.target.value);
            }} value={value}/>
        </div>
    )
}

export default SearchBar
