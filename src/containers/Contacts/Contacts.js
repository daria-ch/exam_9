import React, {Component, Fragment} from 'react';
import {closeModalHandler, getContact, getContacts, removeContact} from "../../store/actions/actions";
import {connect} from "react-redux";
import Card from "../../components/Card/Card";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import Contact from "../../components/Contact/Contact";

class Contacts extends Component {

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        let contacts = Object.keys(this.props.contacts).map(contact => {
            return <Card
                key={contact}
                image={this.props.contacts[contact].image}
                alt={this.props.contacts[contact].name}
                name={this.props.contacts[contact].name}
                showInfo={() => this.props.getContact(contact)}
            />
        });

        let contact = <Contact
            name={this.props.contact.name}
            number={this.props.contact.number}
            email={this.props.contact.email}
            image={this.props.contact.image}
            alt={this.props.contact.name}
            id={this.props.id}
            removeContact={() => this.props.removeContact(this.props.id)}
        />;

        if (this.props.loading) {
            contacts = <Spinner/>
        }

        return (
            <Fragment>
                {contacts}
                <Modal
                    show={this.props.show}
                    close={this.props.closeModalHandler}
                >
                    {contact}
                </Modal>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts,
    loading: state.loading,
    contact: state.contact,
    show: state.show,
    id: state.id
});

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts()),
    getContact: id => dispatch(getContact(id)),
    removeContact: id => dispatch(removeContact(id)),
    closeModalHandler: () => dispatch(closeModalHandler())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);