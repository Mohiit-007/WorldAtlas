import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import { useAuth } from '../src/context/AuthContext';

const Header = () => {
    const [show, setShow] = useState(false)
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();
    
    const handleclick = () => {
        return setShow(!show)
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    }
    const closeMenu = () => {
       setShow(false);
    };

  return (
    <>
     <header>
        <div className="container">
            <div className="grid navbar-grid">
                <div className="Logo">
                    <NavLink to="/" >
                    <h1>WorldAtlas</h1>
                    </NavLink>
                </div>

                <nav className={show ? 'menu-mobile' : 'menu-web'} >
                    <ul style={{listStyle:'none'}} >
                        <li><NavLink to='/' className="nav-link" onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to='/about' className="nav-link" onClick={closeMenu}>About</NavLink></li>
                        <li><NavLink to='/country' className="nav-link" onClick={closeMenu}>Country</NavLink></li>
                        <li><NavLink to='/contact' className="nav-link" onClick={closeMenu}>Contact</NavLink></li>

                        {isAuthenticated && (
                            <li className="user-section">
                                <span className="user-info">👤 {user?.name}</span>
                                <button className="logout-btn" onClick={()=>{
                                    closeMenu(); 
                                    handleLogout();
                                }}>Logout</button>
                            </li>
                        )}
                        {!isAuthenticated && (
                            <>
                                <li><NavLink to='/login' className="auth-link">Login</NavLink></li>
                                <li><NavLink to='/register' className="auth-link">Register</NavLink></li>
                            </>
                        )}
                    </ul>
                </nav>

                <div className='ham-menu' >
                    <button onClick={handleclick} >
                        <GiHamburgerMenu/>
                    </button>
                </div>

            </div>
        </div>
    </header>   
    </>
  )
}

export default Header