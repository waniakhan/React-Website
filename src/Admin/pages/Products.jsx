
import React, { useEffect, useState } from 'react';

import ProductsModal from '../components/ProductsModal';
import axios from 'axios';

export default function Products() {
  const [Product, setProduct] = useState([]); 

//   useEffect(() => {
//     axios.get('http://localhost:5800/api/get-all-categories')
//       .then((json) => setProduct(json.data.Product))
//       .catch((err) => console.log(err));
//   }, []);



  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center bg-primary my-2 p-2">
        <span className="fs-4 fw-bold text-white">Products</span>
        <ProductsModal recallData = {setProduct} />
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col"> Name</th>
              <th scope="col">Product</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>

            </tr>
          </thead>
          <tbody>
          {/* {Product.map((val, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <th scope="row">{val._id}</th>
                <td>{val.ProductName}</td>
                <td><img src={val.ProductImage} className='img-fluid' style={{height: '7vh', objectFit: 'contain' }} alt="" /></td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
