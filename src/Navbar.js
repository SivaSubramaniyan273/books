import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

export default function Navbar() {
  const [activeItem, setactiveItem] = useState();
  return (
    <div>
      <Segment inverted >
        <Menu secondary pointing inverted position="fixed">
          <Menu.Item>
            <img class="paper" src='./images/logo1.jpg' alt='logo' />
          </Menu.Item>
          <Menu.Item>
            <h3 className='App'>Book Shop</h3>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              name='home'
              as={Link} to='/home'
              active={activeItem === 'home'}
              onClick={() => setactiveItem('home')}
            >
              HOME
            </Menu.Item>

            <Menu.Item
              name='books'
              as={Link} to='/books'
              active={activeItem === 'books'}
              onClick={() => setactiveItem('books')}
            >
              BOOKS
            </Menu.Item>

            
            <Menu.Item
              name='orders'
              as={Link} to='/orders'
              active={activeItem === 'orders'}
              onClick={() => setactiveItem('orders')}
            >
              ORDERS
            </Menu.Item>

            <Menu.Item
              name='about'
              as={Link} to='/about'
              active={activeItem === 'about'}
              onClick={() => setactiveItem('about')}
            >
              ABOUT US
            </Menu.Item>
            <Menu.Item
              name='contact'
              as={Link} to='/contact'
              active={activeItem === 'contact'}
              onClick={() => setactiveItem('contact')}
            >
              CONTACT US
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    </div>
  )
}
