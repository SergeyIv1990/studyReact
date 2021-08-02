import React from 'react';
import gerb from '../../img/Gerb.png';
import pop from './Header.module.css';

const Header = () => {
    return (
        <header className={pop.header}>
            <img src={gerb} />
        </header>
        )
        
        };
    
export default Header;