
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { storage } from '../utils/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ProductsModal({ recallData }) {
    const [show, setShow] = useState(false);

    const [brands, setBrands] = useState([])
    const [category, setCategory] = useState([])

    const [ProductName, setProductName] = useState("");
    const [ProductImage, setProductImage] = useState(null);



    const handleClose = () => setShow(false);
    const handleShow = () => {
        axios.get('http://localhost:5800/api/get-all-brands').then((json) => {
            console.log(json.data.brands)
            setBrands(json.data.brands)
            axios.get('http://localhost:5800/api/get-all-categories').then((json) => {
                setCategory(json.data.category)
                console.log(json.data.category)
                setShow(true)
            })

        })

    };

    const addProduct = (e) => {
        e.preventDefault();
        console.log('working')

        // const storageRef = ref(storage, `images/categories/${ProductImage.name}`);
        // uploadBytes(storageRef, ProductImage).then((snapshot) => {
        //     getDownloadURL(snapshot.ref).then((url) => {
        //         const payload = {
        //             ProductName: ProductName,
        //             ProductImage: url
        //         };

        //         axios.post('http://localhost:5800/api/create-Product', payload)
        //             .then((json) => {
        //                 setShow(false);
        //                 recallData(json.data.Product);
        //             })
        //             .catch(err => {
        //                 console.error(err);
        //                 alert(err.message);
        //             });
        //     })
        //     .catch((error) => {
        //         alert(error.message);
        //     });
        // });
    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Product
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addProduct}>
                        <div className="mb-3">
                            <label htmlFor="ProductName" className="form-label">
                                Product Name
                            </label>
                            <input
                                value={ProductName}
                                onChange={(e) => setProductName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="ProductName"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Product Image
                            </label>
                            <input className="form-control" onChange={(e) => setProductImage(e.target.files[0])} type="file" id="formFile" />
                        </div>

                        <Form.Select aria-label="Please Select a Brand">
                            <option disabled>Please Select a Brand</option>
                            {
                              brands.map((val,key)=>
                              <option key={key} value={val.BrandName}>{val.BrandName}</option>)  
                            }
                            
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <Form.Select aria-label="please Select a Category">
                            <option disabled>Please Select a category</option>
                            {
                              category.map((val,key)=>
                              <option key={key} value={val.CategoryName}>{val.CategoryName}</option>)  
                            }
                            
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ProductsModal;
