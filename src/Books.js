import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Books.css'
import { FaCartArrowDown } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Books() {
  const [activeItem, setactiveItem] = useState();
  return (
    <div>
      <div class="cont">
        <img class="book" src="./images/book.jpg" alt="book"/>
        <div class="car">
          <h1 class="car1"><i>"Unlock Worlds, One Page at a Time:</i></h1>
          <h1 class="car2"><i>Your Journey Starts Here!..."</i></h1>
          <p class="car3"><i>Where Every Page Holds a New Adventure: Explore, Imagine, Discover!.....!...</i></p>
        </div>
      </div><br /><br /><br /><br /><br /><br />
      {/* -----------------offers zone-------------- */}
      <div className="container">
        <h1 class="novel">Ofer Zone</h1>
        <div className="row mt-2">
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/vinland.jpg" alt="vinland" style={{ width:"100%", height:"160px" }} />
              <div class="card-body">
                <h3 class="cart-tittle">Vinland Saga</h3>
                <p class="card-text"></p>
                <a href="orders" as={Link} to='./orders' active={activeItem === 'orders'}
                  onClick={ ()=>setactiveItem('orders') } class="btn btn-outline-dark"><FaCartArrowDown /></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/fire.jpg" alt="fire" style={{ width:"100%", height:"160px" }} />
              <div class="card-body">
                <h3 class="cart-tittle">Fire And Blood</h3>
                <p class="card-text"></p>
                <a href="orders" as={Link} to='./orders' active={activeItem === 'orders'}
                  onClick={ ()=>setactiveItem('orders') } class="btn btn-outline-dark"><FaCartArrowDown /></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/dragon.jpeg" alt="dragon" style={{ width:"100%", height:"160px" }} />
              <div class="card-body">
                <h3 class="cart-tittle">How to Trian Your Dragon</h3>
                <p class="card-text"></p>
                <a href="orders" as={Link} to='./orders' active={activeItem === 'orders'}
                  onClick={ ()=>setactiveItem('orders') } class="btn btn-outline-dark"><FaCartArrowDown /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/witcher.jpeg" alt="witcher" style={{ width:"100%", height:"160px" }} />
              <div class="card-body">
                <h3 class="cart-tittle">The Witcher</h3>
                <p class="card-text"></p>
                <a href="orders" as={Link} to='./orders' active={activeItem === 'orders'}
                  onClick={ ()=>setactiveItem('orders') } class="btn btn-outline-dark"><FaCartArrowDown /></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/narnia.jpg" alt="narnia" style={{ width:"100%", height:"160px" }} />
              <div class="card-body">
                <h3 class="cart-tittle">Narnia</h3>
                <p class="card-text"></p>
                <a href="orders" as={Link} to='./orders' active={activeItem === 'orders'}
                  onClick={ ()=>setactiveItem('orders') } class="btn btn-outline-dark"><FaCartArrowDown /></a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/sherlock.webp" alt="sherlock" style={{ width:"100%", height:"160px" }} />
              <div class="card-body">
                <h3 class="cart-tittle">Sherlock Holmes</h3>
                <p class="card-text"></p>
                <a href="orders" as={Link} to='./orders' active={activeItem === 'orders'}
                  onClick={ ()=>setactiveItem('orders') } class="btn btn-outline-dark"><FaCartArrowDown /></a>
              </div>
            </div>
          </div>
        </div>
      </div><br /><br /><br /><br /><br />
      {/* ---------------upcoming------------------------------- */}
      <div>
        <div class="container">
          <h2 class="sub"><i>Up Coming Novels</i></h2>
          <div className="new">
            <ul>
              <li>Song of the Six Realms</li><br />
              <li>Table for Two: Fictions</li><br />
              <li>The Reappearance of Rachel Price</li><br />
              <li>Who Is Taylor Swift?</li><br />
              <li>King of Sloth</li><br />
              <li>The Beloved</li><br />
              <li>Toxic Prey</li><br />
              <li>The Rule Book: A Novel</li><br />
              <li>An Unfinished Love Story</li><br />
              <li>Backyard Bird Chronicles</li><br />
            </ul>
          </div>
        </div>
      </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> 
      {/* -------------------topselling---------------------- */}
      <div>
        <div id="topselling">
          <div class="container">
            <h1 class="heading">Top Sellig Manga</h1>
            <div class="selling-list">
              <div class="paper">
                <img src="black.jpg" alt="black"/>
                <div class="layer">
                  <h3>Black Clover</h3>
                  <p>"Black Clover" centers on Asta, a boy without magic in a world where it's everything. Determined to become the Wizard King, he overcomes obstacles with his determination and anti-magic abilities.</p>
                </div>
              </div>
              <div class="paper">
                <img src="bungo.jpeg" alt="paper"/>
                <div class="layer">
                  <h3>Bungo Stray Dogs</h3>
                  <p>"Bungo Stray Dogs" follows the Armed Detective Agency, a group of detectives with supernatural abilities, as they tackle mysteries and conflicts with rival groups in Yokohama's underground world</p>
                </div>
              </div>
              <div class="paper">
                <img src="solo.jpg" alt="solo"/>
                <div class="layer">
                  <h3>Solo Leveling</h3>
                  <p> "Solo Leveling" follows Sung Jin-Woo, an E-rank hunter who gains the power to level up in a world where gates to dungeons have opened, as he grows stronger to protect humanity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><br /><br /><br /><br /><br />
      {/* ----------------------fotter------------------------       */}
      <footer className="text-center text-lg-start bg-dark text-white pt-4">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"><i className="fa fa-home me-3"></i>Books</h6>
                <p>Sibu's Learning Pvt,Ltd.aims to offer quality learning solutions with the right blend of technology and effective instructional designing to help achieve measurable goals with teaching, learning and technology solutions.</p>
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