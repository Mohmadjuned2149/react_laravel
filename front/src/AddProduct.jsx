import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddProduct() {
    const [data, setData] = useState({
        pname: '',
        pcategory: '',
        price: ''
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(prevState => ({
            ...prevState, [name]: value
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data1 = { ...data }
        axios.post('http://127.0.0.1:8000/api/addproduct', data1).then(res => {
            console.log(res)
            setData({
                pname: '',
                pcategory: '',
                price: ''
            })
        }).catch(err => {
            console.log(err)
        })
    }

    console.log(data)
    return (
        <center>
            <div className='w-50 mt-5'>
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="pname">Product Name</label>
                        <input type="text" className="form-control" name='pname' aria-describedby="emailHelp" onChange={handleChange} id='pname' value={data.pname} />

                    </div>    <br />
                    <div className="form-group">
                        <label for="cat">Category</label>
                        <input type="text" className="form-control" name='pcategory' onChange={handleChange} id='cat' value={data.pcategory} />
                    </div><br />
                    <div className="form-group">
                        <label for="pass">Price</label>
                        <input type="password" className="form-control" name='price' onChange={handleChange} id='pass' value={data.price} />
                    </div><br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </center>
    );
}

export default AddProduct;