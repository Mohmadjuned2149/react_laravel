import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

export default function Product() {
  
    const [product, setProduct] = useState([])
    const [checked,setChecked]=useState([]);

  const getAllProducts = () => {
    axios.get('http://127.0.0.1:8000/api/product').then((res) => {
      //console.log(res.data)
      setProduct(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }
 
  const handleCheck =(e)=>{

  }
 
  useEffect(() => {
    getAllProducts();
  }, [])
 
  const item = product.map((value, index) => {
    return (
      <tr key={index}>
        <td ><input type="checkbox" value={value.id} onChange={handleCheck}
       /></td>
        <td >{index+1}</td>
        <td > {value.name}</td>
        <td >{value.category}</td>
        <td >{value.price}</td>
      </tr>
    )
  })
  return (
    <>
      <div className="App mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>sr no</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>prise</th>

            </tr>
          </thead>
          <tbody>
            {
              item
            }
          </tbody>
        </Table>
      </div>
    </>
  );
}


