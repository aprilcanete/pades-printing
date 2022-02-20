import './App.css';
import TopNav from './TopNav';
import { Routes, Route, Link } from 'react-router-dom'
import About from './About';
import Products from './Products';
import Services from './Services';
import Portfolio from './Porfolio';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import { menuItems } from './menuItems'
import MenuItem from './MenuItem'
import { useState, useEffect, useRef } from "react";
import Dropdown from './Dropdown';


function App() {

  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
     if (dropdown && ref.current && !ref.current.contains(event.target)) {
      setDropdown(false);
     }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
     // Cleanup the event listener
     document.removeEventListener("mousedown", handler);
     document.removeEventListener("touchstart", handler);
    };
   }, [dropdown]);

   const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
   };
   
   const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
   };
  
  return (
    <div className="App">
      <TopNav />
      <header>
        <div className='logo-wrapper'>
          <Link to="/"><h1>PADES</h1></Link>
          <p>Design & Printing</p>
        </div>
        <nav className='nav nav-pills nav-justified'>
          <div className="menus">
          {
            menuItems.map((menu, index) => {
              const depthLevel = 0;
              
              return(
                <Link to={menu.path} className='nav-link' ref={ref} onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}>
                  {menu.subMenu ? (
                  <>
                      <button type="button" aria-haspopup="menu" 
                      aria-expanded={dropdown ? "true" : "false"}
                      onClick={() => setDropdown((prev) => !prev)}
                      >
                      {menu.title}{" "}
                      {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                      </button>
                      <Dropdown 
                        subMenus={menu.subMenu} 
                        dropdown={dropdown} 
                        depthLevel={depthLevel}
                      />
                  </>
                  ) : (menu.title)
                  }
                </Link>
              )
            })
          }
          </div>
           <Link to="/quote" className='nav-link quote'>Get A Quote</Link>
        </nav>
        <hr />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
