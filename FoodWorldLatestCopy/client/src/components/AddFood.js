import React from 'react'

function AddFood() {
    return (
        <div>
            <h3 className="my-3">Add Food</h3>
            <form className="row">
                
                <div className="form-group col-md-4 my-2">
                    <label htmlFor="name">Food Name : </label>
                    <input type="text" className="form-control" id="name" placeholder="Food Name"/>
                </div>
                <div className="form-group col-md-3  my-2">
                    <label htmlFor="category">Category</label>
                    <input type="text" className="form-control" id="category" placeholder="Category"/>
                </div>
                <p/>
                <div className="form-group col-md-2 my-2">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" id="price" />
                </div>
                <div className="form-group col-md-2  my-2">
                    <label htmlFor="time">Preparing Time</label>
                    <input type="number" className="form-control" id="inputAddress2" placeholder="Approximate Time"/>
                </div>
                <div className="form-group col-md-2  my-2">
                <label htmlFor="inputState">is Available</label>
                <select id="inputState" className="form-control">
                    <option selected>True</option>
                    <option>False</option>
                </select>
            </div>
            
            <div className="form-group my-2 ">
                <button type="submit" className="btn btn-primary bg-dark ">Add Food</button>
            </div>
            </form>
        </div>
    )
}

export default AddFood
