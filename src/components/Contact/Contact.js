import React, {Fragment} from 'react';
import Button from "../UI/Button/Button/Button";

const Contact = props => {
    return (
        <Fragment>
            <div className='contact-info'>
                <img src={props.image} alt={props.alt}/>
                <div className='info'>
                    <h3>{props.name}</h3>
                    <span>{props.number}</span>
                    <span>{props.email}</span>
                </div>
            </div>
            <div className='info-buttons'>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </div>
        </Fragment>
    );
};


export default Contact;