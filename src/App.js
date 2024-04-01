import './App.css';
import { Component } from 'react';
import Navbar from './Navbar';
import { Route, Routes, Form } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Orders from './Orders';
import Books from './Books';


export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="home" element = {<Home/>} />
          <Route path="about" element = {<About/>} />
          <Route path="navbar" element = {<Navbar/>} />
          <Route path="contact" element = {<Contact/>} />
          <Route path="orders" element = {<Orders/>} />
          <Route path="books" element = {<Books/>} />
        </Routes>
      </div>
    )
  }
}
