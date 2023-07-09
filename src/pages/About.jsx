import React from 'react';
import Navigation from '../components/Navigation';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import Accordion from 'react-bootstrap/Accordion';
import {MdLibraryBooks} from 'react-icons/md'
import {GoEye} from 'react-icons/go'
import {RiSearchEyeLine} from 'react-icons/ri'
export default function About() {
  return (
    <>
      <Navigation />
      <div className="about-background">
        <h1 className="about-heading fw-bold text-center fs-1 fs-sm-2 fs-md-3">About us</h1>
      </div>

{/* accordions */}

      <div className='accordion-container'>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Accordion Item #4</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>\

      <div className="your-container">
    <div className="your-card">
      <h2 className="your-card-heading">Mission</h2>
      <i><MdLibraryBooks></MdLibraryBooks></i>
      <p className="your-card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum interdum nulla, ac varius quam lobortis a.</p>
    </div>

    <div className="your-card">
      <h2 className="your-card-heading">Vision</h2>
      <i><GoEye></GoEye></i>
      <p className="your-card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum interdum nulla, ac varius quam lobortis a.</p>
    </div>

    <div className="your-card">
      <h2 className="your-card-heading">Objective</h2>
      <i><RiSearchEyeLine></RiSearchEyeLine></i>
      <p className="your-card-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum interdum nulla, ac varius quam lobortis a.</p>
    </div>
  </div>

{/* footer  */}

      <footer className="footer" style={{ backgroundColor: "gray", marginTop: "50px" }}>
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
                    <i className="icon icon--linkedin"><BsLinkedin /></i>
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link ">
                    <i className="icon icon--instagram"><BsInstagram /></i>

                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--github"><AiFillGithub /></i>
                  </a>
                </li>

                <li className="footer__list-item">
                  <a href="#" className="footer__list-link">
                    <i className="icon icon--whatsapp"><BsWhatsapp /></i>
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
