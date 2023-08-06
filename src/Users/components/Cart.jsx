import React, { useState, useContext } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from './CartItems';
import { CartContext } from '../context/addtoCart/context';

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const [show, setShow] = useState(false); // Cart visibility state

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="btn btn-dark position-relative"
      >
        <BsFillCartFill />
        {state.cart?.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {state.cart.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        )}
      </button>

      <Offcanvas show={show} onHide={() => setShow(false)} placement="end" name="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Cart
            <button
              className="ms-4 btn btn-outline-dark"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {state.cart?.map((product, index) => (
            <CartItems key={index} product={product} />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}