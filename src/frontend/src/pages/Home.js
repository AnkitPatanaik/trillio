import React from "react";
import LoginView from "./LoginView";
import RegistrationView from "./RegistrationView";

function Home() {
  return (
    <div >
      <RegistrationView />
      <br></br>
      <LoginView />
    </div>
  );
}

export default Home;
