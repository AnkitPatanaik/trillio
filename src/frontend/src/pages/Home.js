import React from "react";
import LoginView from "./LoginView";
import RegistrationView from "./RegistrationView";

function Home() {
  return (
    <section className="section">
      <div className="container">
        <center>
          <RegistrationView />
          <LoginView />
        </center>
      </div>
    </section>
  );
}

export default Home;
