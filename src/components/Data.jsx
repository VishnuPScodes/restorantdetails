import axios from "axios";
import { useState } from "react"
import { RestorantDetails } from "./RestorantDetails";



export const Data=(()=>{
    const [info,setInfo]=useState([]);
    const [here,setHere]=useState([]);
    const infos=[
        {
            "url": "",
            "name": "Burgger",
            "payment": "CASH",
            "cost": "99",
            "category": "non-veg",
            "id": 1
          },
          {
            "name": "Chicken masala",
            "payment": "CASH",
            "cost": "100",
            "category": "non-veg",
            "id": 2
          },
          {
            "name": "Dosa",
            "payment": "CASH",
            "cost": "60",
            "category": "veg",
            "id": 3
          },
          {
            "name": "Meals",
            "payment": "CARD",
            "category": "veg",
            "cost": "150",
            "id": 4
          },
          {
            "name": "Chicken Bhiriyani",
            "payment": "COUPON",
            "cost": "200",
            "category": "non-veg",
            "id": 5
          },
          {
            "name": "iddli",
            "payment": "CASH",
            "cost": "30",
            "category": "veg",
            "id": 6
          },
          {
            "name": "Taka taka",
            "payment": "CARD",
            "category": "non-veg",
            "cost": "300",
            "id": 7
          },
          {
            "name": "Tandori chicken",
            "payment": "CASH",
            "cost": "300",
            "category": "non-veg",
            "id": 8
          },
          {
            "name": "Alfam",
            "payment": "CASH",
            "cost": "400",
            "category": "non-veg",
            "id": 9
          },
          {
            "name": "Put",
            "payment": "CASH",
            "cost": "60",
            "category": "veg",
            "id": 10
          },
          {
            "name": "Egg fry",
            "payment": "CASH",
            "cost": "80",
            "category": "non-veg",
            "id": 11
          },
          {
            "name": "Beef roast",
            "payment": "CARD",
            "cost": "120",
            "category": "non-veg",
            "id": 12
          },
          {
            "name": "Payasam",
            "payment": "CASH",
            "cost": "60",
            "category": "veg",
            "id": 13
          },
          {
            "name": "chicken masala tika",
            "payment": "CASH",
            "cost": "700",
            "category": "non-veg",
            "id": 14
          },
          {
            "name": "Chicken roast",
            "payment": "COUPON",
            "cost": "800",
            "category": "non-veg",
            "id": 15
          },
          {
            "name": "Fried rice",
            "payment": "CARD",
            "cost": "140",
            "category": "non-veg",
            "id": 16
          },
          {
            "name": "Fried rice",
            "payment": "COUPON",
            "cost": "120",
            "category": "veg",
            "id": 17
          },
          {
            "name": "Chicken chinees soup",
            "payment": "COUPON",
            "cost": "700",
            "category": "non-veg",
            "id": 18
          },
          {
            "name": "Beef soup",
            "payment": "CARD",
            "cost": "900",
            "category": "non-veg",
            "id": 19
          },
          {
            "name": "Porridor",
            "payment": "CARD",
            "cost": "80",
            "category": "veg",
            "id": 20
          }
        ]
    const handlechange=((e)=>{
        const {id,value}=e.target;
        setInfo({...info,
            [id]:value
        })
    })
    const handleSubmit=((e)=>{
        e.preventDefault();
       axios.post(`http://localhost:8080/data`,info)
    })
    console.log(here)
    console.log('aubmit',info)
    
    return <div>
       <form onSubmit={handleSubmit} action="">
           <input id="name" onChange={handlechange} type="text" placeholder="item" />
           <input id="url" onChange={handlechange} type="text" placeholder="url" />
           <select onChange={handlechange} name="" id="payment">
               <option value="">select</option>
               <option value="CASH">CASH</option>
               <option value="CARD">CARD</option>
               <option value="COUPON">COUPON</option>
           </select>
           <input id="cost" onChange={handlechange} type="number" placeholder="cost" />
           <input id="category" onChange={handlechange} type="text" placeholder="cate" />
           <input type="submit" />
       </form>
       <RestorantDetails infos={infos}/>
    </div>
})