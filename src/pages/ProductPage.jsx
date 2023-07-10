
import React, { useEffect, useReducer, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'
import ImageSection from '../Components/ImageSection'
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import Navigation from '../components/Navigation'
export default function ProductPage() {

    const { productID } = useParams()
    const [product, setproduct] = useState({})
    const [review, setReview] = useState("")
    const [ratingstar, setratingStar] = useState(0)
    const [productQuantity, setproductQuantity] = useState(1)

    const ratingChanged = (newRating) => {
        setratingStar(newRating)
    }

    const submitReview = () => {
        const payload = {
            productID: productID,
            review: review,
            rating: ratingstar
        }
        console.log(payload)

        Swal.fire({
            title: 'Successfully Submitted!',
            text: 'Thanks for reviewing our product',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })

        setReview('')
        setratingStar(0)

    }
    const counterCallback = (state, action) => {
      switch (action.type) {
        case "INCREASE_COUNT":
          return { ...state, count : state.count + 1 }
          
          case "DECREASE_COUNT":
            return { ...state, count : state.count > 1 ? state.count - 1 : 1 }
        default:
      return state;
      }

    }
    const data = {
count: 1
    }
    const [state, dispatch] = useReducer(counterCallback, data)

    const addToCart = () => {
        const payload = {
            ...product,
            productQuantity,
            totalPrice: product.price * productQuantity
        }

        console.log(payload)

        Swal.fire({
            title: 'Added to Cart!',
            text: 'Check your Cart for Check Out',
            icon: 'success',
            confirmButtonText: 'Continue Shopping'
        })
    }

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${productID}`).then(json => setproduct(json.data))

    }, [])


    return (
        <>
        
        <Navigation />
            <div className="text-center my-5 " >
                <h1 style={{ marginTop: '100px' }}>{product.title} - {product.price}$</h1>
                <p className="text-secondary">{product.description}</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="">

                        <div className="product-image  ">
                            {product?.images?.length > 0 && <ImageSection images={product.images} />}
                        </div>

                        <div className="d-flex justify-content-center my-3">
                            <ReactStars
                                count={5}
                                size={24}
                                edit={false}
                                value={product.rating}
                                color2={'#ffd700'}
                            />
                        </div>
<div className="d-flex justify-content-center my-3">
  <button className='btn btn-dark mx-3' onClick={() => dispatch({type : "INCREASE_COUNT"})}>+</button>
{state.count}
<button className='btn btn-dark mx-3' onClick={() => dispatch({type : "DECREASE_COUNT"})}>-</button>

</div>                     

                        <div className='d-flex justify-content-center my-3'>
                            <button className='btn btn-dark ' onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>

                    <div className="col-md-12 my-5">

                        <div className="container">
                            <div className='mb-5'>
                                <h2 className="text-center">Reviews Us</h2>
                                <p className="text-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.</p>
                            </div>

                            <div>
                                <div className="form-floating">
                                    <textarea
                                        className="form-control"
                                        placeholder="Leave a comment here"
                                        id="floatingTextarea2"
                                        style={{ height: 100 }}
                                        defaultValue={review}
                                        onChange={(e) => setReview(e.target.value)}
                                    />
                                    <label htmlFor="floatingTextarea2">Comments</label>
                                </div>

                                <div className=' mt-3'>
                                    Rate Us :
                                    <div className="d-flex align-items-center">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={ratingstar}
                                            onChange={ratingChanged}
                                            color2={'#ffd700'}
                                        />
                                        <span className='ms-3'>({ratingstar})</span>
                                    </div>
                                </div>
                                <button className='my-3 btn btn-dark' onClick={submitReview}>Submit review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          {/* footer  */}
          
<footer className="footer" style={{ backgroundColor: "gray"}}>
  <div className="footer__container">
    <div className="footer__top">
      <div className="company__info">
        <h2 className="company__logo">ZM STORE</h2>
        <p className="company__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure.
          Harum, animi dolores, nam, ad magni expedita.
        </p>
        <h2>Contact us</h2>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="#" className="footer__list-link">
            <i className="icon icon--linkedin"><BsLinkedin></BsLinkedin></i>
            </a>
          </li>
          <li className="footer__list-item">
            <a href="#" className="footer__list-link ">
            <i className="icon icon--instagram"><BsInstagram></BsInstagram></i>
       
            </a>
          </li>
          <li className="footer__list-item">
            <a href="#" className="footer__list-link">
            <i className="icon icon--github"><AiFillGithub></AiFillGithub></i>
            </a>
          </li>

          <li className="footer__list-item">
            <a href="#" className="footer__list-link">
            <i className="icon icon--whatsapp"><BsWhatsapp></BsWhatsapp></i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="footer__title"> Store</h6>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a href="/" className="footer__list-link">
            Home
            </a>
          </li>
          <li className="footer__list-item">
            <a href="/products" className="footer__list-link">
            Products
            </a>
          </li>
          <li className="footer__list-item">
            <a href="/contact" className="footer__list-link">
            Contact
            </a>
          </li>
          <li className="footer__list-item">
            <a href="/about" className="footer__list-link">
            About
            </a>
          </li>
        </ul>
      </div>
      <div className="form-group mb-4">
  <input type="email" className="form-control bg-transparent" placeholder="Enter Your Email here"/>
  <button className="mt-3  btn-style">Submit</button>

</div>

    </div>
  </div>
</footer>
<div className="container-fluid copyright-section">
  <p className="p-0">
    copyright <a href="#">@ WANIA KHAN.</a>All Rights Reserved
  </p>
</div>  
        </>
    )
}
