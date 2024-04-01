import React from 'react'
import './About.css'

export default function About() {
  return (
    <div>
      <div className="container-fluid">
        <div>
          <div>
            <h1 className='our'>Our Missions  & Impact</h1>
            <div className='our-1'>
              <p>We aim to offer quality learning solutions with the right blend of technology and effective instructional designing to help achieve measurable goals with teaching, learning and technology solutions.</p>
              <p>"Fueling the Fires of Curiosity, Our Mission at [Your Bookstore Name] is to ignite the passion for knowledge within every reader. Through carefully curated collections and personalized recommendations.</p>
              <p>we strive to create an immersive literary haven where exploration knows no bounds. We believe in the transformative power of stories to broaden horizons, spark creativity, and foster empathy. Join us on this journey of discovery, where every book becomes a gateway to enlightenment and empowerment."</p>
            </div>
          </div><br /><br /><br /><br /><br /><br />
          <div>
          <h1 className='our'>OUR ACHIVEMENTS</h1>
            <img className='pic' src="./images/cover.jpg" alt="cover" />              
          </div><br /><br /><br /><br /><br /><br />
          <div>
            <div class="boxing1">
              <h3>6000+</h3>
              <p>Active Students</p>
            </div>
            <div class="boxing2">
              <h3>10,000+</h3>
              <p>QBank Questions</p>
            </div>
          </div>
        </div> <br /><br /><br /><br /><br />
        <div> 
          <div>
            <div class="boxing1">
              <h3>4+</h3>
              <p>Years Experience</p>
            </div>
            <div class="boxing2">
              <h3>45+</h3>
              <p>Schools & Colleges</p>
            </div>
          </div>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <div id='best-1'>
        <div className="counter-1">  
        </div>  
        <div className="best-list1">
          <div>
            <img src="./images/vision.jpg" style={{ height:"200px", width:"350px" }} alt="vision" />
            <h2>Our Vission</h2>
            <p>"Naruto"is a popular manga/anime series created by Masashi Kishimoto. It follows Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village, as he faces challenges, forms friendships, and battles powerful adversaries.</p>
          </div>
          <div>
            <img src="./images/mission.jpg" style={{ height:"200px", width:"350px" }} alt="mission" />
            <h2>Our Mission</h2>
            <p>"The Vampire Diaries" novels, written by L.J. Smith, center around the small town of Mystic Falls, where teenager Elena Gilbert becomes entangled with two vampire brothers, Stefan and Damon Salvatore, amidst supernatural events, romance, and dark secrets.</p>
          </div>
        </div>
      </div>  
      {/* ---------------footer------------------- */}
      <footer className="text-center mt-3 text-lg-start bg-dark text-white pt-4">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"><i className="fa fa-home me-3"></i>Books</h6>
                <p> Sibu's Learning pvt,Ltd.aims to offer quality learning solutions with the right blend of technology and effective instructional designing to help achieve measurable goals with teaching, learning and technology solutions.</p>
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
                <p><i className="fa fa-home me-3"></i> Sibu'S Learning pvt.Ltd,273 LULU Complex, Kadayanallur Main road627759</p>
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