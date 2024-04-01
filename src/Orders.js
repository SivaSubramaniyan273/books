import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Order.css'
import Now from './Now';

export default function Orders() {
  const [activeItem, setactiveItem] = useState();
  return (
    <div>
      <h1 style={{ fontSize: "30px", fontWeight: "bold", color: "violet",textAlign:"center" }}>Your Orders</h1>
      <div className="container mt-2">
        <div className="row mt-2">
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/img1.webp" alt='One piece' style={{ width: "100%", height: "160px" }} />
              <div class="card-body">
                <h3 class="card-title">OnePiece</h3>
                <p class="card-text">"One Piece" anime follows Monkey D. Luffy's quest to become the Pirate King, encountering diverse characters, epic battles, and uncovering mysteries across vast oceans.</p>
                <a href="Orders.js" class="btn btn-secondary">Manga</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/img2.jpeg" alt='DC Comic' style={{ width: "100%", height: "160px" }} />
              <div class="card-body">
                <h3 class="card-title">Justice League </h3>
                <p class="card-text">Justice League comics feature DC's iconic superheroes teaming up to protect Earth from formidable threats, showcasing epic battles, teamwork, and dynamic character interactions.</p>
                <a href="#" class="btn btn-secondary">Comics</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/img3.jpeg" alt='Crime' style={{ width: "100%", height: "160px" }} />
              <div class="card-body">
                <h3 class="card-title">The Girl with the Dragon Tattoo</h3>
                <p class="card-text">Riveting mystery intertwining family saga, corruption, and a complex investigation with compelling characters and dark secrets.</p>
                <a href="#" class="btn btn-secondary">Crime</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/img4.jpeg" alt='Kids' style={{ width: "100%", height: "160px" }} />
              <div class="card-body">
                <h3 class="card-title">Where the Wild Things Are</h3>
                <p class="card-text">"Where the Wild Things Are" follows Max's journey to a mysterious island inhabited by wild creatures, exploring themes of imagination and childhood freedom.</p>
                <a href="#" class="btn btn-secondary">Kids</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/img5.jpeg" alt='War' style={{ width: "100%", height: "160px" }} />
              <div class="card-body">
                <h3 class="card-title">All Quiet On The Western Front</h3>
                <p class="card-text">Powerful anti-war narrative portraying the harrowing experiences of German soldiers during World War I.</p>
                <a href="#" class="btn btn-secondary">War</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card" style={{ width: "250px" }}>
              <img class="card-img-top" src="./images/img6.jpeg" alt='Bus' style={{ width: "100%", height: "160px" }} />
              <div class="card-body">
                <h3 class="card-title">Rich Dad Poor Dad</h3>
                <p class="card-text">Personal finance classic contrasting financial teachings of the author's "rich dad" and "poor dad," offering valuable insights on wealth accumulation.</p>
                <a href="#" class="btn btn-secondary">Bussiness</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href='now' as={Link} to='/now'active={activeItem === 'now'}
        onClick={() => setactiveItem('now')} class="btn1" style={{marginLeft:"600px"}}>Order Now</a>
    </div>
  )
}