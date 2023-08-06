
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { storage } from '../utils/FirebaseConfig';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Button from 'react-bootstrap/Button';

function CategoryModal({recallData}) {
    const [show, setShow] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addCategory = (e) => {
        e.preventDefault();

        const storageRef = ref(storage, `images/categories/${categoryImage.name}`);
        uploadBytes(storageRef, categoryImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const payload = {
                    CategoryName: categoryName,
                    CategoryImage: url
                };

                axios.post('http://localhost:5800/api/create-category', payload)
                    .then((json) => {
                        setShow(false);
                        recallData(json.data);
                    })
                    .catch(err => {
                        console.error(err);
                        alert(err.message);
                    });
            })
            .catch((error) => {
                alert(error.message);
            });
        });
    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Category
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={addCategory}>
                        <div className="mb-3">
                            <label htmlFor="CategoryName" className="form-label">
                                Category Name
                            </label>
                            <input
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="CategoryName"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Category Image
                            </label>
                            <input className="form-control" onChange={(e) => setCategoryImage(e.target.files[0])} type="file" id="formFile" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CategoryModal;
