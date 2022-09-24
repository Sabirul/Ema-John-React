import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src ={logo}></img>
            <nav>
                <a href='/shopOrder'>ShopOrder</a>
                <a href='/reviewManager'>ReviewManager</a>
                <a href='/inventory'>Inventory</a>
            </nav>
            
        </div>
    );
};

export default Header;