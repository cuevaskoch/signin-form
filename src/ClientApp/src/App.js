import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';

import SignInForm from './components/SignInForm';
import { InGoodStanding, NotInGoodStanding } from './components/Confirmation';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={SignInForm} />
        <Route path='/dues-paid' component={InGoodStanding} />
        <Route path='/unknown-email' component={NotInGoodStanding} />
      </Layout>
    );
  }
}
