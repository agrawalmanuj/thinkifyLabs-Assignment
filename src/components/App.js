import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { url } from '../constants';
import {fetchDataFromAPI,inputPincode} from "../redux/actions";
import Widget from './Widget';
import SearchBar from "./SearchBar";

    function App() {
        const dispatch = useDispatch()
        const widgetData = useSelector((state) => state.counter.widgetData);
        const value = useSelector((state) => state.counter.inputPinCodeValue);
        const [loader,setLoader] = useState(false);

const fetchData = async () =>{
const response = await fetch(url.getWidgetUrl);
const data = await response.json();
dispatch(fetchDataFromAPI({data}))
setLoader(false);
}
    useEffect(() => {
        setLoader(true);
        fetchData()
    }, [])  

 
    const renderList = (data,parent=null) =>{
        if(data.slotType==="WIDGET"){
            if(parent){
                return (
                    <Widget grow={`${parseInt(data.grow)/100}`}
                    marginRight="10px"
                    serviceablePincodes={data.serviceablePincodes||[]}
                    pinCode={value}
                    images={data.assets||[]}
                    />
                )
            }
            return (
                <Widget 
                marginRight="10px"
                marginTop="10px"
                serviceablePincodes={data.serviceablePincodes||[]}
                pinCode={value}
                images={data.assets||[]}
                />
            )
        }
        return (
            parent ? data.children.map((child)=>renderList(child,data)):(
                <div style={{marginTop:"10px",width:"100%",display:"flex"}}>
                {data.children.map((child)=>renderList(child,data))}
            </div>
            )
        );
       
    }
    

// const filterList = (list,pinCode,parent=null) => {
// list.forEach((data)=>{
//     if(data.slotType==="WIDGET"){
//         if(data?.serviceablePincodes.includes(pinCode)){
//             console.log("dhjsd",data);
//             //setFilterWidgetData([...filterWidgetData,data]);
            
//         }
        
//     }
//     else{
//         filterList(data.children,pinCode,data);
        
       
//     }
// });
// }
const handleChange = (value) =>{
    dispatch(inputPincode({value}));
}

    return (

        <>
        {loader ? (
            <h3>loader</h3>
        ):(
            <>
             <SearchBar handleChange={handleChange} value={value}/>
            <div>
            {(widgetData||[]).map((data)=>{
                return(
                    renderList(data)
                )
            })}
            </div>
            </>
        )}
        </>

     );

    }


    export default App;