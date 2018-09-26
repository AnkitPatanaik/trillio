import React from "react";
import Square from "./Square";

//sound imports
import sound1 from "../assets/audio/Samples1/Clap (2).mp3";
import sound2 from "../assets/audio/Samples1/Kick 1.mp3";
import sound3 from "../assets/audio/Samples1/Kick 4.mp3";
import sound4 from "../assets/audio/Samples1/Perc 1.mp3";
import sound5 from "../assets/audio/Samples1/Perc 5.mp3";
import sound6 from "../assets/audio/Samples1/Snare.mp3";
import sound7 from "../assets/audio/Samples1/Vox (2).mp3";
import sound8 from "../assets/audio/Samples1/Vox (5).mp3";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  getSoundForRow = soundIndex => {
    //array of all 8 sounds, sound will correspond with row
    var sounds = [
      sound1,
      sound2,
      sound3,
      sound4,
      sound5,
      sound6,
      sound7,
      sound8
    ];

    return sounds[soundIndex];
  };

  createOneRow = (numColumns, soundIndex) => {
    var i;
    var squares = [];
    var source = this.getSoundForRow(soundIndex);

    for (i = 0; i < numColumns; i++) {
      squares.push(<Square className source={source} />);
    }
    return squares;
  };

  createManyRows = (numRows, numColumns) => {
    var i;
    let rows = [];
    for (i = 0; i < numRows; i++) {
      rows.push(<div className="buttons has-addons is-centered">{this.createOneRow(numColumns, i)}</div>);
    }
    return rows;
  };

  render() {
    return (
        <div>{this.createManyRows(this.props.rows, this.props.columns)}</div>
    );
  }
}

export default Board;
