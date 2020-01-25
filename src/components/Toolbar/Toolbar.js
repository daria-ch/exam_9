import React from 'react';
import './Toolbar.css';


const Toolbar = () => (
    <header className='Toolbar'>
        <div className='Toolbar-text'>
            Contacts
        </div>
        <button className='new-contact-btn'>Add new contact</button>
    </header>
);

export default Toolbar;