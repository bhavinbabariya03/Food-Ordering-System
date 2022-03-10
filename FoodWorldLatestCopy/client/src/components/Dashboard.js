import React from 'react'

function Dashboard() {
    return (
        <>
        <div className="card shadow-sm rounded">
            <div className="cardTop">
                Total Order
            </div>
            <div className="cardMiddle">
                51
            </div>
        </div>
        <div className="card shadow-sm rounded">
            <div className="cardTop">   
                New Order
            </div>
            <div className="cardMiddle">
                8
            </div>
        </div>
    
        <div className="card shadow-sm rounded">
            <div className="cardTop">   
                Confirmed Order
            </div>
            <div className="cardMiddle">
                5
            </div>
        </div>
        <div className="card shadow-sm rounded">
            <div className="cardTop">   
                Food Being Prepared
            </div>
            <div className="cardMiddle">
                7
            </div>
        </div>
        <div className="card shadow-sm rounded">
            <div className="cardTop">   
                Food Pickup
            </div>
            <div className="cardMiddle">
                4
            </div>
        </div>
        <div className="card shadow-sm rounded">
            <div className="cardTop">   
                Total Food Deliver
            </div>
            <div className="cardMiddle">
                25
            </div>
        </div>
        <div className="card shadow-sm rounded">
            <div className="cardTop">   
                Cancelled Order
            </div>
            <div className="cardMiddle">
                1
            </div>
        </div>
        <div className="card shadow-sm rounded">
            <div className="cardTop">   
                Total Regd. User
            </div>
            <div className="cardMiddle">
                112
            </div>
        </div>
        <div className="card shadow-sm rounded">
            <div className="cardTop">   
                Total Regd. Serviceman
            </div>
            <div className="cardMiddle">
                22
            </div>
        </div>
        </>
    )
}

export default Dashboard
