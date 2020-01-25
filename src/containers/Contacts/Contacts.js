import React, {Component, Fragment} from 'react';
import {getContacts} from "../../store/actions/actions";
import {connect} from "react-redux";
import Card from "../../components/Card/Card";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import Contact from "../../components/Contact/Contact";

class Contacts extends Component {
    state = {
        show: false,
    };

    componentDidMount() {
        this.props.getContacts();
    }

    showCancelHandler = () => {
        this.setState({show: false});
    };

    showInfoHandler = () => {
        this.setState({show: true});
    };


    render() {
        let contacts = Object.keys(this.props.contacts).map(contact => {
            console.log(this.props.contacts[contact]);
            return <Card
                key={contact}
                image={this.props.contacts[contact].image}
                alt={this.props.contacts[contact].name}
                name={this.props.contacts[contact].name}
                showInfo={this.showInfoHandler}
            >
                <Modal
                    show={this.state.show}
                    close={this.showCancelHandler}
                >
                    <Contact
                        key={contact}
                        image={this.props.contacts[contact].image}
                        alt={this.props.contacts[contact].name}
                        name={this.props.contacts[contact].name}
                        email={this.props.contacts[contact].email}
                        number={this.props.contacts[contact].number}
                    />
                </Modal>
            </Card>
        });

        if (this.props.loading) {
            contacts = <Spinner/>
        }

        return (
            <Fragment>
                {contacts}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts,
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);