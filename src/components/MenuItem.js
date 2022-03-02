import { useState, useEffect, useRef } from "react";
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom'

const MenuItem = ({ items, depthLevel }) => {
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
        <>
            <li className="menu-items" 
                ref={ref} 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {items.subMenu ? (
                <>
                    <Link 
                        to={items.path + "/" + items.title}
                        role='button'
                        aria-haspopup="menu" 
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </Link>
                    <Dropdown 
                        subMenus={items.subMenu} 
                        dropdown={dropdown} 
                        depthLevel={depthLevel}
                    />
                </>
                ) : ( <Link to={items.path}>{items.title}</Link>)
                }
            </li>
        </>
       
        
    ) 
}

export default MenuItem;