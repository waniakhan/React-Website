
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import CategoriesSection from '../components/CategoriesSection';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { Spinner } from 'react-bootstrap';

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date().getTime();
      const launchDate = new Date('November 18, 2023 12:00:00').getTime();
      const duration = launchDate - currentDate;

      if (duration < 0) {
        clearInterval(timer);
      } else {
        const dayCount = Math.floor(duration / (1000 * 60 * 60 * 24));
        const hourCount = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minuteCount = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const secondCount = Math.floor((duration % (1000 * 60)) / 1000);

        setDays(dayCount.toString().padStart(2, '0'));
        // setHours(hourCount.toString().padStart(2, '0'));
        setHours(((dayCount * 24) + hourCount).toString().padStart(2, '0'));

        setMinutes(minuteCount.toString().padStart(2, '0'));
        setSeconds(secondCount.toString().padStart(2, '0'));
      }
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change the delay value as desired (in milliseconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Navigation />
      <div id="coming-soon">
        <div className="wrapper ">
          <div className="custom-title mt-5">
            Our new category is <span>Coming soon</span>, stay connected with us!
          </div>
          <form action="#" className="custom-form">
            <div className="custom-email-field">
              <input type="email" placeholder="Enter Email Address" required="" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
          <div className="custom-count-down">
            <div className="custom-timer custom-day">
              <div className="custom-count">
                <div className="numb">{days}</div>
                <div className="custom-text">Days</div>
              </div>
            </div>
            <div className="custom-clone">:</div>
            <div className="custom-timer custom-hour">
              <div className="custom-count">
                <div className="numb">{hours}</div>
                <div className="custom-text">Hours</div>
              </div>
            </div>
            <div className="custom-clone">:</div>
            <div className="custom-timer custom-min">
              <div className="custom-count">
                <div className="numb">{minutes}</div>
                <div className="custom-text">Minutes</div>
              </div>
            </div>
            <div className="custom-clone">:</div>
            <div className="custom-timer custom-sec">
              <div className="custom-count">
                <div className="numb">{seconds}</div>
                <div className="custom-text">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" />
        </div>
      ) : (
        <CategoriesSection />
      )}

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
              <input type="email" className="form-control bg-transparent" placeholder="Enter Your Email here" />
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
  );
}
