import React, {Fragment} from 'react';
import Button from "../UI/Button/Button/Button";
import './Contact.css';
import {NavLink} from "react-router-dom";

const Contact = props => {
    return (
        <Fragment>
            <div className='contact-info'>
                <img src={props.image} alt={props.alt}/>
                <div className='info'>
                    <h1>{props.name}</h1>
                    <span>{props.number}</span>
                    <span>{props.email}</span>
                </div>
            </div>
            <div className='info-buttons'>
                <NavLink className='edit-button' to={'/contact/' + props.id + '/edit'}>Edit</NavLink>
                <Button onClick={props.removeContact}>Delete</Button>
            </div>
        </Fragment>
    );
};


export default Contact;