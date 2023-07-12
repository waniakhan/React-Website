
import React, { useState } from 'react';

function CartItems({ product }) {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card cart-item" style={{ height: '190px', backgroundColor: 'white' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="card-img-top cart-item-image"
            style={{ height: '120px', width: '180px', backgroundColor: 'white' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body bg-white">
            <h5 className="card-title cart-item-title text-black mt-3 mb-0">{product.title}</h5>
            <div className="d-flex justify-content-center my-3">
              <button className='btn btn-dark mx-3' onClick={increaseCount}>+</button>
              {count}
              <button className='btn btn-dark mx-3' onClick={decreaseCount}>-</button>
            </div>
            <p className="card-text cart-item-price text-black">{product.price * count}$</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
