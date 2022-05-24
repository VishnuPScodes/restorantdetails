import axios from "axios";
import { useEffect, useState } from "react";
import { Tg } from "./Tg";





export const RestorantDetails=((props)=>{
console.log('props',props.infos)
const [propD,setPropD]=useState([]);
// useEffect(()=>{
//     setPropD(props.infos)
// },[propD])
const [data,setData]=useState([]);
useEffect(()=>{
  axios.get(`http://localhost:8080/data`).then((res)=>{
      setData(res.data)
  })
},[])

    const handleChange=((e)=>{
        axios.get(`http://localhost:8080/data?_sort=cost&_order=asc`).then((res)=>{
            setData(res.data)
        })
    })
    const handleCash=(()=>{
        axios.get(`http://localhost:8080/data?_sort=payment=CASH`).then((res)=>{
            setData(res.data)
        })
    })



console.log('data props',propD)
// const [data,setData]=useState(props.data);

 return <div>
 <div id="navbar"> <select onChange={handleChange} name="" id="">
         <option value="">Sort by</option>
         <option value="price">Price</option>
         </select>
         <button onClick={handleCash}>Cash only restorants</button>
     <h1 id="rest" style={{marginLeft:"480px"}}>RESTORANT</h1></div>
     <div id="main"> 
     {data.map((e)=>{
         return <div key={e.id} id="item">
             <h2>{e.name}</h2>
             <p id="red">Price:{e.cost}RS</p>
             <i>Payment method:{e.payment}</i>
            <Tg cont={e.category}>{e.category}</Tg>
         </div>
     })}
     </div>

 </div>  
} )