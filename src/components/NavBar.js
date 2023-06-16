import React from 'react'
import Image from './Image.png'
function NavBar() {  
  return (
      <nav className="nav">
        <img src={Image} alt="logo" />
        <h3>React Facts</h3>
        <h4>Reasons I'm excited to learn React</h4>
      </nav>
  );
}


export default NavBar