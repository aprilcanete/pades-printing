import './App.css';
import TopNav from './TopNav';
import Footer from './Footer';
import { menuItems } from './menuItems'
import MenuItem from './MenuItem'
import { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Products from './Products';
import Services from './Services';
import Portfolio from './Porfolio';
import Contact from './Contact';
import Product from "./Product";
import LoginForm from './LoginForm';
import GetQuote from './GetQuote';


function App() {

  const [isShowLogin, setIsShowLogin] = useState(true)
  let container = document.querySelector(".container")

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }

  const changeLoginBgc = (login) => {
    // (login ? container.style.opacity = '0' : container.style.opacity = '1')
  }

  return ( 
    <div className="App">
      <TopNav handleLoginClick={handleLoginClick}/>
      <div className={`login-container ${isShowLogin ? "active" : ""} show`}>
          <LoginForm/> {changeLoginBgc(isShowLogin)}
      </div>
      <div className={`container${isShowLogin || " inactive"}`}>
        <header>
          <div className='logo-wrapper'>
            <Link to="/">
              <img src="/images/pades-logo.png" alt="pades logo" />
            </Link>
          </div>
          <nav className='nav nav-pills nav-justified'>
            <div className="menus">
            {
              menuItems.map((menu, index) => {
                const depthLevel = 0;
                
                return(
                  <MenuItem items={menu} key={index} depthLevel={depthLevel}/>
                )
              })
            }
            </div>
            <Link to="/getquote" className='nav-link quote'>Get A Quote</Link>
          </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/brochure" element={<Products />} />
            <Route path="/products/banner" element={<Products />} />
            <Route path="/products/business-card" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/getquote" element={<GetQuote items={menuItems}/>} />
        </Routes> 
      </div> 
      <Footer />
    </div>
  );
}

export default App;
