import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from './components/login-form';
import AppDashboard from './components/app-dashboard';
import * as appActions from './actions/app-actions';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn:this.props.currentUser
    };

    this.loginSubmit = this.loginSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({userLoggedIn:nextProps.currentUser});
  }

  loginSubmit(credentials) {
    this.props.actions.appActions.userLogin(credentials)
  }

  render() {
    if(this.state.userLoggedIn===true) {
      return(<AppDashboard/>);
    } else {
      return (
      <LoginForm loginSubmit={this.loginSubmit} />
      );
    }
    
  }
}

function mapStoreToProps(state) {
  return {
    currentUser:state.login.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      appActions: bindActionCreators(appActions, dispatch)
    }
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(App);
