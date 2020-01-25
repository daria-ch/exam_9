import React, {Component, Fragment} from 'react';
import Button from "../../components/UI/Button/Button/Button";
import axiosContacts from "../../axios-contacts";
import '../NewContact/NewContact.css';

class EditContact extends Component {
    state = {
        name: '',
        number: '',
        email: '',
        image: ''
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await axiosContacts.get('/contacts/' + id + '.json');
        this.setState({
            image: response.data.image,
            number: response.data.number,
            email: response.data.email,
            name: response.data.name
        });
    }

    inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

    changeContactHandler = async (event) => {
        event.preventDefault();
        const changedContact = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            image: this.state.image
        };
        this.setState({name: '', number: '', email: '', image: ''});

        const id = this.props.match.params.id;
        await axiosContacts.put('/contacts/' + id + '.json', changedContact);
        this.props.history.push('/');
    };

    buttonHandler = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <h1>Add new contact</h1>
                <form onSubmit={this.changeContactHandler}>
                    <div className='form-div'>
                        <label htmlFor="name">Name</label>
                        <input className='Input' type="text" name='name' id='name' placeholder='Enter contact name'
                               autoComplete='off'
                               value={this.state.name}
                               onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className='form-div'>
                        <label htmlFor="number">Phone number</label>
                        <input className='Input' type="number" name='number' id='number'
                               placeholder='Enter phone number'
                               autoComplete='off'
                               value={this.state.number}
                               onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className='form-div'>
                        <label htmlFor="email">E-mail</label>
                        <input className='Input' type="email" name='email' id='email' placeholder='Enter e-mail'
                               autoComplete='off'
                               value={this.state.email}
                               onChange={this.inputChangeHandler}
                        />
                    </div>
                    <div className='form-div'>
                        <label htmlFor="">Image</label>
                        <input className='Input' type="text" name='image' id='image' placeholder='Enter image url'
                               autoComplete='off'
                               value={this.state.image}
                               onChange={this.inputChangeHandler}
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


export default EditContact;