import React from "react";
import Square from "./Square"

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  createOneRow = numColumns => {
    var i;
    let squares = [];
    for (i = 0; i < numColumns; i++) {
      squares.push(
        <Square >
        </Square>
      );
    }
    squares.push(<br></br>)
    return squares;
  };

  createManyRows = (numRows, numColumns) => {
    var i;
    let rows = [];
    for (i = 0; i < numRows; i++) {
      rows.push(this.createOneRow(numColumns));
    }
    return rows;
  };

  render() {
    return <div>{this.createManyRows(this.props.rows, this.props.columns)}</div>;
  }
}

export default Board;
