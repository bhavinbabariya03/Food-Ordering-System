import React,{useState,useEffect,useContext} from 'react'
// import foodContext from '../context/foodContext'    
// import AddFood from './AddFood';
import EditFood from './EditFood';
import DeleteFood from './DeleteFood';
import Form from './Form/Form';

function Foodmenu() {
    const [food, setfood] = useState([])
    const [editfood, seteditfood] = useState({})
    const [deletefood, setdeletefood] = useState({})
    const [mode, setmode] = useState("default")
    // const contex=useContext(foodContext)

    // const {addFood}=contex;

    const changemode=(value)=>{
        setmode(value);
    }

    const getfood=async ()=>{
        const respose=await fetch("http://localhost:5001/api/food/getallfood",{
            method:'GET'
        });
        const json=await respose.json()
        setfood(json);
    }


    useEffect(() => {
        getfood();
    });
    
    let count=0;
    const handleEdit=async (food)=>{
        await setmode("default");
        // delete food["selectedFile"]
        console.log("handle edit",food);
        seteditfood(food);
        setmode("edit");
        window.scrollTo(0, 0);
    }

    const handleDelete=async (food)=>{
        await setmode("delete");
        setdeletefood(food);
        console.log("handle delete",)
        window.scrollTo(0, 0);
    }

    return (
        <>     
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
           {mode=="edit" ? <EditFood food={editfood} seteditfood={seteditfood} changemode={changemode}/> : ""} 
           {mode=="delete" ? <DeleteFood food={deletefood} changemode={changemode}/> : ""}
           {mode=="default" ? <Form/>: ""}
        </div>
        <div className="table shadow-sm p-3 mb-5 bg-white rounded">
            {/* <h3 style={{textAlign:"center"}}>This is Food Menu</h3><br/><br/> */}

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Food name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">PreparingTime</th>
                    {/* <th scope="col">isAvailable</th> */}
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        food.map((f)=>{
                            count++;
                                return <tr key={f._id}>
                                        <th scope="row">{count}</th>
                                        <td>{f.foodItemName}</td>
                                        <td>{f.foodCategory}</td>
                                        <td>{f.pricePerPerson}</td>
                                        <td>{f.foodDeliveryTime}</td>
                                        {/* <td>{f.isAvailable ? "yes" : "no"}</td> */}
                                        <td><button type="button" className="btn btn-primary" onClick={()=>{handleEdit(f)}}>Edit</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={()=>{handleDelete(f)}}>Delete</button></td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
            
        </div>
        </>
    )
}

export default Foodmenu
