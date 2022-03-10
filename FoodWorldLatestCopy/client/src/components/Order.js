import React from 'react'

function Order(props) {
    return (
        <div className=" row shadow-none p-3 my-2 bg-light rounded">
            
            {console.log(props.data)}
            {/* <h5>{props.data.foodName}</h5>
            <h5>{props.data.category}</h5>
            <h5>{props.data.price}</h5>
            <h5>{props.data.isAvailable}</h5>
            <h5>{props.data.foodName}</h5> */}
            <div className="col-md-2">
                #22445244242442424
            </div>
            <div className="col-md-2">
                Dry Manchurian
            </div>
            <div className="col-md-2">
                food
            </div>
            <div className="col-md-2">
                food
            </div>
            <div className="col-md-2">
                food
            </div>
            <div className="col-md-2">
                <div style={{display: 'flex',fontSize:"20px",marginRight:"100px",justifyContent: 'flex-end',position: 'absolute',right: '10'}}> 
                    <span className="badge rounded-pill bg-success" style={{padding:"10px 25px"}}> Done </span>
                </div>
            </div>
        </div>
    )
}

export default Order
