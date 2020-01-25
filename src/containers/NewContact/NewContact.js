import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {addContact} from "../../store/actions/actions";
import Button from "../../components/UI/Button/Button/Button";
import './NewContact.css';

class NewContact extends Component {
    state = {
        name: '',
        number: '',
        email: '',
        image: ''
    };

    valueChanged = (event) => this.setState({[event.target.name]: event.target.value});

    addContactHandler = async (event) => {
        event.preventDefault();
        const contact = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            image: this.state.image
        };
        await this.props.addContact(contact);
        this.props.history.push('/');
    };

    buttonHandler = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <h1>Add new contact</h1>
                <form onSubmit={this.addContactHandler}>
                    <div className='form-div'>
                        <label htmlFor="name">Name</label>
                        <input className='Input' type="text" name='name' id='name' placeholder='Enter contact name'
                               autoComplete='off'
                               value={this.state.name}
                               onChange={this.valueChanged}
                        />
                    </div>
                    <div className='form-div'>
                        <label htmlFor="number">Phone number</label>
                        <input className='Input' type="number" name='number' id='number'
                               placeholder='Enter phone number'
                               autoComplete='off'
                               value={this.state.number}
                               onChange={this.valueChanged}
                        />
                    </div>
                    <div className='form-div'>
                        <label htmlFor="email">E-mail</label>
                        <input className='Input' type="email" name='email' id='email' placeholder='Enter e-mail'
                               autoComplete='off'
                               value={this.state.email}
                               onChange={this.valueChanged}
                        />
                    </div>
                    <div className='form-div'>
                        <label htmlFor="">Image</label>
                        <input className='Input' type="text" name='image' id='image' placeholder='Enter image url'
                               autoComplete='off'
                               value={this.state.image}
                               onChange={this.valueChanged}
                        />
                    </div>
                    <div className='preview'>
                        <p>Photo Preview</p>
                        <img src={this.state.image} alt="Contact"/>
                    </div>
                    <div className='form-buttons'>
                        <Button>Save</Button>
                        <button className='form-button' onClick={this.buttonHandler}>Back to contacts</button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addContact: contact => dispatch(addContact(contact))
});

export default connect(null, mapDispatchToProps)(NewContact);