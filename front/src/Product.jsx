import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
let data = [];
export default function Product() {

  const [product, setProduct] = useState([])
  const [checked, setChecked] = useState([]);
  const getAllProducts = () => {
    axios.get('http://127.0.0.1:8000/api/product').then((res) => {
      data = res.data
      setProduct(res.data)
    }).catch((err) => {
    })
  }

  const [column, setColumn] = useState([
    { name: 'id', isSortable: false, sortDirection: '' },
    { name: 'name', isSortable: true, sortDirection: '' },
    { name: 'category', isSortable: true, sortDirection: '' },
    { name: 'price', isSortable: true, sortDirection: '' },
  ])







  //js obj practice

  //single object 
  const obj1 = {
    name: 'juned',
    age: '26',
    gender: 'Male',
    address: 'Amarapar,Tankara,Morbi,363650',
    hobbyes: ['playing', 'travelling', 'singing']
  }

  //clonning nested data in javascript
  const clone = JSON.parse(JSON.stringify(obj1));

  //midyfiying neasted data in object
  const newarr = obj1.hobbyes.map(arr => {
    if (arr === 'singing') {
      return 'singing123'
    }
    return arr
  })
  obj1.hobbyes = newarr
  //console.log(obj1)


  //array of object
  const obj2 = [
    { name: 'juned', gender: 'Male', age: '26', company: {name:'hk', role:'ReactJS Developer', location:'Rajkot'} },
    { name: 'abhishek', gender: 'fMale', age: '26', company: { name: 'bl', role: 'ReactJS Developer', location: 'Ahmedabad' } },
    { name: 'kayum', gender: 'Male', age: '29', company: { name: 'gl', role: 'ReactJS Developer', location: 'Rajkot' } },
    { name: 'lorem', gender: 'fMale', age: '33', company: { name: 'sw', role: 'ReactJS Developer', location: 'Surat' } },
    { name: 'ipsum', gender: 'Male', age: '22', company: { name: 'tf', role: 'ReactJS Developer', location: 'Rajkot' } },
    { name: 'decor', gender: 'fMale', age: '29', company: { name: 'ws', role: 'ReactJS Developer', location: 'Baroda' } }
  ]

  //modifying nested element of object array
  const newObj = obj2.map((val, index) => {
      if (val.name === "kayum") {
        val.company.location = "London"
        return val
      }
      return val
  })

  console.log(newObj)


















  const handleSort = (col) => {
    column.map((val, index) => {
      if (val.isSortable) {
        if (val.name === col) {
          if (val.sortDirection === '') {
            const sortArr = [...product].sort((a, b) => {
              return a[col] > b[col] ? 1 : -1
            })
            setProduct(sortArr)
            const updatedArray = column.map(obj => {
              if (obj.name === col) {
                return { ...obj, sortDirection: 'ASC' };
              }
              return obj;
            });
            setColumn(updatedArray)
          } else if (val.sortDirection === 'ASC') {
            const sortArr = [...product].sort((a, b) => {
              return a[col] > b[col] ? -1 : 1
            })
            setProduct(sortArr)
            const updatedArray = column.map(obj => {
              if (obj.name === col) {
                return { ...obj, sortDirection: 'DESC' };
              }
              return obj;
            });
            setColumn(updatedArray)
          } else if (val.sortDirection === 'DESC') {
            const sortArr = [...product].sort((a, b) => {
              return 0
            })
            setProduct(data)
            const updatedArray = column.map(obj => {
              if (obj.name === col) {
                return { ...obj, sortDirection: '' };
              }
              return obj;
            });
            setColumn(updatedArray)
          }
        }
      }
    })
  }

  const handleCheck = () => {

  }
  useEffect(() => {
    getAllProducts();
  }, [])

  const item = product.map((value, index) => {
    return (
      <tr key={index}>
        <td ><input type="checkbox" value={value.id} onChange={handleCheck}
        /></td>
        <td >{index + 1}</td>
        <td > {value.name}</td>
        <td >{value.category}</td>
        <td >{value.price}</td>
      </tr>
    )
  })

  const header = column.map((col, index) => {
    return (
      <td key={index} onClick={() => handleSort(col.name)}>{col.name}</td>
    )
  })
  return (
    <>
      <div className="App mt-5">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              {header}
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


