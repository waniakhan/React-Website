
import React from 'react';


function CartItems({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className="card cart-item"  style={{ height: '120px',backgroundColor:'white' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="card-img-top cart-item-image"
            style={{ height: '120px', width: '180px',backgroundColor:'white' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body bg-white">
            <h5 className="card-title cart-item-title text-black mt-3 mb-0">{product.title}</h5>
            <p className="card-text cart-item-price text-black">{product.price}$</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
