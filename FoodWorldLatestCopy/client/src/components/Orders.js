import React,{useState,useEffect} from 'react'
import Order from './Order';

function Orders() {
    const [food, setfood] = useState([])
    
    // const getfood=async ()=>{
    //     const respose=await fetch("http://localhost:5000/api/food/getallfood",{
    //         method:'GET'
    //     });
    //     const json=await respose.json()
    //     setfood(json);
    // }
    // useEffect(() => {
    //     getfood();
    // },[]);

    return (
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
            {/* <h3> Current Order </h3> */}
            <span className="badge badge-dark" style={{fontSize:"15px",padding:"10px"}}>Current Order</span>
            {
                    food.map((f)=>{
                        // return <h1 key={f._id}>{f.foodName}</h1>
                        return <Order key={f._id} data={f}/>
                    })
            }
        </div>
    )
}

export default Orders
