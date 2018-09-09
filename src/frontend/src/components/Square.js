import React from "react";
import { Rectangle } from "react-shapes";
import ReactHowler from "react-howler";

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false
    };
  }

  playSound = () => {
    this.setState({
      playing: true//do the opposite of the current state
    });
  };

  render() {
    console.log(this.props.source);
    return (
      <div>
        <ReactHowler
          className="box"
          src={this.props.source}
          playing={this.state.playing}
        />
        <button className="button" onClick={this.playSound}>Play</button>
      </div>
    );
  }
}

export default Square;
