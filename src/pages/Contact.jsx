import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';
import Navigation from '../components/Navigation';
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

export default function Contact() {
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  return (
    <>
      <Navigation />
      <div className="custom-background">
        <h1 className="custom-heading fw-bold text-center fs-1 fs-sm-2 fs-md-3">Contact us</h1>
      </div>

      <div className="col-md-6 mx-auto mt-5 glass-bg">
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            firstName: '',
            lastName: '',
            username: '',
            city: '',
            state: '',
            zip: '',
            file: null,
            terms: false,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik101" className="position-relative">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                  />
                  <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik102" className="position-relative">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                  />
                  <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationFormik103" className="position-relative">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik104" className="position-relative">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="State"
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik105" className="position-relative">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Zip"
                    name="zip"
                    value={values.zip}
                    onChange={handleChange}
                    isInvalid={!!errors.zip}
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.zip}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="position-relative mb-3">
                <Form.Label>File</Form.Label>
                <Form.Control
                  type="file"
                  required
                  name="file"
                  onChange={handleChange}
                  isInvalid={!!errors.file}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.file}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="position-relative mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik106"
                  feedbackTooltip
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          )}
        </Formik>
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
  );
}
