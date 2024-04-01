import React from 'react'
import './Contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


export default function Contact() {
  return (
    <div>                
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
          </div>
          <div className="contain">
            <div className="contactInfo">
              <div className="box">
                <div className="icon"><FaLocationDot /></div>
                <div className="text">
                  <h3>Address</h3>
                  <p>Sibu'S Learning pvt.Ltd,<br /> 273 LULU Complex, Kadayanallur Main road<br />627759</p>
                </div>
              </div><hr />
              <div className="box">
                <div className="icon"><SiGmail /></div>
                <div className="text">
                  <h3>E-Mail</h3>
                  <p>sibusiva273@gmail.com</p>
                </div>
              </div><hr />
              <div className="box">
                <div className="icon"><FaPhoneAlt /></div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>1234567890</p>
                </div>
              </div>
            </div>
            <div className="contactform">
              <form>
                <h2>Send Message</h2>
                <div className="inputbox">
                  <input type="text" name='' required/>
                  <span>Full Name</span>
                </div>
                <div className="inputbox">
                  <input type="text" name='' required/>
                  <span>Email</span>
                </div>
                <div className="inputbox">
                  <textarea required/>
                  <span>Type Youe Message...</span>
                <div className="inputbox">
                  <input type="submit" name='' value="Send"/>
                </div>
                  </div>
              </form>
          </div>
        </div>
     </section>
        
        


      {/* ------------------footer---------------------------       */}
      <footer className="text-center mt-3 text-lg-start bg-dark text-white pt-4">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"><i className="fa fa-home me-3"></i>Books</h6>
                <p>Sibu'S Learning pvt,Ltd  aims to offer quality learning solutions with the right blend of technology and effective instructional designing to help achieve measurable goals with teaching, learning and technology solutions</p>
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
        <div class="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="#">Web Developer</a>
        </div>
      </footer>
    </div>
  )
}