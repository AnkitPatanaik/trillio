import React from "react";
import { connect } from 'react-redux';
import { registerUser } from '../actions/registrationActions';
import InputComponent from "../components/InputComponent";

class RegistrationView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: '',
        password: '',
      },
    };
  }

  onChange = (event) => {
    const nextCredentials = this.state.credentials;
    nextCredentials[event.target.name] = event.target.value;
    return this.setState({ credentials: nextCredentials });
  };

  onSave = (event) => {
    event.preventDefault();
    this.props.registerUser(this.state.credentials);
  }

  render = () => {
    return (
      <section className="section">
        <div className="login-box column is-4 box">
          <center>
              <b>Trillio Login Page </b>
              <InputComponent title="Username" name="username" onChange={this.onChange}/>
              <InputComponent title="Password" name="password" onChange={this.onChange}/>
              <button onClick={this.onSave}>Login</button>
          </center>
        </div>
      </section>
    );
  };
}

// allows you to refer to state defined in reducers as the keys here 
function mapStateToProps(state) {
  return {
    placeholder: state.registrationReducer.isRegistered, //placeholder
  };
}

// lets you dispatch actions() as the keys here
function mapDispatchToProps(dispatch) {
  return {
    registerUser: (credentials) => {
      dispatch(registerUser(credentials));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationView);
