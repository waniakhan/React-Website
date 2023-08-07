import React, { useEffect, useState } from 'react';
import BrandsModal from '../components/BrandsModal';
import axios from 'axios';

export default function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5800/api/get-all-brands')
      .then((json) => setBrands(json.data.brands))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center bg-primary my-2 p-2">
        <span className="fs-4 fw-bold text-white">Brands</span>
        <BrandsModal recallData = {setBrands} />
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
            <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Brand Image</th>
            </tr>
          </thead>
          <tbody>
          {brands.map((val, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <th scope="row">{val._id}</th>
                <td>{val.BrandName}</td>
                <td><img src={val.BrandImage} className='img-fluid' style={{height: '7vh', objectFit: 'contain' }} alt="" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
