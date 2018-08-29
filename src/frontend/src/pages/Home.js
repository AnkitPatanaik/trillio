import React from "react";
import InputComponent from "../components/InputComponent";

class Home extends React.Component {
  render = () => {
    return (
      <div>
        <b>Trillio</b>
        <InputComponent title="Email" name="email" type="email" />
        <InputComponent title="Password" name="password" type="password" />
      </div>
    );
  };
}

export default Home;
