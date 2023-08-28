import React, { useContext, useState, useEffect } from 'react';
import './profile.css'
import { GlobalContext } from '../../../context/context';
import Cookies from 'js-cookie';
import { useJwt } from 'react-jwt';
import ScrollReveal from 'scrollreveal';


export default function ProfileCard() {
    const { state } = useContext(GlobalContext);
    const [adminName, setAdminName] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const { decodedToken } = useJwt(Cookies.get('token'));
    const [isEditing, setIsEditing] = useState(false); // Add editing state
    const [selectedImage, setSelectedImage] = useState(null); // Add state for selected image
    const [selectedImageName, setSelectedImageName] = useState(''); // Add this line
  
//=======SCROLL REVEAL ANIMATION=====//
    useEffect(() => {
        const sr = ScrollReveal();
    
        sr.reveal('.my-card', {
          origin: 'bottom',
          distance: '20px',
          duration: 2000,
          reset: true,
          scale: 0.8, 
          delay: 200,
          easing: 'ease',
        });
    }, []);

    useEffect(() => {
        if (decodedToken) {
            setAdminName(decodedToken.username);
            setAdminEmail(decodedToken.email);

            const storedImage = localStorage.getItem(`selectedImage_${decodedToken.username}_${decodedToken.email}`);
            const storedImageName = localStorage.getItem(`selectedImageName_${decodedToken.username}_${decodedToken.email}`);

            if (storedImage && storedImageName) {
                setSelectedImage(JSON.parse(storedImage));
                setSelectedImageName(storedImageName);
            } else {
                setSelectedImage(null);
                setSelectedImageName('');
            }
        }
    }, [decodedToken]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);

        if (selectedImage && decodedToken) {
            localStorage.setItem(`selectedImage_${decodedToken.username}_${decodedToken.email}`, JSON.stringify(selectedImage));
            localStorage.setItem(`selectedImageName_${decodedToken.username}_${decodedToken.email}`, selectedImageName);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const base64Image = e.target.result;
                setSelectedImage(base64Image);
                setSelectedImageName(file.name);

                if (decodedToken) {
                    localStorage.setItem(`selectedImage_${decodedToken.username}_${decodedToken.email}`, base64Image);
                    localStorage.setItem(`selectedImageName_${decodedToken.username}_${decodedToken.email}`, file.name);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className=" my-card" style={{ height: '400px', marginTop: '50px', width: '40%' }}>
            <div className="my-card__img"  >
                <svg xmlns="http://www.w3.org/2000/svg" width="100%">
                    <rect fill="#ffffff" width={540} height={450} />
                    <defs>
                        <linearGradient
                            id="a"
                            gradientUnits="userSpaceOnUse"
                            x1={0}
                            x2={0}
                            y1={0}
                            y2="100%"
                            gradientTransform="rotate(222,648,379)"
                        >
                            <stop offset={0} stopColor="#ffffff" />
                            <stop offset={1} stopColor="#FC726E" />
                        </linearGradient>
                        <pattern
                            patternUnits="userSpaceOnUse"
                            id="b"
                            width={300}
                            height={250}
                            x={0}
                            y={0}
                            viewBox="0 0 1080 900"
                        >
                            <g fillOpacity="0.5">
                                <polygon fill="#444" points="90 150 0 300 180 300" />
                                <polygon points="90 150 180 0 0 0" />
                                <polygon fill="#AAA" points="270 150 360 0 180 0" />
                                <polygon fill="#DDD" points="450 150 360 300 540 300" />
                                <polygon fill="#999" points="450 150 540 0 360 0" />
                                <polygon points="630 150 540 300 720 300" />
                                <polygon fill="#DDD" points="630 150 720 0 540 0" />
                                <polygon fill="#444" points="810 150 720 300 900 300" />
                                <polygon fill="#FFF" points="810 150 900 0 720 0" />
                                <polygon fill="#DDD" points="990 150 900 300 1080 300" />
                                <polygon fill="#444" points="990 150 1080 0 900 0" />
                                <polygon fill="#DDD" points="90 450 0 600 180 600" />
                                <polygon points="90 450 180 300 0 300" />
                                <polygon fill="#666" points="270 450 180 600 360 600" />
                                <polygon fill="#AAA" points="270 450 360 300 180 300" />
                                <polygon fill="#DDD" points="450 450 360 600 540 600" />
                                <polygon fill="#999" points="450 450 540 300 360 300" />
                                <polygon fill="#999" points="630 450 540 600 720 600" />
                                <polygon fill="#FFF" points="630 450 720 300 540 300" />
                                <polygon points="810 450 720 600 900 600" />
                                <polygon fill="#DDD" points="810 450 900 300 720 300" />
                                <polygon fill="#AAA" points="990 450 900 600 1080 600" />
                                <polygon fill="#444" points="990 450 1080 300 900 300" />
                                <polygon fill="#222" points="90 750 0 900 180 900" />
                                <polygon points="270 750 180 900 360 900" />
                                <polygon fill="#DDD" points="270 750 360 600 180 600" />
                                <polygon points="450 750 540 600 360 600" />
                                <polygon points="630 750 540 900 720 900" />
                                <polygon fill="#444" points="630 750 720 600 540 600" />
                                <polygon fill="#AAA" points="810 750 720 900 900 900" />
                                <polygon fill="#666" points="810 750 900 600 720 600" />
                                <polygon fill="#999" points="990 750 900 900 1080 900" />
                                <polygon fill="#999" points="180 0 90 150 270 150" />
                                <polygon fill="#444" points="360 0 270 150 450 150" />
                                <polygon fill="#FFF" points="540 0 450 150 630 150" />
                                <polygon points="900 0 810 150 990 150" />
                                <polygon fill="#222" points="0 300 -90 450 90 450" />
                                <polygon fill="#FFF" points="0 300 90 150 -90 150" />
                                <polygon fill="#FFF" points="180 300 90 450 270 450" />
                                <polygon fill="#666" points="180 300 270 150 90 150" />
                                <polygon fill="#222" points="360 300 270 450 450 450" />
                                <polygon fill="#FFF" points="360 300 450 150 270 150" />
                                <polygon fill="#444" points="540 300 450 450 630 450" />
                                <polygon fill="#222" points="540 300 630 150 450 150" />
                                <polygon fill="#AAA" points="720 300 630 450 810 450" />
                                <polygon fill="#666" points="720 300 810 150 630 150" />
                                <polygon fill="#FFF" points="900 300 810 450 990 450" />
                                <polygon fill="#999" points="900 300 990 150 810 150" />
                                <polygon points="0 600 -90 750 90 750" />
                                <polygon fill="#666" points="0 600 90 450 -90 450" />
                                <polygon fill="#AAA" points="180 600 90 750 270 750" />
                                <polygon fill="#444" points="180 600 270 450 90 450" />
                                <polygon fill="#444" points="360 600 270 750 450 750" />
                                <polygon fill="#999" points="360 600 450 450 270 450" />
                                <polygon fill="#666" points="540 600 630 450 450 450" />
                                <polygon fill="#222" points="720 600 630 750 810 750" />
                                <polygon fill="#FFF" points="900 600 810 750 990 750" />
                                <polygon fill="#222" points="900 600 990 450 810 450" />
                                <polygon fill="#DDD" points="0 900 90 750 -90 750" />
                                <polygon fill="#444" points="180 900 270 750 90 750" />
                                <polygon fill="#FFF" points="360 900 450 750 270 750" />
                                <polygon fill="#AAA" points="540 900 630 750 450 750" />
                                <polygon fill="#FFF" points="720 900 810 750 630 750" />
                                <polygon fill="#222" points="900 900 990 750 810 750" />
                                <polygon fill="#222" points="1080 300 990 450 1170 450" />
                                <polygon fill="#FFF" points="1080 300 1170 150 990 150" />
                                <polygon points="1080 600 990 750 1170 750" />
                                <polygon fill="#666" points="1080 600 1170 450 990 450" />
                                <polygon fill="#DDD" points="1080 900 1170 750 990 750" />
                            </g>
                        </pattern>
                    </defs>
                    <rect x={0} y={0} fill="url(#a)" width="100%" height="100%" />
                    <rect x={0} y={0} fill="url(#b)" width="100%" height="100%" />
                </svg>
            </div>
            <div className="my-card__avatar">
            {isEditing ? (
                <div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                </div>
            ) : (
                selectedImage && ( // Only show the selected image if it's the same user
                    <img
                        src={selectedImage}
                        style={{
                            width: '80%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid #FC726E',
                        }}
                        alt=""
                    />
                )
            )}

            {!isEditing && !selectedImage && (
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                        style={{ width: '80%' }}
                        alt=""
                    />
                )}
        </div>

            <div className="my-card__title" style={{ color: 'black' }}>
             <b>  USERNAME:</b> {adminName}
            </div>


            <div className="my-card__subtitle"><b>USER EMAIL:</b> {adminEmail}</div>
            <div className="my-card__subtitle webdev"> <b>PROFESSION:</b> Web Development</div>

            <div
                className={`my-card__btn btn-primary ${isEditing ? 'editing' : ''}`}
                style={{
                    color: 'white', // Change color to blue
                    cursor: 'pointer',
                    textAlign: 'center', // Align to the right
                    fontSize: '16px', // Increase font size
                  }}
                onClick={isEditing ? handleSaveClick : handleEditClick}
            >
                {isEditing ? 'Save' : 'Edit'}
            </div>
        </div>

    )
}