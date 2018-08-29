import React from "react";
import InputComponent from "../components/InputComponent";

class Home extends React.Component {

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
  }

  render = () => {
    return (
      <div>
        <center>
          <b>Trillio </b>
          <InputComponent title="Username" name="username" onChange={this.onChange}/>
          <InputComponent title="Password" name="password" onChange={this.onChange}/>
          <button onClick={this.onSave}>Register</button>
        </center>
      </div>
    );
  };
}

export default Home;
