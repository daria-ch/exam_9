import React from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router";
import Contacts from "./containers/Contacts/Contacts";
import EditContact from "./containers/EditContact/EditContact";
import Contact from "./components/Contact/Contact";

const App = () => (
    <Layout>
        <Switch>
            <Route path='/' exact component={Contacts}/>
            <Route path='/contact/:id/edit' exact component={EditContact}/>
            <Route path='/contact' exact component={Contact}/>
            <Route render={() => <h1>Not found</h1>}/>
        </Switch>
    </Layout>
);

export default App;