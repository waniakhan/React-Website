// import React, { useEffect, useState } from 'react';
// import BrandsModal from '../components/BrandsModal';
// import axios from 'axios';
// import {BsFillPencilFill} from 'react-icons/bs'
// import {AiFillDelete} from 'react-icons/ai'

// export default function Brands() {
//   const [brands, setBrands] = useState([]);

//   useEffect(() => {
//     fetchBrands();
//   }, []);

//   const fetchBrands = () => {
//     axios
//       .get('http://localhost:5800/api/get-all-brands')
//       .then((response) => setBrands(response.data.brands))
//       .catch((error) => console.log(error));
//   };

//   const deleteBrand= (_id) => {
//     axios
//       .delete('http://localhost:5800/api/delete-brand', { data: { _id } })
//       .then(() => fetchBrands())
//       .catch((error) => console.log(error));
//   };

//   const updateBrand = (_id, newData) => {
//     axios
//       .put('http://localhost:5800/api/update-brand', { _id, ...newData })
//       .then(() => fetchBrands()) // Refresh categories after update
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <div className="d-flex justify-content-between align-items-center bg-primary my-2 p-2">
//         <span className="fs-4 fw-bold text-white">Brands</span>
//         <BrandsModal recallData = {setBrands} />
//       </div>
//       <div className="container">
//         <table className="table">
//           <thead>
//             <tr>
//             <th scope="col">#</th>
//               <th scope="col">ID</th>
//               <th scope="col">Brand Name</th>
//               <th scope="col">Brand Image</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//           {brands.map((val, index) => (
//               <tr key={index}>
//                 <th scope='row'>{index + 1}</th>
//                 <th scope="row">{val._id}</th>
//                 <td>{val.BrandName}</td>
//                 <td><img src={val.BrandImage} className='img-fluid' style={{height: '7vh', objectFit: 'contain' }} alt="" /></td>
//                 <button
//                 className="btn btn-dark mx-1"
//                 onClick={() => {
//                   // Similar to BrandsModal, show a prompt or modal for updating
//                   const newBrandName = prompt('Enter new Brand Name:', val.BrandName);
//                   const newBrandImage = prompt('Enter new Brand Image URL:', val.BrandImage);
//                   if (newBrandName && newBrandImage) {
//                     updateBrand(val._id, {
//                       BrandName: newBrandName,
//                       BrandImage: newBrandImage,
//                     });
//                   }
//                 }}
//               >
//                 <BsFillPencilFill />
//               </button>          
//                <button className='btn btn-dark mx-1' onClick={()=>deleteBrand(val._id)}><AiFillDelete /></button>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import BrandsModal from '../components/BrandsModal';
import axios from 'axios';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';

export default function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = () => {
    axios
      .get('http://localhost:5800/api/get-all-brands')
      .then((response) => setBrands(response.data.brands))
      .catch((error) => console.log(error));
  };

  const deleteBrand = (_id) => {
    axios
      .delete('http://localhost:5800/api/delete-brand', { data: { _id } })
      .then(() => fetchBrands())
      .catch((error) => console.log(error));
  };

  const updateBrand = (_id, newData) => {
    axios
      .put('http://localhost:5800/api/update-brand', { _id, ...newData })
      .then(() => fetchBrands())
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center bg-primary my-2 p-2">
        <span className="fs-4 fw-bold text-white">Brands</span>
        <BrandsModal recallData={setBrands} />
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Brand Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((val, index) => (
              <tr key={index}>
                <th scope='row'>{index + 1}</th>
                <td>{val._id}</td>
                <td>{val.BrandName}</td>
                <td>
                  <img src={val.BrandImage} className='img-fluid' style={{ height: '7vh', objectFit: 'contain' }} alt="" />
                </td>
                <td>
                  <button
                    className='btn btn-dark mx-1'
                    onClick={() => {
                      const newBrandName = prompt('Enter new Brand Name:', val.BrandName);
                      const newBrandImage = prompt('Enter new Brand Image URL:', val.BrandImage);
                      if (newBrandName && newBrandImage) {
                        updateBrand(val._id, {
                          BrandName: newBrandName,
                          BrandImage: newBrandImage,
                        });
                      }
                    }}
                  >
                    <BsFillPencilFill />
                  </button>
                  <button className='btn btn-dark mx-1' onClick={() => deleteBrand(val._id)}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
