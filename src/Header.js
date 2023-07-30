import React from 'react';
import './Header.css';

import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
// import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="header__icon"/>
        </IconButton>
        <img 
        className='header__logo' 
        src='\tinder__logo.png'
        alt=''
        />
        <h2>I am a header</h2>  
    </div>
}

export default Header;