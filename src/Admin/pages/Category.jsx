
import React, { useEffect, useState } from 'react';
import CategoryModal from '../components/CategoryModal';
import axios from 'axios';
import {BsFillPencilFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
export default function Category() {
  const [category, setCategory] = useState([]); 

  useEffect(() => {
    axios.get('http://localhost:5800/api/get-all-categories')
      .then((json) => setCategory(json.data.category))
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    console.log(id)
    axios.delete('http://localhost:5800/api/delete-category',
    {
      id
    }).then((json)=>setCategory(json.data.category))

  }



  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center bg-primary my-2 p-2">
        <span className="fs-4 fw-bold text-white">Categories</span>
        <CategoryModal recallData = {setCategory} />
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {category.map((val, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <th scope="row">{val._id}</th>
                <td>{val.CategoryName}</td>
                <td><img src={val.CategoryImage} className='img-fluid' style={{height: '7vh', objectFit: 'contain' }} alt="" /></td>
              <td>
                <button className='btn btn-dark mx-1'><BsFillPencilFill /></button>
              <button className='btn btn-dark mx-1' onClick={()=>deleteProduct(val._id)}><AiFillDelete /></button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
