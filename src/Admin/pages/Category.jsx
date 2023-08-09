
import React, { useEffect, useState } from 'react';
import CategoryModal from '../components/CategoryModal';
import axios from 'axios';
import {BsFillPencilFill} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
export default function Category() {
  const [category, setCategory] = useState([]); 

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios
      .get('http://localhost:5800/api/get-all-categories')
      .then((response) => setCategory(response.data.category))
      .catch((error) => console.log(error));
  };

  const deleteCategory = (_id) => {
    axios
      .delete('http://localhost:5800/api/delete-category', { data: { _id } })
      .then(() => fetchCategories())
      .catch((error) => console.log(error));
  };

  const updateCategory = (_id, newData) => {
    axios
      .put('http://localhost:5800/api/update-category', { _id, ...newData })
      .then(() => fetchCategories()) // Refresh categories after update
      .catch((error) => console.log(error));
  };

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
              <button
                className="btn btn-dark mx-1"
                onClick={() => {
                  // Similar to BrandsModal, show a prompt or modal for updating
                  const newCategoryName = prompt('Enter new Category Name:', val.CategoryName);
                  const newCategoryImage = prompt('Enter new Category Image URL:', val.CategoryImage);
                  if (newCategoryName && newCategoryImage) {
                    updateCategory(val._id, {
                      CategoryName: newCategoryName,
                      CategoryImage: newCategoryImage,
                    });
                  }
                }}
              >
                <BsFillPencilFill />
              </button>          
               <button className='btn btn-dark mx-1' onClick={()=>deleteCategory(val._id)}><AiFillDelete /></button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
