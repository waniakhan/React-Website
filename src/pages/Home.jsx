import React from 'react'
import Navigation from '../components/Navigation';
import Carousel from 'react-bootstrap/Carousel';
import {AiFillStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

export default function Home() {
  return (
<>
<Navigation />

 <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaper.dog/large/5468296.jpg"

          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
         <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2016613.jpg"
          alt="Second slide"
        /> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1217867447/photo/lamps-over-the-table.webp?b=1&s=170667a&w=0&k=20&c=iH4_oRTP6c4m21R5AjMbaanM1kvg5mBxjhqtz6B6Hf0="
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel> 
  
    <>
{/* new arrival heading */}

  <section className="products">
  <div className="container-fluid my-5">
    <div>
      <h2 className="text-center col-sm-12 glowing-text">
        New Arrival
      </h2>
      <hr className="w-25 m-auto" />
    </div>
  </div>
</section>

{/* new arrival cards  */}

<div id='arrival'>
<div class="many-row">
  <div>
    <div class="responsive-card">
      <div class="responsive-imgbox">
        <img src="https://media.istockphoto.com/id/1177589023/photo/light-bulb-hanging-by-the-ceiling-in-a-restaurant.webp?b=1&s=170667a&w=0&k=20&c=WEBVPscDAL3MiPrWWzbgrA3qupXbq3RG4lsQkao0qhw=" class="responsive-img" />
      </div>
      <div class="responsive-content">
        <h2>Lights</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h5 class="card__price">Price: $9.5</h5>
      </div>
    </div>
  </div>
  <div>
    <div class="responsive-card">
      <div class="responsive-imgbox">
        <img src="https://st3.depositphotos.com/1177973/15307/i/600/depositphotos_153075942-stock-photo-jewelry-accessories-in-box.jpg" class="responsive-img" />
      </div>
      <div class="responsive-content">
        <h2>Jewellery</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h5 class="card__price">Price: $9.5</h5>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="responsive-card">
      <div class="responsive-imgbox">
        <img src="https://www.webbikeworld.com/wp-content/uploads/2020/08/wallpaperflare.com_wallpaper-2.jpg" class="responsive-img" />
      </div>
      <div class="responsive-content">
        <h2>Motorcycle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <h5 class="card__price">Price: $9.5</h5>
      </div>
    </div>
  </div>
</div>
</div>



{/* upcoming sale banner */}

<div class="background">
  <h1 class="fw-bold text-center col-sm-12">Upcoming Sale</h1>
  <h2 class="fw-bold text-center col-sm-12">Up to 20% off</h2>
  <div class="blinking-cover"></div>
</div>


{/* upcoming sale card */}

<div id="services" class="container">
  <div class="card-row row justify-content-center">
    <div class="col-md-4 col-sm-6 mb-4 text-center">
      <div class="card-container">
        <figure class="card">
          <img
            src="https://media.istockphoto.com/id/1155023238/photo/female-legs-in-stylish-black-jeans-in-white-leather-sneakers-with-snake-pattern-on-the.webp?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=QdQpNvPG9RQH9Ap8AHAyDbFRNk6te8r7FCil8nbEVgo="
            alt=""
            class="card__image"
          />
          <figcaption class="card__body">
            <h2 class="card__title">Sneakers</h2>
            <div>
              <p class="card__description">
                Some description about this card and its purpose.
              </p>
            </div>
            <button class="card__sale-button">Sale</button>
          </figcaption>
        </figure>
        <div class="product-details">
          <h5 class="card__heading">Women sneakers</h5>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <BsStarHalf></BsStarHalf>
          <h5 class="card__price">Price: $9.5</h5>
        </div>
      </div>
    </div>

    <div class="col-md-4 col-sm-6 mb-4 text-center">
      <div class="card-container">
        <figure class="card">
          <img
            src="https://media.istockphoto.com/id/1034939250/photo/mid-century-modern-chair-with-a-blanket-and-a-large-sofa-with-colorful-cushions-in-a-spacious.webp?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=57OPhvhKvW3OVpB0kGGPs_FMpVxoFn-qZVxguaDspaU="
            alt=""
            class="card__image"
          />
          <figcaption class="card__body">
            <h2 class="card__title">Sofa</h2>
            <p class="card__description">
              Some description about this card and its purpose.
            </p>
            <button class="card__sale-button">Sale</button>
          </figcaption>
        </figure>
        <div class="product-details">
          <h5 class="card__heading">Sofa </h5>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <BsStarHalf></BsStarHalf>
          <h5 class="card__price">$10.6</h5>
        </div>
      </div>
    </div>

    <div class="col-md-4 col-sm-6 mb-4 text-center">
      <div class="card-container">
        <figure class="card">
          <img
            src="https://images.unsplash.com/photo-1591375372226-3531cf2eb6d3?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlvciUyMHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&amp;w=1000&amp;q=80"
            alt=""
            class="card__image"
          />
          <figcaption class="card__body">
            <h2 class="card__title">perfume</h2>
            <p class="card__description">
              Some description about this card and its purpose.
            </p>
            <button class="card__sale-button">Sale</button>
          </figcaption>
        </figure>
        <div class="product-details">
          <h5 class="card__heading">Dior perfume</h5>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <BsStarHalf></BsStarHalf>
          <h5 class="card__price">$15</h5>
        </div>
      </div>
    </div>
  </div>
</div>



{/* our team members */}

<h2 className="heading fw-bold text-center fs-3 fs-sm-4 fs-md-5">Our Team Members</h2>

<div id="team">
  <div class="card-row row justify-content-center">
    <div class="col-md-3 col-sm-6 mb-4 text-center">
      <article class="custom-card card1">
        <div class="custom-card__body">
          <h2 class="custom-card__title">Alina</h2>
          <p>Incharge</p>
          <div class="icons">
            <i className="icon icon--instagram"><BsInstagram></BsInstagram></i>
            <i className="icon icon--github"><AiFillGithub></AiFillGithub></i>
            <i className="icon icon--linkedin"><BsLinkedin></BsLinkedin></i>
          </div>
        </div>
      </article>
    </div>

    <div class="col-md-3 col-sm-6 mb-4 text-center">
      <article class="custom-card card2">
        <div class="custom-card__body">
          <h2 class="custom-card__title">Sufyan</h2>
          <p>HOD</p>
          <div class="icons">
            <i className="icon icon--instagram"><BsInstagram></BsInstagram></i>
            <i className="icon icon--github"><AiFillGithub></AiFillGithub></i>
            <i className="icon icon--linkedin"><BsLinkedin></BsLinkedin></i>
          </div>
        </div>
      </article>
    </div>

    <div class="col-md-3 col-sm-6 mb-4 text-center">
      <article class="custom-card card3">
        <div class="custom-card__body">
          <h2 class="custom-card__title">Jennifer</h2>
          <p>Co-Director</p>
          <div class="icons">
            <i className="icon icon--instagram"><BsInstagram></BsInstagram></i>
            <i className="icon icon--github"><AiFillGithub></AiFillGithub></i>
            <i className="icon icon--linkedin"><BsLinkedin></BsLinkedin></i>
          </div>
        </div>
      </article>
    </div>

    <div class="col-md-3 col-sm-6 mb-4 text-center">
      <article class="custom-card card4">
        <div class="custom-card__body">
          <h2 class="custom-card__title">Faisal</h2>
          <p>Assistant</p>
          <div class="icons">
            <i className="icon icon--instagram"><BsInstagram></BsInstagram></i>
            <i className="icon icon--github"><AiFillGithub></AiFillGithub></i>
            <i className="icon icon--linkedin"><BsLinkedin></BsLinkedin></i>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>

{/* services cards  */}

<h2 className="heading fw-bold text-center fs-3 fs-sm-4 fs-md-5">Our Services</h2>

<div className="my-container">
      <article className="my-card">
  <div className="my-card__inner">
    <div className="my-card__side my-card__side--front">
      <div className="my-card__image-wrapper">
        <img
          src="https://media.istockphoto.com/id/1214019831/vector/covid-19-quarantine-coronavirus-epidemic-free-delivery-man-in-a-protective-mask-carries-food.jpg?s=612x612&w=0&k=20&c=9OxkYpgE4EXJuykWMX97Gg0nMtUw5_Aqqsygf9gVy7o="
          alt=""
          className="my-card__image"
        />
      </div>
      <div className="my-card__body my-card__body--flex">
        <h2 className="my-card__title">HOME DELIVERY</h2>
        <span className="my-card__arrow">→</span>
      </div>
    </div>
    <div className="my-card__side my-card__side--back">
      <div className="my-card__body">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam unde adipisci quas nulla dolores esse dolor magnam repudiandae perferendis eaque, ex eveniet inventore iure ipsum incidunt quaerat, obcaecati sint hic.
        </p>
      </div>
    </div>
  </div>
</article>
<article className="my-card">
  <div className="my-card__inner">
    <div className="my-card__side my-card__side--front">
      <div className="my-card__image-wrapper">
        <img
          src="https://pictures.dealer.com/a/asbury/1067/21591f6a6c9a0f81df5148b3e1d6c903x.jpg?impolicy=downsize&w=568"
          alt=""
          className="my-card__image"
        />
      </div>
      <div className="my-card__body my-card__body--flex">
        <h2 className="my-card__title">REFUND POLICY</h2>
        <span className="my-card__arrow">→</span>
      </div>
    </div>
    <div className="my-card__side my-card__side--back">
      <div className="my-card__body">
        <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur ex dignissimos est sunt corrupti commodi aut autem culpa, aperiam saepe consectetur. Enim consectetur nostrum itaque iure eligendi id tempore.
        </p>
      </div>
    </div>
  </div>
</article>
<article className="my-card">
  <div className="my-card__inner">
    <div className="my-card__side my-card__side--front">
      <div className="my-card__image-wrapper">
        <img
          src="https://us.123rf.com/450wm/mashmuh/mashmuh2101/mashmuh210100194/161741875-faq-concept-vector-icon-for-website-information-colorful-flat-illustration.jpg?ver=6"
          alt=""
          className="my-card__image"
        />
      </div>
      <div className="my-card__body my-card__body--flex">
        <h2 className="my-card__title">FAQs</h2>
        <span className="my-card__arrow">→</span>
      </div>
    </div>
    <div className="my-card__side my-card__side--back">
      <div className="my-card__body">
        <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolorem quasi saepe. Repellendus et provident, sit quidem aliquam eligendi animi nam voluptatum nobis sapiente itaque nulla perspiciatis odio distinctio facilis.
        </p>
      </div>
    </div>
  </div>
</article>
</div>






<>
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

</>
</>
    )
}
