import React from "react";
import Board from "../components/Board";

function Room() {
  return (
    <section className="section">
      <div className="container">
        <center>
          <b>New Room</b>
          <Board rows={8} columns={8}/>
        </center>
      </div>
    </section>
  );
}

export default Room;
