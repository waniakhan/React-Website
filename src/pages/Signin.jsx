import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import Navigation from '../components/Navigation';

export default function SignIn() {
  
  return (
    <>
      <Navigation />
  
      <div className="custom-container">
        <input type="checkbox" id="custom-check" />
        <div className="custom-login-form">
          <header>Login</header>
          <form action="#">
            <label htmlFor="useremail">Email</label>
            <input type="email" id="useremail" placeholder="Enter your email" required />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="signup-password"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              title="Use at least 8 characters (including uppercase, lowercase, and numbers)"
              placeholder="Create a password"
              required
            />
            <a href="#">Forgot password?</a>
            <input type="submit" className="custom-button" value="Login" />
          </form>
          <div className="custom-signup">
            <span className="custom-signup-text">
              Don't have an account?
              <label htmlFor="custom-check">Signup</label>
            </span>
          </div>
        </div>
        <div className="custom-registration-form">
          <header>Signup</header>
          <form action="#">
            <label htmlFor="signup-email">Email</label>
            <input type="email" id="signup-email" placeholder="Enter your email" required />
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
              title="Use at least 8 characters (including uppercase, lowercase, and numbers)"
              placeholder="Create a password"
              required
            />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" required />
            <input type="submit" className="custom-button" value="Signup" />
          </form>
          <div className="custom-signup">
            <span className="custom-signup-text">
              Already have an account?
              <label htmlFor="custom-check">Login</label>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer" style={{ backgroundColor: "gray", marginTop: "740px" }}>
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
                      <BsLinkedin />
                    </i>
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link ">
                    <i className="icon icon--instagram">
                      <BsInstagram />
                    </i>
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--github">
                      <AiFillGithub />
                    </i>
                  </a>
                </li>

                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--whatsapp">
                      <BsWhatsapp />
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

      {/* Copyright */}
      <div className="container-fluid copyright-section">
        <p className="p-0">
          copyright <a href="#">@ WANIA KHAN.</a>All Rights Reserved
        </p>
      </div>
    </>
  );
}
