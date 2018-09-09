import React from "react";
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

function Board() {
    let numRows = 8;
    let numColumns = 8;
  return (

    <Row>
        <Col className="card" span={1}>Column1</Col>
    </Row>
  );
}

export default Board;
