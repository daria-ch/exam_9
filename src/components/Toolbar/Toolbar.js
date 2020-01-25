import React from 'react';
import './Toolbar.css';
import {NavLink} from "react-router-dom";


const Toolbar = () => (
    <header className='Toolbar'>
        <div className='Toolbar-text'>
            Contacts
        </div>
        <NavLink className='new-contact-btn' to={'/contact'}>Add new contact</NavLink>
    </header>
);

export default Toolbar;