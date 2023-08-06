import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { storage } from '../utils/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Button from 'react-bootstrap/Button';

function BrandsModal() {
    const [show, setShow] = useState(false);
    const [brandName, setBrandName] = useState("");
    const [brandImage, setBrandImage] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addBrand = (e) => {
        e.preventDefault();

        const storageRef = ref(storage, `images/brands/${brandImage.name}`);
        uploadBytes(storageRef, brandImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const payload = { BrandName: brandName, BrandImage: url };

                axios.post('http://localhost:5800/api/create-brand', payload)
                    .then(response => {
                        console.log(response.data);
                        setShow(false);
                    })
                    .catch(err => console.log(err));
            })
            .catch((error) => {
                console.log(error);
            });
        });
    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Brand
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addBrand}>
                        <div className='mb-3'>
                            <label htmlFor='BrandName' className='form-label'>
                                Brand Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                id='BrandName'
                                aria-describedby='brandnameHelp'
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Brand Image
                            </label>
                            <input className="form-control" onChange={(e) => setBrandImage(e.target.files[0])} type="file" id="formFile" />
                        </div>
                        <button type='submit' className='btn btn-primary'>
                            Add Brand
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default BrandsModal;
