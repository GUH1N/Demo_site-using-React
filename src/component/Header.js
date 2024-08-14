import React from 'react';
import ReactDOM from 'react-dom';
import 'D:/Work_Space/full_stack/react.js/demo/src/index.css';

function Header(){
    return(
      <div className="container_header">
        <div className='head_h1'>
            <p className='p1_header'>TWD</p>
        </div>
        <div>
            <ul className='list'>
                <li>Home</li>
                <li>About Us</li>
                <li>Products</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
      </div>
    );
  }

  export default Header;