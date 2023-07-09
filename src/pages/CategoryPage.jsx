
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import Navigation from '../components/Navigation';
import Spinner from 'react-bootstrap/Spinner';


export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true); // Show the loader
  
    axios.get(`https://dummyjson.com/products/category/${categoryName}`).then((json) => {
      setProducts(json.data.products);
      setTimeout(() => {
        setIsLoading(false); // Hide the loader after 2000ms
      }, 2000);
    });
  }, [categoryName]);

  return (
    <>
      <Navigation/>

      <div className="container">
        <div className="my-5 text-center">
          <h1 style={{ marginTop: '100px' }}>{categoryName.toUpperCase()}</h1>
          <p className="text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia nihil! Nemo sunt reprehenderit
            voluptates amet itaque ibero in unde, molestias illo veniam, dolore veritatis eaque ipsum. Molestiae, nam
            architecto!
          </p>
        </div>

        <section>
          <div className="pricing-table">
            {isLoading ? (
              <div className="loader">
                <Spinner animation="grow" />
              </div>
            ) : (
              products &&
              products.map((val, key) => (
                <Link className="text-decoration-none" to={`/products/${val.id}`} key={key}>
                  <div className="pricing-table__item">
                    <h3 className="pricing-table__title">{val.title}</h3>
                    <p className="pricing-table__subtitle">{val.subtitle}</p>
                    <div className="pricing-table__thumbnail">
                      <img src={val.thumbnail} alt={val.title} />
                    </div>
                    <div className="pricing-table__plan">
                      <span className="pricing-table__plan-currency">$</span>
                      <span className="pricing-table__plan-price">{val.price}</span>
                    </div>
                    <p className="pricing-table__description">{val.description}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </div>

      {/* footer */}
      <footer className="footer" style={{ backgroundColor: 'gray' }}>
        <div className="footer__container">
          <div className="footer__top">
            <div className="company__info">
              <h2 className="company__logo">ZM STORE</h2>
              <p className="company__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure. Harum, animi dolores, nam, ad
                magni expedita.
              </p>
              <h2>Contact us</h2>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--linkedin">
                      <BsLinkedin></BsLinkedin>
                    </i>
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link ">
                    <i className="icon icon--instagram">
                      <BsInstagram></BsInstagram>
                    </i>
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--github">
                      <AiFillGithub></AiFillGithub>
                    </i>
                  </a>
                </li>

                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--whatsapp">
                      <BsWhatsapp></BsWhatsapp>
                    </i>
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
              <input type="email" className="form-control bg-transparent" placeholder="Enter Your Email here" />
              <button className="mt-3 btn-style">Submit</button>
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
  );
}
