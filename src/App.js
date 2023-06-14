/*import React from 'react';
import image from './image.png';

function App(){
  return (
    <div>
      <nav>
       <header>
        <img src={image} width="40px" alt="logo"/>
       </header>
       <h1>Reasons I'm excited to learn React</h1>
    <ol>
      <li>yes it so good</li>
      <li>yes it so good</li>
      <li>yes it so good</li>
      <li>yes it so good</li>
      <li>yes it so good</li>
    </ol>
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
      </nav>
    </div>
);
} 


export default App;*/
import React from "react";
import image from "./image.png";

function Header() {  
  return (
    <header>
      <nav className="nav">
        <img src={image} className="nav-logo" alt="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
