import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
  return (
    <div>
      {/* ------------carousel----------------------- */}
      <Carousel>
      <Carousel.Item interval={1500}>
      <img style={{height:"600px",width:"100%"}} src="./images/book1.jpg"class="d-block w-100" alt="book1"/>
        <Carousel.Caption>
          <h3 className='car1'>Books.....</h3>
          <p className='car2'> Igniting Minds, Illuminating Souls?!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img style={{height:"600px",width:"100%"}} src="./images/book2.jpg"class="d-block w-100" alt="book2"/>
        <Carousel.Caption>
          <h3 className='car1'>Books open doors to worlds unseen!?</h3>
          <p className='car2'>Pages filled with wonders, serene..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img style={{height:"600px",width:"100%"}} src="./images/book3.jpg"class="d-block w-100" alt="book3"/>
        <Carousel.Caption>
          <h3 className='car1'>In every chapter, a journey begins...</h3>
          <p className='car2'>Enlightening minds, where adventure wins....</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={250}>
      <img style={{height:"600px",width:"100%"}} src="./images/book4.jpg"class="d-block w-100" alt="book4"/>
        <Carousel.Caption>
          <h3 className='car1'>Dive into worlds where art and story collide....</h3>
          <p className='car2'>Manga series: imagination's boundless ride.....</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* -----------------books category----------------- */}
      <div className="container-fluid">
      <h1 class="category"><i>Novel Category</i></h1>
        <div className="row mt-2">
          <div className="col-md-3">
            <div class="card" style={{width: "250px"}}>
              <img class="card-img-top" src="./images/comic.jpg" alt= 'comic' style={{ width: "100%",height:"160px" }} />
              <div class="card-body">
                <h3 class="card-title">Comics Books</h3>
                <p class="card-text">we are thrilled to offer you an extensive collection of comic books that cater to every taste</p>
                <a href="#" class="btn btn-secondary">See More Books</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/horror.jpeg" alt='horror' style={{ width: "100%",height:"160px"  }} />
              <div class="card-body">
                <h3 class="card-title">Horror Books</h3>
                <p class="card-text">Prepare to be thrilled and chilled as you explore the dark and sinister realms of our horror books</p>
                <a href="#" class="btn btn-secondary">See More Books</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/sci-fri.jpeg" alt='sci-fri' style={{ width: "100%" ,height:"160px" }} />
              <div class="card-body">
                <h3 class="card-title">Science-Fic Books</h3>
                <p class="card-text">Delve into the realm of scientific possibility with hard science fiction that explores the potential</p>
                <a href="#" class="btn btn-secondary">See More Books</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/manga.jpg" alt='manga' style={{ width: "100%",height:"160px"  }} />
              <div class="card-body">
                <h3 class="card-title">Manga Series</h3>
                <p class="card-text"> Immerse yourself in the rich storytelling and unique art styles of Japanese manga.</p>
                <a href="#" class="btn btn-secondary">See More Books</a>
              </div>
            </div>
          </div>
        </div>
         </div>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-md-3">
            <div class="card" style={{width: "250px"}}>
              <img class="card-img-top" src="./images/crime.jpg" alt='crime' style={{ width: "100%",height:"160px" }} />
              <div class="card-body">
                <h3 class="card-title">Crime Thriller Novels</h3>
                <p class="card-text">Prepare for pulse-pounding suspense and gripping intrigue as you enter the captivating world</p>
                <a href="#" class="btn btn-secondary">See More Books</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/romantic.WEBP" alt='romantic' style={{ width: "100%",height:"160px"  }} />
              <div class="card-body">
                <h3 class="card-title">Romantic Novels</h3>
                <p class="card-text">Indulge in the timeless allure of romance with our enchanting collection of romantic novels</p>
                <a href="#" class="btn btn-secondary">See More Books</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/cosmos.avif" alt='cosmos' style={{ width: "100%" ,height:"160px" }} />
              <div class="card-body">
                <h3 class="card-title">The Guide to Galaxy</h3>
                <p class="card-text"> Discover the wonders of universe and mysteries of space,time and frontiers of human knowledge</p>
                <a href="#" class="btn btn-secondary">See More Books</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/historical.jpg" alt='history' style={{ width: "100%",height:"160px"  }} />
              <div class="card-body">
                <h3 class="card-title">Historiacl Novels</h3>
                <p class="card-text">Step back in time and immerse yourself in rich tapestry of history with our captivating collection</p>
                <a href="#" class="btn btn-secondary">See
                  More Books</a>
              </div>
            </div>
          </div>
        </div>
      </div> <br /><br /><br /><hr /><hr />
      
      {/* ---------------------best of all time------------------- */}
      <div id='best'>
        <div className="counter">
          <h1>Best Of All Time</h1>  
        </div>  
        <div className="best-list">
          <div>
            <img src="./images/naruto.jpg" style={{ height:"200px", width:"350px" }} alt="Naruto" />
            <h2>Naruto</h2>
            <p>"Naruto"is a popular manga/anime series created by Masashi Kishimoto. It follows Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village, as he faces challenges, forms friendships, and battles powerful adversaries.</p>
          </div>
          <div>
            <img src="./images/vampire.webp" style={{ height:"200px", width:"350px" }} alt="Vampire" />
            <h2>Vampire Daries</h2>
            <p>"The Vampire Diaries" novels, written by L.J. Smith, center around the small town of Mystic Falls, where teenager Elena Gilbert becomes entangled with two vampire brothers, Stefan and Damon Salvatore, amidst supernatural events, romance, and dark secrets.</p>
          </div>
          <div>
            <img src="./images/harry.jpg" style={{ height:"200px", width:"350px" }} alt="Harry" />
            <h2>Harry Porter</h2>
            <p>"Harry Potter"novels, penned by J.K. Rowling, chronicle the journey of a young wizard, Harry Potter, as he attends Hogwarts School of Witchcraft and Wizardry, battles the dark wizard Voldemort, and discovers his destiny in a magical world filled with adventure, friendship, and sacrifice.</p>
          </div>
        </div>
      </div> 
      {/* ----------------------fotter------------------------       */}
      <footer className="text-center text-lg-start bg-dark text-white pt-4">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"><i className="fa fa-home me-3"></i>Books</h6>
                <p>Sibu's Learning Pvt.Ltd., aims to offer quality learning solutions with the right blend of technology and effective instructional designing to help achieve measurable goals with teaching, learning and technology solutions.</p>
                <div class="social">
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaGithub /></a>
                </div>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p><a href="#!" className="text-reset">Home</a></p>
                <p><a href="#!" className="text-reset">About</a></p>
                <p><a href="#!" className="text-reset">Orders</a></p>
                <p><a href="#!" className="text-reset">Contact Us</a></p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p><a href="#!" className="text-reset">Pricing</a></p>
                <p><a href="#!" className="text-reset">Settings</a></p>
                <p><a href="#!" className="text-reset">Orders</a></p>
                <p><a href="#!" class="text-reset">Help</a></p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fa fa-home me-3"></i> Sibu'S Learning pvt.Ltd,273 LULU Complex, Kadayanallur Main road,627759</p>
                <p><i className="fa fa-envelope me-3"></i>sibusiva273@gmail.com</p>
                <p><i className="fa fa-phone me-3"></i> +91 1234567890</p>
                <p><i class="fa fa-print me-3"></i> +91 0987654321</p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="#">Web Developer</a>
        </div>
      </footer>
    </div>
  )
}