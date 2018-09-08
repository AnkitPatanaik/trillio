import React from "react";
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginActions';
import InputComponent from "../components/InputComponent";

class LoginView extends React.Component {

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
    this.props.loginUser(this.state.credentials);
  }

  render = () => {
    return (
      <section className="section">
        <div className="login-box column is-4 box is-center">
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
    placeholder: state.loginReducer.isAuthenticated, //placeholder
  };
}

// lets you dispatch actions() as the keys here
function mapDispatchToProps(dispatch) {
  return {
    loginUser: (credentials) => {
      dispatch(loginUser(credentials));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
