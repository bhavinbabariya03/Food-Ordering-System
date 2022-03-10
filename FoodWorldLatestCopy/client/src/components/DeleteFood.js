import React,{useSat, useState} from 'react'

function DeleteFood(props) {
    
    return (
        <div>
            <h3 className="my-2">Delete Food</h3>
                <div className="form-group my-3">
                    <br/>
                    <p>Are you sure to delete ?</p>
                    <button type="submit" className="btn btn-danger" >Yes</button>
                    <button type="submit" className="btn btn-primary bg-dark mx-2">Cancel</button>
                </div>
        </div>
    )
}

export default DeleteFood
