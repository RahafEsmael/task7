import './Navbar.css'
import React, { useState } from 'react';
//import {CiSearch} from 'react-icons/fa'
//import {SlBasket} from 'react-icons/fa'
//import{useState} from 'react'
function Navbar() {
  const [isOpen, setisOpen]=useState(false);
  const toggleDropdown = () =>{setisOpen(!isOpen);};
  return (
    <nav className='RENavbar'>
      <div>
       <img src="./public/V7-task/logo.svg"/> 
      </div>
      <ul className='Menu'>
      
      <li onClick={toggleDropdown}>
          Home
          {isOpen && (
            <ul className="dropdown">
              <li>Submenu 1</li>
              <li>Submenu 2</li>
              <li>Submenu 3</li>
            </ul>
          )}
        </li>
      <li>About</li>
      <li onClick={toggleDropdown}>
          Services
          {isOpen && (
            <ul className="dropdown">
              <li>Submenu 1</li>
              <li>Submenu 2</li>
              <li>Submenu 3</li>
            </ul>
          )}
          </li>
          <li onClick={toggleDropdown}>
          Pages
          {isOpen && (
            <ul className="dropdown">
              <li>Submenu 1</li>
              <li>Submenu 2</li>
              <li>Submenu 3</li>
            </ul>
          )}
        </li>
        <li onClick={toggleDropdown}>
          Blog
          {isOpen && (
            <ul className="dropdown">
              <li>Submenu 1</li>
              <li>Submenu 2</li>
              <li>Submenu 3</li>
            </ul>
          )}
        </li>
      <li>Contact</li>
      </ul>
     
      <button className='buttonShaep'>GET A QUOTE</button>
    </nav>
  )
}

export default Navbar