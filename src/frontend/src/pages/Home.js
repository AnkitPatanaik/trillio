import React from "react";
import LoginView from "./LoginView";
import RegistrationView from "./RegistrationView";

function Home() {
  return (
    <section className="section">
      <div className="container">
          <LoginView />
          <RegistrationView />
      </div>
    </section>
  );
}

export default Home;
