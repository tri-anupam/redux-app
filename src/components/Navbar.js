import React from "react";
import '../index.css'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinkStyle = ({isActive}) =>{
        return{
            fontWeight: isActive ? "bold" :"normal"
        }
    }
  return (
    <div>
      <nav> 
        <div style={{display:'flex',alignItems:'space-between'}}>
            <Link to='/' className="logo">REDUX STORE</Link>
            <NavLink to='/' style={navLinkStyle} className='navLink'>Home</NavLink>
            <NavLink to='/cart' style={navLinkStyle} className='navLink'>Cart</NavLink>
            <span className="cartCount">
                Cart items: 0
            </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
